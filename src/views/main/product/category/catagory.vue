<template>
  <div class="catagory">
    <search-page
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
      pageName="category"
    ></search-page>
    <content-page
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="category"
      newBtn="新建商品类别"
      @handleNewClick="newBtnClick"
      @handleEditClick="editBtnClick"
    ></content-page>
    <modal-page
      pageName="category"
      newBtn="新建商品类别"
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    ></modal-page>
  </div>
</template>

<script lang="ts" setup>
import searchPage from '@/components/searchPage'
import contentPage from '@/components/contentPage'
import modalPage from '@/components/modalPage'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
const [newBtnClick, editBtnClick, pageModalRef, defaultInfo] = usePageModal()
</script>

<style scoped></style>
