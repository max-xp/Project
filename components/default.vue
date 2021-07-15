<template>
  <div class="content">
    <img :src="getImgUrl(this.img)" class="img" alt="" />
    <span class="text">{{ this.text }}</span>
    <span class="click">{{ this.click }}</span>
  </div>
</template>

<script>
export default {
  name: "page",
  props: {
    msg: String,
    img: String,
    text: String,
    click: String,
  },
  data() {
    return {};
  },
  methods: {
    getImgUrl(icon) {
      return require("@/assets/" + icon);
    },
  },
};
</script>

<style scoped>
.content {
  margin-top: 2.08rem;
  text-align: center;
}
.img {
  display: block;
  width: 4.42rem;
  height: 4.42rem;
  margin: 0 auto;
}
.text {
  display: block;
  font-size: 0.32rem;
  font-family: PingFang SC;
  color: #333333;
}
.click {
  text-align: center;
  width: 2rem;
  background: #c91328;
  border-radius: 0.04rem;
  font-size: 0.32rem;
  font-family: PingFang SC;
  display: block;
  color: #fffcfc;
  margin: 0.38rem auto 0;
  padding: 0.18rem 0 0.2rem 0;
}
</style>