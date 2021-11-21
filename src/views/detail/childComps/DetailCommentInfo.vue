<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多<i class="arrow-right">></i></div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-imgs">
        <img
          :src="item"
          alt=""
          v-for="(item, index) in commentInfo.images"
          :key="index"
        />
      </div>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);

      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
  },
};
</script>

<style scoped>
.comment-info {
  margin: 10px 8px;

  font-size: 14px;
  border-bottom: 4px solid #ececec;
}
.info-header {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  /* border-bottom: 2px solid #ececec; */
}
.info-user {
  padding: 10px 0;
}
.info-user img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  vertical-align: middle;
}
.info-imgs img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.info-other {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>