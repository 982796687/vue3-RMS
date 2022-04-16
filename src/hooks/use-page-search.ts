import { ref } from 'vue'
import contentPage from '@/components/contentPage'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof contentPage>>()

  const handleResetClick = (): void => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    console.log('发生了点击')

    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}
