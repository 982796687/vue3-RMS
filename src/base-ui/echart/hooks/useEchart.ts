import * as echarts from 'echarts'
import chinaMapData from '../data/china.json'

echarts.registerMap('china', chinaMapData)
// export default function (el: HTMLElement) {
//   const myChart = echarts.init(el)

//   const setOptions = (options: echarts.EChartsOption) => {
//     myChart.setOption(options)
//   }
//   return { setOptions, myChart }
// }
export default function (el: HTMLElement, options: echarts.EChartsOption) {
  const echartInstance = echarts.init(el)

  echartInstance.setOption(options)
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return { echartInstance }
}
