import { IForm } from '@/base-ui/form/type'

export const modalConfig: IForm = {
  labelWidth: '80px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请选择上级部门',
      options: []
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导名称',
      placeholder: '请输入领导名称'
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
