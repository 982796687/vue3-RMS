<template>
  <div class="content-page">
    <hy-table
      :listData="dataList"
      v-bind="contentTableConfig"
      :dataCount="dataCount"
      v-model:page="pageInfo"
    >
      //header中的插槽
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate" @click="handleNewClick()"
          >新建用户</el-button
        >
      </template>
      //table中的插槽
      <template #status="scope">
        <el-button
          :type="scope.row.enable ? 'success' : 'danger'"
          size="mini"
          plain
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filter.format(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filter.format(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btn">
          <el-button
            v-if="isUpdate"
            type="text"
            icon="el-icon-edit"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            type="text"
            icon="el-icon-delete"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
      //动态插槽
      <template
        v-for="item in otherPropSlot"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import hyTable from '@/base-ui/table'
import { usePermission } from '@/hooks/use-permission'

export default defineComponent({
  components: {
    hyTable
  },
  props: {
    pageName: {
      type: String,
      required: true
    },
    contentTableConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['handleNewClick', 'handleEditClick'],
  setup(props, { emit }) {
    const store = useStore()

    //获取操作权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')
    //网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch('getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.pageSize * (pageInfo.value.currentPage - 1),
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    //修改分页器
    const pageInfo = ref({ pageSize: 10, currentPage: 1 })
    watch(pageInfo, () => getPageData())
    getPageData()

    //3.从vuex中获取数据
    const dataCount = computed(() =>
      store.getters['pageListCount'](props.pageName)
    )
    const dataList = computed(() =>
      store.getters['pageListData'](props.pageName)
    )
    //4.获取其他动态插槽名称
    const otherPropSlot = props.contentTableConfig.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    //删除/编辑/新建按钮
    const handleDeleteClick = (item: any) => {
      store.dispatch('deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      console.log('111')

      emit('handleNewClick')
    }
    const handleEditClick = (item: any) => {
      emit('handleEditClick', item)
    }

    // expose({ getPageData })
    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlot,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
      // contentTableConfig
    }
  }
})
</script>

<style scoped>
.content-page {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
