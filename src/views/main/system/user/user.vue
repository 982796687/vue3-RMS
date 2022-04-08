<template>
  <div class="user">
    <searchPage
      :searchFormConfig="searchFormConfig"
      @handleResetClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></searchPage>
    <contentPage
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @handleEditClick="editBtnClick"
      @handleNewClick="newBtnClick"
      newBtn="新建用户"
    ></contentPage>
    <modalPage
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      pageName="users"
      :defaultInfo="defaultInfo"
    ></modalPage>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import searchPage from '@/components/searchPage'
import { searchFormConfig } from './config/search.config'
import contentPage from '@/components/contentPage'
import { usePageSearch } from '@/hooks/use-page-search'
import { contentTableConfig } from './config/content.config'
import modalPage from '@/components/modalPage'
import { modalConfig } from './config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'

export default defineComponent({
  name: 'users',

  components: { searchPage, contentPage, modalPage },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    //ModalPage相关逻辑
    //1.处理密码逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => {
        return item.field === 'password'
      })

      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => {
        return item.field === 'password'
      })

      passwordItem!.isHidden = true
      // }
    }
    //2. 动态添加部门和角色列表
    const modalConfigRef = computed(() => {
      const store = useStore()
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })

      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })

      return modalConfig
    })
    //3.调用hook获取公共变量和函数
    const [newBtnClick, editBtnClick, pageModalRef, defaultInfo] = usePageModal(
      newCallback,
      editCallback
    )

    return {
      searchFormConfig,
      handleResetClick,
      pageContentRef,
      handleQueryClick,
      contentTableConfig,
      modalConfigRef,
      editBtnClick,
      newBtnClick,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
