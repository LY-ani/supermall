<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.image" alt="" />
      <span>{{ goodsItem.title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods-item {
  width: 25vw;
  text-align: center;
  font-size: 4vw;
}
.goods-item img {
  padding: 5px;
  width: 100%;
}
.goods-item span {
  position: relative;
  top: -5px;
}
</style>