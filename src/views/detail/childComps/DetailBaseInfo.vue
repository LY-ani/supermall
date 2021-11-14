<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length > 3 ? 3 : goods.services.length"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.base-info {
  padding: 10px;
  color: #aaa;
}
.info-title {
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

.n-price {
  padding: 0 10px;
  color: var(--color-high-text);
  font-size: 20px;
  font-weight: 700;
}
.o-price {
  text-decoration: line-through;
  font-size: 12px;
}
.discount {
  position: relative;
  top: -8px;
  padding: 0 5px;
  background-color: var(--color-high-text);
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
}
.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 10px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>