<template>
  <swiper>
    <swiper-slide v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    imageLoad() {
      this.$emit("swiperStick");
    },
  },
};
</script>

<style>
</style>