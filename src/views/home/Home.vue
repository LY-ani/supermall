<template>
  <div class="home">
    <nav-bar class="home-nav"
      ><template v-slot:center>购物街</template>
    </nav-bar>
    <tab-control
      ref="tabControl1"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      v-show="isShowTabControl"
      :class="{ tabfixed: isShowTabControl }"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperStick.once="swiperStick"
      ></home-swiper>
      <!-- <div>
        <img
          src="https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
          alt=""
          style="width: 100%"
        /> 
      </div>-->
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        ref="tabControl2"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommondView.vue";
import FeatureView from "./childComps/FeratureView.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      // result: null,
      // dKeyword: [],
      // keywords: [],
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isShowTabControl: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  // activated() {
  //   // this.$refs
  //   console.log("activated");
  // },
  // deactivated() {
  //   console.log("deactivated");
  // },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // getHomeGoods("pop", 1).then((res) => {
    //   console.log(res);
    // });
    // 2.请求列表数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
  //   }, 300);
  // },
  methods: {
    /**
     * 事件监听相关方法
     */
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isShowTabControl = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      // console.log(this.$refs.scroll);
      this.getHomeGoods(this.currentType);
    },
    swiperStick() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.$refs.tabControl2);
      // console.log(this.$refs.tabControl2.$el.offsetTop);
      // console.log(this.$refs.tabControl1.$el.offsetTop);
    },

    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        // this.dKeyword = res.data.dKeyword.list;
        // this.keywords = res.data.keywords.list;
        // 垃圾回收机制在函数调用结束后会将res回收，所以要用result将res记录下来
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

/* .tab-control {
  top: 44px;
  z-index: 9;
} */

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tabfixed {
  position: relative;
  z-index: 9;
}
</style>