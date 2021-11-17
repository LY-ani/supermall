<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <template v-slot:center> 商品分类 </template>
    </nav-bar>
    <div class="cate-info">
      <cate-title
        ref="catet"
        :titleList="titleList"
        class="cate-title"
        @titleClick="titleClick"
      >
      </cate-title>
      <cate-right
        class="cate-right"
        :upGoods="upGoods"
        :downGoods="downGoods"
        @changeType="changeType"
      >
      </cate-right>
    </div>
  </div>
</template>

<script>
import CateTitle from "./childComps/CateTitle.vue";
import CateRight from "./childComps/CateRight.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import NavBar from "components/common/navbar/NavBar.vue";

import { getCategory, getUpGoods, getDownGoods } from "network/category.js";

export default {
  name: "Category",
  components: {
    CateTitle,
    CateRight,
    Scroll,
    NavBar,
  },
  data() {
    return {
      titleList: [],
      upGoods: [],
      downGoods: [],
      currentType: "pop",
    };
  },
  created() {
    this.getCategory();
    this.getUpGoods(3627);
    this.getDownGoods(10062603, "pop");
  },
  methods: {
    getCategory() {
      getCategory().then((res) => {
        // console.log(res);
        this.titleList = res.data.category.list;
        // console.log(this.titleList);
      });
    },
    titleClick(index) {
      // console.log(this.titleList[index].maitKey);
      this.titleList[index].currentType = this.currentType;
      // console.log(this.titleList[index].currentType);
      this.getUpGoods(this.titleList[index].maitKey);
      this.getDownGoods(
        this.titleList[index].miniWallkey,
        this.titleList[index].currentType
      );
    },
    getUpGoods(maitKey) {
      getUpGoods(maitKey).then((res) => {
        this.upGoods = res.data.list;
        // console.log(res);
        // console.log(this.upGoods);
      });
    },
    getDownGoods(miniWallkey, type) {
      getDownGoods(miniWallkey, type).then((res) => {
        this.downGoods = res;
        // console.log(this.downGoods);
        // console.log(type);
      });
    },
    changeType(cType) {
      this.currentType = cType;
      this.getDownGoods(
        this.titleList[this.$refs.catet.currentIndex].miniWallkey,
        this.currentType
      );
      // console.log(this.$refs.catet.currentIndex);
      // console.log(this.currentType);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  background-color: var(--color-tint);
  z-index: 12;
}
.cate-info {
  display: flex;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}

.cate-title {
  /* height: 100%; */
  background-color: #eee;
  /* box-shadow: -2px 0 5px rgba(3, 3, 3, 0.3); */
}
.cate-right {
  flex: 1;
}
</style>