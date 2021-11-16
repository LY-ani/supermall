<template>
  <div class="cart">
    <nav-bar class="top-nav">
      <template v-slot:center>
        <div>购物车({{ cartLength }})</div>
      </template>
    </nav-bar>
    <!-- 商品列表 -->
    <!-- <scroll class="content" ref="scroll" :probe-type="3">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      >
      </cart-list-item>
    </scroll> -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar ref="cartbottom"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import CartList from "./childComps/CartList.vue";
import CartListItem from "./childComps/CartListItem.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartListItem,
    CartBottomBar,
  },
  activated() {
    let flag = false;
    for (let item of this.cartList) {
      if (!item.isChecked) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    if (flag) {
      this.$store.state.allCheck = true;
    } else {
      this.$store.state.allCheck = false;
    }
    // console.log("---");
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.top-nav {
  position: relative;
  background-color: var(--color-tint);
  color: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 12;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/* .bottom-bar {
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 30px;
  background-color: #eee;
  box-shadow: 0 -3px 5px #ccc;
  z-index: 12;
} */
</style>