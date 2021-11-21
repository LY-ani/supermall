<template>
  <div>
    <div class="pro-top">
      <div class="pro-archives">
        <div class="pro-title">我的档案</div>
        <div class="pro-login" @click="goLogin">
          <img src="~assets/img/profile/avatar.svg" alt="" />
          <div>
            <p>登录/注册</p>
            <p>
              暂无绑定手机号<img src="~assets/img/profile/phone.svg" alt="" />
            </p>
          </div>
        </div>
      </div>
      <div class="pro-balance">
        <div>
          <div class="balance-count"><span>0.00</span>元</div>
          <span>我的余额</span>
        </div>
        <div>
          <div class="balance-count"><span>0</span>个</div>
          <span>我的优惠</span>
        </div>
        <div>
          <div class="balance-count"><span>0</span>分</div>
          <span>我的积分</span>
        </div>
      </div>
    </div>
    <div class="pro-message">
      <div>我的消息</div>
      <div>积分商城</div>
      <div>会员卡</div>
    </div>
    <div class="pro-app">
      <div>我的购物车</div>
      <div>下载购物APP</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.pro-archives {
  height: 20vh;
  color: #fff;
  font-size: 16px;
  background-color: var(--color-tint);
}
.pro-title {
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.pro-login {
  display: flex;
}
.pro-login img {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
}
.pro-login p:first-child {
  padding-top: 15px;
  padding-left: 5px;
}
.pro-login p:nth-child(2) {
  padding-left: 5px;
  font-size: 14px;
}
.pro-login p:nth-child(2) img {
  position: absolute;
  left: 170px;
  top: 57px;
  width: 20px;
}
.pro-balance {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12vh;
  border-bottom: 10px solid #eee;
}
.pro-balance div {
  text-align: center;
  flex: 1;
}
.pro-balance > div:nth-child(-n + 2) {
  border-right: 2px solid #ddd;
}
.balance-count span {
  font-size: 25px;
  color: red;
  font-weight: 700;
}
.pro-message,
.pro-app {
  padding-left: 30px;
  border-bottom: 10px solid #eee;
}
.pro-message div,
.pro-app div {
  height: 40px;
  line-height: 40px;
  color: #000;
}
.pro-message div:nth-child(-n + 2),
.pro-app div:first-child {
  border-bottom: 2px solid #ddd;
}
</style>