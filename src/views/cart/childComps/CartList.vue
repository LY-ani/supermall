<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll" :probe-type="3">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      >
      </cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 44px;
  bottom: 84px;
  left: 0;
  right: 0;
}
</style>