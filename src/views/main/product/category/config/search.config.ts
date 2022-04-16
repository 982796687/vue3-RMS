import { IForm } from '@/base-ui/form/type'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: '商品ID',
      placeholder: '请输入商品名称'
    },
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
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
