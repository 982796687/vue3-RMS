import { IForm } from '@/base-ui/form/type'

export const modalConfig: IForm = {
  labelWidth: '80px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  formStyle: { padding: '10px 40px' },
  colLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    sx: 24
  }
}
