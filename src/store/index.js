import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

// let user = sessionStorage.username;
// let userInfo = localStorage.userInfo;
// let cart = []
// if (userInfo) {
//   userInfo = JSON.parse(userInfo);
//   userInfo.map((item) => {
//     if (item.username == user) {
//       cart = item.cartList;
//     }
//   });
// }

const state = {
  cartList: [],
  allCheck: false,
  isDelete: false,
  message:'',
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store

/* export default new Vuex.Store({
  state: {
    cartList: [],
    totalCount: 0
  },
  mutations: {
    // mutations唯一的目的就是修改state中的状态
    // mutations中的每个方法尽可能完成的事件比较单一一点
    // 复杂点的操作和异步操作在action中进行

    // addCart(state,payload) {
    // // 判断cartList里是否有相同的商品
    //   let oldProduct = null;
    //   for(let item of state.cartList){
    //     if(item.iid === payload.iid)
    //       oldProduct = item;
    //   }
    //   // let oldProduct = state.cartList.find(item => item.iid === payload.iid)

    //   if(oldProduct){
    //     oldProduct.count += 1;
    //   } else {
    //     payload.count = 1;
    //     state.cartList.push(payload)
    //   }
    // }
    addCounter(state,payload){
      payload.count ++
    },
    addToCart(state, payload){
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context,payload) {
      context.state.totalCount ++;
      // 1.查找之前的数组中是否有该商品
      // let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      let oldProduct = null;
      for(let item of context.state.cartList){
        if(item.iid === payload.iid)
          oldProduct = item;
      }
      // 2.判断oldProduct
      if(oldProduct){
        context.commit('addCounter',oldProduct)
      } else {
        payload.count = 1;
        context.commit('addToCart',payload)
      }
    }
  },
  modules: {
  }
}) */
