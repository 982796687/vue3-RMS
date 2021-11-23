<template>
  <div>
    <el-form label-width="70px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号:" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码:" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/phone-config'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })
    const store = useStore()

    const formRef = ref<InstanceType<typeof ElForm>>()
    const LoginPhone = () => {
      formRef.value?.validate(() => {
        store.dispatch('phoneLoginAction', { ...phone })
      })
    }
    return { phone, rules, formRef, LoginPhone, store }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 8px;
}
</style>
