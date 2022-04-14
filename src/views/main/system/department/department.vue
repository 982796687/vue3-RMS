<template>
  <div class="department">
    <search-page
      pageName="department"
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></search-page>
    <content-page
      ref="pageContentRef"
      @handleNewClick="newBtnClick"
      @handleEditClick="editBtnClick"
      :contentTableConfig="contentTableConfig"
      pageName="department"
      newBtn="新建部门"
    ></content-page>
    <modal-page
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      pageName="department"
      newBtn="新建部门"
      :defaultInfo="defaultInfo"
    ></modal-page>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import searchPage from '@/components/searchPage'
import contentPage from '@/components/contentPage'
import modalPage from '@/components/modalPage'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
// import ModalPage from '@/components/modalPage'
import { modalConfig } from './config/modal.config'
import { useStore } from '@/store'

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

//监听新建按钮点击
const store = useStore()
const [newBtnClick, editBtnClick, pageModalRef, defaultInfo] = usePageModal()
const modalConfigRef = computed(() => {
  const parentIdItem = modalConfig.formItems?.find(
    (item) => item.field === 'parentId'
  )
  console.log(store.state.entireDepartment, '11')

  parentIdItem!.options = store.state.entireDepartment.map((item) => {
    return { lable: item.name, value: item.id }
  })
  console.log(parentIdItem!.options)

  return modalConfig
})
</script>

<style scoped></style>
