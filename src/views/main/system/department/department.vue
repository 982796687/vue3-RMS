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
      @handleNewClick="handleNewClick"
      :contentTableConfig="contentTableConfig"
      pageName="department"
      newBtn="新建部门"
    ></content-page>
    <!-- <modal-page :modalConfig="modalConfig"></modal-page> -->
  </div>
</template>

<script lang="ts" setup>
import searchPage from '@/components/searchPage'
import contentPage from '@/components/contentPage'
import modalPage from '@/components/modalPage'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/use-page-search'
// import ModalPage from '@/components/modalPage'
// import modalConfig from './config/modal.config'

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>

<style scoped></style>
