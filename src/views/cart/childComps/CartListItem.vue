<template>
  <div class="list-item">
    <div class="item-selector" @click="isCheck">
      <check-button :isChecked="product.isChecked"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{ product.price }}</div>
        <div class="item-count right">
          <button :disabled="product.count <= 1" @click="decrement">-</button>
          x{{ product.count }}
          <button @click="increment">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    CheckButton,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"]),
  },

  methods: {
    isCheck() {
      this.product.isChecked = !this.product.isChecked;
      // console.log(this.product.price);
      let flag = false;
      for (let item of this.cartList) {
        if (!item.isChecked) {
          flag = false;
          break;
        } else {
          flag = true;
        }
      }
      if (flag) {
        this.$store.state.allCheck = true;
      } else {
        this.$store.state.allCheck = false;
      }
      for (let item of this.cartList) {
        // console.log(item.isChecked);
        if (item.isChecked) {
          // 如果有选中就显示删除
          this.$store.state.isDelete = true;
          break;
        } else {
          this.$store.state.isDelete = false;
        }
      }
    },
    decrement() {
      this.product.count--;
    },
    increment() {
      this.product.count++;
    },
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  padding: 5px;
}
.item-img img {
  height: 100px;
  width: 67px;
  display: block;
  border-radius: 5px;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  font-size: 17px;
  margin-top: 10px;
  position: absolute;
  bottom: 0px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  color: orangered;
}
.info-bottom button {
  width: 24px;
  height: 24px;
}
</style>