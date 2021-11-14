<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
    },
  },
  //   data() {
  //     return {
  //       counter: 0,
  //       imagesLength: 0,
  //     };
  //   },
  //   methods: {
  //     imgLoad() {
  //       this.counter += 1;
  //       if (this.counter === this.imagesLength) {
  //         this.$emit("imageLoad");
  //       }
  //     },
  //   },
  //   watch: {
  //     detailInfo() {
  //       this.imagesLength = this.deteilInfo.detailImage[0].list.length;
  //     },
  //   },
};
</script>

<style scoped>
.info-list img {
  width: 100%;
}
</style>