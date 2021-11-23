<template>
  <div>
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号:" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import LocalCache from '@/util/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const LoginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((vaild) => {
        if (vaild) {
          //1.判断是否需要记住密码
          if (isKeepPassword) {
            //本地缓存
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          } else {
            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password')
          }
        } else {
          console.log('未验证通过')
        }
        //2.开始登录验证
        store.dispatch('accountLoginAction', { ...account })
      })
    }

    return { account, rules, formRef, LoginAction, LocalCache }
  }
})
</script>

<style scoped></style>
