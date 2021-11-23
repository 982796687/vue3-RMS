export const rules = {
  name: [
    {
      required: true,
      message: '用户名是必传的',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名为5~10位字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '您未输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须为三位以上字母或者数字',
      trigger: 'blur'
    }
  ]
}
