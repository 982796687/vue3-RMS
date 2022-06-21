<template>
  <div class="searchPage">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header> <h1>高级检索</h1> </template>
      <template #footer>
        <div class="handle-btn">
          <el-button icon="el-icon-refresh" @click="handleResetClick">
            重置</el-button
          >
          <el-button
            icon="el-icon-search"
            type="primary"
            @click="handleQueryClick"
          >
            搜索</el-button
          >
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import HyForm from '@/base-ui/form'
import { ElIcon } from 'element-plus'

export default defineComponent({
  components: {
    HyForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    onMounted(() => {
      if (sessionStorage.getItem('store')) {
        formData.value = JSON.parse(sessionStorage.getItem('store') || '[]')

        sessionStorage.removeItem('store')
      }
    })
    // 双向绑定的属性应该是由配置文件的field来决定
    // 1.优化一: formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)
    //2.优化重置按钮
    const handleResetClick = (): void => {
      console.log('111')

      formData.value = formOriginData
      emit('resetBtnClick')
    }
    //3.优化搜索按钮
    const handleQueryClick = (): void => {
      console.log(formData.value)

      emit('queryBtnClick', formData.value)
    }
    window.addEventListener('beforeunload', () => {
      console.log(1)

      sessionStorage.setItem('store', JSON.stringify(formData.value))
    })

    return { formData, ElIcon, handleResetClick, handleQueryClick }
  }
})
</script>

<style scoped>
.handle-btn {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
