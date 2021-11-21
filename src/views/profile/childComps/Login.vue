<template>
  <div class="login">
    <nav-bar class="top-center">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <div class="login-main">
      <input
        class="input"
        v-model="username"
        type="text"
        placeholder="请输入手机号"
        pattern="^[1][3,4,5,6,7,8][0-9]{9}"
        required="true"
        maxlength="11"
      />
      <input
        class="input"
        v-model="password"
        type="password"
        placeholder="密码"
        required="true"
      />
      <span class="rem">
        <input type="checkbox" id="remember" /><label
          for="remember"
          class="remember"
          >记住密码</label
        >
      </span>
      <span class="forget">忘记密码</span>
      <button type="button" class="register" @click="submit">登录</button>
      <button type="button" class="register" @click="register">注册</button>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      if (this.username.trim() == "") {
        this.$toast.show("手机号不能为空", 1000);
        return;
      }
      if (!this.username.match(/^[1][3,4,5,6,7,8][0-9]{9}$/)) {
        this.$toast.show("手机号格式错误", 1000);
        return;
      }
      if (this.password.trim() == "") {
        this.$toast.show("密码不能为空", 1000);
        return;
      }
      if (!this.password.match(/^\w{6,16}$/)) {
        this.$toast.show("密码格式错误", 1000);
        return;
      }
      let userInfo = localStorage.userInfo;
      let rel = false;
      if (userInfo) {
        userInfo = JSON.parse(userInfo);
        userInfo.map((item) => {
          if (
            this.username == item.username &&
            this.password == item.password
          ) {
            this.$store.state.cartList = item.cartList;
            rel = true;
            return;
          }
        });
      }
      if (rel) {
        sessionStorage.username = this.username;
        this.$toast.show("登录成功", 1000);
        setTimeout(() => {
          this.$router.push({
            path: "/profile",
          });
        }, 1000);
      } else {
        this.$toast.show("帐户或密码输入有误 请确认后再试！", 1000);
      }
    },
    register() {
      if (this.username.trim() == "" && this.password.trim() == "") {
        this.$toast.show("手机号密码格式错误", 1000);
        return;
      }
      if (
        !this.username.match(
          /^(\w{1,})+@([a-zA-Z]{2,3})+((\.[a-zA-Z]{2,3}))$/
        ) &&
        !this.password.match(/^\w{6,}$/)
      ) {
        this.$toast.show("手机号密码格式错误", 1000);
        return;
      }
      let userInfo = localStorage.userInfo;
      let ref = false;
      if (userInfo) {
        userInfo = JSON.parse(userInfo);
        userInfo.map((item) => {
          if (this.username == item.username) {
            this.$toast.show("手机号已注册，请登录", 1000);
            ref = true;
          }
        });
      } else {
        userInfo = [];
      }
      if (ref) {
        return;
      } else {
        userInfo.push({
          username: this.username,
          password: this.password,
          cartList: [],
        });
        userInfo.map((item) => {
          if (item.username == this.username) {
            this.$store.state.cartList = item.cartList;
          }
        });

        localStorage.userInfo = JSON.stringify(userInfo);
        sessionStorage.username = this.username;
        this.$toast.show("注册成功", 1000);
        setTimeout(() => {
          this.$router.push({
            path: "/profile",
          });
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
.top-center {
  color: #fff;
  background-color: var(--color-tint);
}
.login-main {
  margin-top: 40%;
  text-align: center;
}
.input {
  display: block;
  margin: 20px auto;
  width: 80%;
  height: 40px;
}
.rem {
  float: left;
  margin-left: 10%;
}
.forget {
  float: right;
  margin-right: 10%;
}
.register {
  margin-top: 20px;
  width: 70%;
  height: 40px;
  line-height: 40px;
  background-color: var(--color-tint);
}
</style>