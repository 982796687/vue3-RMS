export const rules = {
  number: [
    {
      required: true,
      message: '请您输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '请正确输入11位手机号',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请您输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '请正确输入6位验证码',
      trigger: 'blur'
    }
  ]
}
