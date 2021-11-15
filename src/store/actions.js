export default {
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
  },
}