<template>
  <div class="department">
    <search-page
      :searchFormConfig="searchFormConfig"
      @handleResetClick="handleResetClick"
    ></search-page>
    <content-page
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="department"
      newBtn="新建部门"
    ></content-page>
  </div>
</template>

<script lang="ts" setup>
import searchPage from '@/components/searchPage'
import contentPage from '@/components/contentPage'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/use-page-search'

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>

<style scoped></style>
