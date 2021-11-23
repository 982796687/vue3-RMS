<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

const echartDivRef = ref<HTMLElement>()
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
onMounted(() => {
  // const { setOptions } = useEchart(echartDivRef.value!)
  //数据改变时重新调用 options
  // watchEffect(() => setOptions(props.options))
  watchEffect(() => useEchart(echartDivRef.value!, props.options))
})
</script>

<style lang="scss" scoped></style>
