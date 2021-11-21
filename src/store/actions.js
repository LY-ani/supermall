export default {
  
  
  addCart(context,payload) {
     let user = sessionStorage.username;
  let userInfo = localStorage.userInfo;
  if (userInfo) {
      userInfo = JSON.parse(userInfo);}
    // context.state.totalCount ++;
    // 1.查找之前的数组中是否有该商品
    // let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    let oldProduct = null;
    for(let item of context.state.cartList){
      if(item.iid === payload.iid)
        oldProduct = item;
    }
    // 2.判断oldProduct
    if(oldProduct){
      // console.log('购物车中该商品数量+1');
      // console.log( context.state.cartList);
       
      context.commit('addCounter',oldProduct)
    } else {
      // console.log( context.state.cartList);
      payload.count = 1;
      // console.log('该商品添加到购物车');
      context.commit('addToCart',payload)
    
      userInfo.map((item) => {
        if (item.username == user) {
          item.cartList.push(payload)
          // console.log(item.cartLis);
          localStorage.userInfo = JSON.stringify(userInfo);
        }
      });

}
  },
  deleteCart(context) {

    // if(context.state.cartList.length !== 0){ 
    //   for(let i = 0;i<=context.state.cartList.length;i++){
    //   context.state.cartList.forEach(function(item,index){
    //     if(item.isChecked){
    //       context.state.cartList.splice(index,1)
    //       // index--
    //       // console.log(context.state.cartList);
    //       // console.log(index);
    //       // console.log(item.title);
    //       // console.log(item.count);
    //     }
    //   })
    //   console.log(i);
    // }

    // if(context.state.cartList.length !== 0){
      // const l = context.state.cartList.length
      let user = sessionStorage.username;
      let userInfo = localStorage.userInfo;
if (userInfo) {
            userInfo = JSON.parse(userInfo);}
      for(let i = 0;i<3;i++){
      context.state.cartList.forEach(function(item,index){
        if(item.isChecked){
          context.state.cartList.splice(index,1)
          
            userInfo.map((item) => {
              if (item.username == user) {
                item.cartList.splice(index,1)
                // console.log(item.cartLis);
                localStorage.userInfo = JSON.stringify(userInfo);
              }
            });

          // index--
          // console.log(context.state.cartList);
          // console.log(index);
          // console.log(item.title);
          // console.log(item.count);
        }
      })
      // console.log(i);
    }

      // let i = 0;
      // for(let item of context.state.cartList){
      //   if(item.isChecked){
      //     // context.state.cartList.splice(i,1)
      //     i--
      //     console.log(i);
      //   }
      //   i++
      //   console.log(i);
      // }
    // } else {
    //   console.log('当前购物车为空');
    // }
  }
}