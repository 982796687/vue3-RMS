<template>
  <div class="goods">
    <content-page :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #oldPrice="scope">{{ '¥' + scope.row.oldPrice }}</template>
    </content-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import contentPage from '@/components/contentPage'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  components: {
    contentPage
  },
  name: 'goods',
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>
