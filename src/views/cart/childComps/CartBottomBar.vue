<template>
  <div class="bottom-bar">
    <div class="item-selector" @click="isAllCheck">
      <check-button :isChecked="this.$store.state.allCheck"></check-button>
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计：{{ totalPrice | showPrice }}</span>
    </div>
    <div class="buy">
      <span>去结算({{ allProduct }})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

import { mapGetters } from "vuex";
export default {
  components: {
    CheckButton,
  },
  data() {
    return {
      totalPay: 0,
    };
  },
  filters: {
    showPrice(value) {
      return "￥" + value.toFixed(2);
    },
  },

  computed: {
    ...mapGetters(["cartList", "totalPrice", "allProduct"]),
    // allCheck() {
    //   return this.$store.state.allCheck;
    // },
  },
  methods: {
    isAllCheck() {
      // console.log(this.$store.state.allCheck);
      // this.allCheck = !this.allCheck;
      // for (let item of this.cartList) {
      //   item.isChecked = this.allCheck;
      // }
      this.$store.state.allCheck = !this.$store.state.allCheck;
      for (let item of this.cartList) {
        item.isChecked = this.$store.state.allCheck;
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 35px;
  background-color: #eee;
  box-shadow: 0 -3px 5px #ccc;
  text-align: center;
  z-index: 12;
}
.item-selector {
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-selector span {
  padding-left: 3px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
}
.total {
  flex: 1;
}
.buy {
  width: 100px;
  color: #fff;
  background-color: orangered;
}
</style>