<template>
  <div class="toast" v-show="isShow">
    <div>{{ tmessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tmessage: "",
      isShow: false,
    };
  },
  methods: {
    show(message = "默认文字", duration = 2000) {
      this.isShow = true;
      this.tmessage = message;

      setTimeout(() => {
        this.isShow = false;
        this.tmessage = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;
  background-color: rgba(3, 3, 3, 0.5);
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  z-index: 999;
}
</style>