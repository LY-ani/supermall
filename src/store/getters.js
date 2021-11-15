export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  totalPrice(state) {
    return state.cartList.reduce((total, product) => {
      if(product.isChecked){
        total += product.count * product.price
      }
      return total
  }, 0)
  },
  allProduct(state) {
    return state.cartList.reduce((total, product) => {
      if(product.isChecked){
        total += product.count 
      }
      return total
  }, 0)
  }
}