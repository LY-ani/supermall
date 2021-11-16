<template>
  <div>
    <scroll class="content" ref="scroll" :probe-type="3">
      <div class="cate-right-up">
        <cate-right-up
          v-for="(item, index) in upGoods"
          :key="index"
          :goodsItem="item"
        ></cate-right-up>
      </div>
      <tab-control
        ref="tabControl"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="downGoods"></goods-list>
    </scroll>
  </div>
</template>

<script>
import CateRightUp from "./CateRightUp.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

export default {
  props: {
    upGoods: {
      type: Array,
      default() {
        return [];
      },
    },
    downGoods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    CateRightUp,
    Scroll,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      currentType: "pop",
    };
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$emit("changeType", this.currentType);
    },
  },
};
</script>

<style scoped>
.content {
  height: 100%;
}
.cate-right-up {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 8px solid #ddd;
}
</style>