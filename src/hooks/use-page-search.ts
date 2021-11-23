import { ref } from 'vue'
import contentPage from '@/components/contentPage'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof contentPage>>()

  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}
