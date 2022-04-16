import hyRequest from '@/service'
enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = 'goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = 'goods/address/sale',
  amountList = '/goods/amount/list'
}

export function getCategoryGoodsCount() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}
export function getAddressGoodsSale() {
  return hyRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}
export function getAmountList() {
  return hyRequest.get({
    url: DashboardAPI.amountList
  })
}
