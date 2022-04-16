import { IForm } from '@/base-ui/form/type'

export const modalConfig: IForm = {
  labelWidth: '80px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    }
  ],
  formStyle: { padding: '5px 40px' },
  colLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    sx: 24
  }
}
