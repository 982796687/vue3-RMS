import { Module } from 'vuex'
import { IDdashboardState } from './type'
import { IRootState } from '@/store/type'

import {
  getCategoryGoodsCount,
  getAddressGoodsSale,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getAmountList
} from '@/service/main/analysis/dashboard'

const dashboardModule: Module<IDdashboardState, IRootState> = {
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
      amountList: []
    }
  },
  mutations: {
    changCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
      console.log(state.addressGoodsSale)
    },
    changeAmountList(state, list) {
      state.amountList = list
      console.log(state.amountList)
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()

      const categorySaleResult = await getCategoryGoodsSale()
      const categoryFavorResult = await getCategoryGoodsFavor()
      const addressGoodsResult = await getAddressGoodsSale()
      const amountListResult = await getAmountList()
      commit('changCategoryGoodsCount', categoryCountResult.data)
      commit('changCategoryGoodsSale', categorySaleResult.data)
      commit('changAddressGoodsSale', addressGoodsResult.data)
      commit('changCategoryGoodsFavor', categoryFavorResult.data)
      commit('changeAmountList', amountListResult.data)
    }
  }
}

export default dashboardModule
