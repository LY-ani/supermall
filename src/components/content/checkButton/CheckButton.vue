<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" v-show="isChecked" />
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
}
.check {
  background-color: var(--color-high-text);
}
</style>