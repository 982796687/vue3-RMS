<template>
  <div class="overview">
    <hy-card title="关于">
      <div class="c-left">
        此项目是基于 Vue3、Vuex、VueRouter、 ElementPlus 、TypeScript、Echart5
        的后台系统解决方案。
      </div>
    </hy-card>
    <hy-card title="项目结构">
      <pre class="c-left">
        {{ projectdir }}
      </pre>
    </hy-card>
  </div>
</template>

<script lang="ts" setup>
import HyCard from '@/base-ui/card'
import { projectdir } from './config/project-dir'
</script>

<style scoped>
pre {
  font-size: 150%;
  font-weight: 500;
  background-color: #f0f0f0;
}
.c-left {
  text-align: left;
}
.el-card {
  margin-bottom: 20px;
}
</style>
