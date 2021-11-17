<template>
  <div class="cate-title">
    <scroll class="content" ref="scroll" :probe-type="3">
      <li
        v-for="(item, index) in titleList"
        :key="index"
        class="cate-li"
        :class="{ active: index === currentIndex }"
        @click="titleClick(index)"
      >
        {{ item.title }}
      </li>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";

export default {
  props: {
    titleList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Scroll,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
  },
};
</script>

<style scoped>
.cate-title {
  width: 25vw;
  font-size: 4vw;
  text-align: center;
}
.content {
  height: 100%;
}
.cate-li {
  height: 35px;
  line-height: 35px;
  background-color: #eee;
  list-style: none;
}
.active {
  background-color: #fff;
  color: var(--color-high-text);
}
</style>