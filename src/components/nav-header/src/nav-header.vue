<template>
  <div class="nav-header">
    <div class="icon" @click="FoldClick">
      <el-icon :size="25" v-if="!isFold">
        <fold />
      </el-icon>
      <el-icon :size="25" v-else>
        <expand />
      </el-icon>
    </div>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumb"></hy-breadcrumb>
      <use-info></use-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons'
import useInfo from './useInfo.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb/index'

import { pathMapBreadcrumbs } from '@/util/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  //利用FoldClick方法，将’foldChange‘传到父组件中
  emits: ['foldChange'],
  components: {
    Fold,
    Expand,
    useInfo,
    HyBreadcrumb
  },
  setup(prop, { emit }) {
    const isFold = ref(false)
    const FoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const store = useStore()

    const breadcrumb = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return { isFold, FoldClick, HyBreadcrumb, breadcrumb }
  }
})
</script>

<style scoped>
.nav-header {
  width: 100%;
  display: flex;
}
.content {
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
}
</style>
