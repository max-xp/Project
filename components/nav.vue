<template>
  <div class="nav">
    <ul class="nav-box">
      <li
        v-for="(item, idx) in nav"
        :key="idx"
        :class="item.path"
        @click="skip(item)"
      >
        <p
          class="nav-img"
          :class="[{ present: current == item.ip }, { '': current != item.ip }]"
        ></p>
        <p
          class="nav-p"
          :class="[{ present_t: current == item.ip }, { '': current != item.ip }]"
        >
          {{ item.text }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navFoot",
  data() {
    return {
      current:this.$route.query.ip,
      nav: [
        {
          text: "首页",
          path: "home",
          ip:1
        },
        {
          text: "分类",
          path: "class",
          ip:2
        },
        {
          text: "发现",
          path: "find",
          ip:3
        },
        {
          text: "购物车",
          path: "cara",
          ip:4
        },
        {
          text: "个人中心",
          path: "person",
          ip:5
        },
      ],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    skip(item) {
      this.current = item.ip;
      this.$router.push({
        path: `/${item.path}`,
        query: {
          ip: this.current,
        },
      });
    },
  },
  mounted() {
    this.current = this.$route.query.ip;
    if (!this.current) {
      this.current = 1;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  z-index: 9;
  position: fixed;
  bottom: 0;
}
.nav ul {
  display: flex;
  background-color: white;
}
.nav ul li {
  width: 1.5rem;
  height: 1.66rem;
  text-align: center;
}
.nav ul .home .nav-img {
  background: url("../assets/img/home/tabbar_icon_home_nor@2x.png") center
    center no-repeat;
  background-size: cover;
}
.nav ul .home .present {
  background: url("../assets/img/home/tabbar_icon_home_pre@2x.png") center
    center no-repeat;
  background-size: cover;
}
.nav ul .class .nav-img {
  background: url("../assets/img/home/tabbar_icon_classification_nor@2x.png")
    center center no-repeat;
  background-size: cover;
}
.nav ul .class .present {
  background: url("../assets/img/home/tabbar_icon_classify_pre@2x.png") center
    center no-repeat;
  background-size: cover;
}
.nav ul .find .nav-img {
  background: url("../assets/img/home/tabbar_icon_find_nor@2x.png") center
    center no-repeat;
  background-size: cover;
}
.nav ul .find .present {
  background: url("../assets/img/home/tabbar_icon_find_pre@2x.png") center
    center no-repeat;
  background-size: cover;
}
.nav ul .cara .nav-img {
  background: url("../assets/img/home/tabbar_icon_cart_nor@2x.png") center
    center no-repeat;
  background-size: cover;
}
.nav ul .cara .present {
  background: url("../assets/img/home/tabbar_icon_cart_pre@2x.png") center
    center no-repeat;
  background-size: cover;
}
.nav ul .person .nav-img {
  background: url("../assets/img/home/tabbar_icon_personal center_nor@2x.png")
    center center no-repeat;
  background-size: cover;
}
.nav ul .person .present {
  background: url("../assets/img/home/tabbar_icon_personal center_pre@2x.png")
    center center no-repeat;
  background-size: cover;
}

.nav ul li .nav-img {
  width: 0.48rem;
  height: 0.48rem;
  display: block;
  margin: 0.16rem auto 0;
}
.nav ul li .nav-p {
  font-size: 0.2rem;
  font-family: PingFang SC;
  line-height: 0.28rem;
  color: #333333;
}
.nav ul li .present_t {
  color: #c30d23;
}
</style>
