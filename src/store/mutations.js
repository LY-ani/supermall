export default {
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
      state.message = '购物车中该商品数量+1';
      // console.log(state.message);
      payload.count ++
    },
    addToCart(state, payload){
      state.message = '该商品添加到购物车';
      // console.log(state.message);
      state.cartList.push(payload)
    },
   
}