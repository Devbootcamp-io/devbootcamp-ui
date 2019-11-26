import { Module } from 'vuex'
import { RootState } from '../types'

const bootcampState = {}

export const bootcamp: Module<any, RootState> = {
  state: bootcampState,
  actions: {
    storeBootcamps({ commit }, data) {
      commit('STORE_BOOTCAMPS', data)
    }
  },
  mutations: {
    STORE_BOOTCAMPS: (state, data) => {
      state.list = data
    }
  },
  getters: {
    bootcampList: state => state.list
  }
}
