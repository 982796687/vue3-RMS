<template>
  <div class="role">
    <search-page
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></search-page>
    <contentPage
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @handleEditClick="editBtnClick"
      @handleNewClick="newBtnClick"
      newBtn="新建角色"
    ></contentPage>
    <modal-page
      :modalConfig="modalConfig"
      ref="pageModalRef"
      pageName="role"
      newBtn="新建角色"
      :otherInfo="otherInfo"
      :defaultInfo="defaultInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="eltreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{
            children: 'children',
            label: 'name'
          }"
          @check="handleCheckChange"
        />
      </div>
    </modal-page>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import searchPage from '@/components/searchPage'
import { searchFormConfig } from './config/search.config'
import contentPage from '@/components/contentPage'
import { contentTableConfig } from './config/content.config'
import modalPage from '@/components/modalPage'
import { modalConfig } from '../role/config/modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'
import { menuMapLeafKeys } from '@/util/map-menus'
import { ElTree } from 'element-plus'
import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'role',

  components: {
    searchPage,
    contentPage,
    modalPage
  },
  setup() {
    //处理search中搜索按钮（这个hooks是在重新发送网络请求）
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const eltreeRef = ref<InstanceType<typeof ElTree>>()

    const editCallback = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        eltreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    //3.调用hook获取公共变量和函数
    const [newBtnClick, editBtnClick, pageModalRef, defaultInfo] = usePageModal(
      undefined,
      editCallback
    )
    const store = useStore()
    const otherInfo = ref({})

    const menus = computed(() => store.state.entireMenu)

    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
      console.log('menuList:', menuList, otherInfo.value)
    }
    return {
      contentTableConfig,
      searchFormConfig,
      defaultInfo,
      modalConfig,
      pageModalRef,
      editBtnClick,
      newBtnClick,
      menus,
      handleCheckChange,
      otherInfo,
      eltreeRef,
      handleQueryClick,
      pageContentRef,
      handleResetClick
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 45px;
}
</style>
