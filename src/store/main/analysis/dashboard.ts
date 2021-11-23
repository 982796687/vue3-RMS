import { Module } from 'vuex'
import { IDdashboardState } from './type'
import { IRootState } from '@/store/type'

import {
  getCategoryGoodsCount,
  getAddressGoodsSale,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/service/main/analysis/dashboard'

const dashboardModule: Module<IDdashboardState, IRootState> = {
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
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
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()

      const categorySaleResult = await getCategoryGoodsSale()
      const categoryFavorResult = await getCategoryGoodsFavor()
      const addressGoodsResult = await getAddressGoodsSale()
      commit('changCategoryGoodsCount', categoryCountResult.data)
      commit('changCategoryGoodsSale', categorySaleResult.data)
      commit('changAddressGoodsSale', addressGoodsResult.data)
      commit('changCategoryGoodsFavor', categoryFavorResult.data)
    }
  }
}

export default dashboardModule
