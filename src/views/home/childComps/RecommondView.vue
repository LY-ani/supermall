<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  padding: 10px 0 15px;
  display: flex;
  width: 100%;
  border-bottom: 10px solid #eee;
}
.recommend div {
  text-align: center;
  font-size: 14px;
  width: 25vw;
  flex: 1;
}

.recommend img {
  width: 90%;
}
</style>