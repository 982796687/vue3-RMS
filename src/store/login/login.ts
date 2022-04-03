import { Module } from 'vuex'
import { mapMenusToRoutes, mapMenuToPermission } from '@/util/map-menus'
import { ILoginState } from './type'
import { IRootState } from '../type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/util/cache'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  // namespaced: true,
  state() {
    return { token: ' ', userInfo: {}, userMenus: [], permissions: [] }
  },

  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      //userMenus=>routes
      const routes = mapMenusToRoutes(userMenus)
      //将routes=> router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      // 获取用户按钮的权限
      const permissions = mapMenuToPermission(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //将admin改为coderwhy
      if (payload.name === 'admin') {
        payload.name = 'coderwhy'
      }
      //1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      //2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      //3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)
      // console.log(userMenus)

      //4.跳转首页
      router.push('/main')
    },
    //解决vuex刷新后不保存数据问题，从localstroage中拿取token、userInfo、userMenus
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    },

    phoneLoginAction({ commit }, payload: any) {
      console.log('手机号登录执行', payload)
    }
  }
}

export default loginModule
