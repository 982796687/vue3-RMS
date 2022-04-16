export const contentTableConfig = {
  showIndexColumn: true,
  showSelectColumn: true,

  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '100',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
