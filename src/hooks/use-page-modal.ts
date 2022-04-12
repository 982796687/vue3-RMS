import { ref } from 'vue'
import modalPage from '@/components/modalPage'

type CallbackFn = (item?: any) => void

export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof modalPage>>()
  const defaultInfo = ref({})

  const newBtnClick = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
    // console.log('22')
  }
  const editBtnClick = (item: any) => {
    defaultInfo.value = { ...item }

    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb(item)
  }
  return [newBtnClick, editBtnClick, pageModalRef, defaultInfo]
}
