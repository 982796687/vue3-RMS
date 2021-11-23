<template>
  <div class="menus">
    <content-page
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></content-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import contentPage from '@/components/contentPage'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'menus',
  components: {
    contentPage
  },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
