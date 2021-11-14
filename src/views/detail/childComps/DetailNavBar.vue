<template>
  <nav-bar>
    <template v-slot:left>
      <div class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: #ff5777;
}
.back img {
  position: relative;
  vertical-align: middle;
}
</style>