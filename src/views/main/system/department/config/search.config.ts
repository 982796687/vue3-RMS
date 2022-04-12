import { IForm } from '@/base-ui/form/type'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'department',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  formStyle: { padding: '10px 40px' },
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    sx: 24
  }
}
