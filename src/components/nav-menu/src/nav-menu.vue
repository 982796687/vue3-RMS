<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!collapse">Vue3+TS</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="items in userMenus" :key="items.id">
        <!-- // 1.若有子菜单 -->
        <template v-if="items.type === 1 && items.id !== 41">
          <el-sub-menu :index="items.id + ''">
            <template #title>
              <i v-if="items.icon" :class="items.icon"></i>
              <span>{{ items.name }}</span>
            </template>
            <template v-for="childItems in items.children" :key="childItems.id">
              <el-menu-item
                :index="childItems.id + ''"
                @click="handleMenuClick(childItems)"
              >
                <i v-if="childItems.icon" :class="childItems.icon"></i>
                <span>{{ childItems.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- // 若无子菜单 -->
        <template v-else-if="items.type === 2">
          <el-menu-item :index="items.id + ''">
            <i v-if="items.icon" :class="items.icon"></i>
            <span>{{ items.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/util/map-menus'

export default defineComponent({
  //props是为了从父组件中拿到:collapse属性的布尔值，是将collapse传到子组件中
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path
    //computed 拿到的是ref对象
    const menu = pathMapToMenu(userMenus.value, currentPath)

    const defaultValue = ref(menu.id + '')
    const handleMenuClick = (item: any) => {
      router.push({
        path: item.url ?? 'not-found'
      })
      console.log(item.url)
    }

    return { userMenus, handleMenuClick, defaultValue }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
