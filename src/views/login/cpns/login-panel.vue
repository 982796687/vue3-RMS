<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs
      type="border-card"
      class="login-border"
      stretch
      v-model="currentTab"
    >
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i>账号登录</span>
          <el-icon> </el-icon>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane label="Config" name="phone">
        <template #label>
          <span> <i class="el-icon-mobile-phone"></i>手机登录 </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox label="记住密码" v-model="isKeepPassword"></el-checkbox>
      <el-link type="primary" underline>忘记密码</el-link>
    </div>
    <el-button type="primary" class="btn-login" @click="BtnLogin"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    const currentTab = ref('account')
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()

    const BtnLogin = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.LoginAction(isKeepPassword.value)
      } else {
        phoneRef.value?.LoginPhone()
      }
    }
    return { isKeepPassword, BtnLogin, accountRef, phoneRef, currentTab }
  }
})
</script>

<style scoped lang="less">
.login-border {
  width: 350px;
  // margin-bottom: 120px;
}
.title {
  text-align: center;
}

.login-panel {
  margin-bottom: 160px;
}
.account-control {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.btn-login {
  width: 100%;
  margin-top: 10px;
}
</style>
