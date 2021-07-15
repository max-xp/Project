<template>
  <div>
    <navFoot />
    <div class="header">
      <div class="grabble">
        <img src="../../assets/img/class/classify_icon_search@2x.png" alt="" />
        <input type="text" placeholder="故宫口红" />
      </div>
    </div>
    <div class="center">
      <div class="center-nav">
        <ul>
          <li @click="go()">
            <span>上新馆</span>
          </li>
          <li>
            <span>出版馆</span>
          </li>
          <li class="current">
            <span>美妆馆</span>
          </li>
          <li>
            <span>文房馆</span>
          </li>
          <li>
            <span>香氛馆</span>
          </li>
          <li>
            <span>首饰馆</span>
          </li>
          <li>
            <span>铜器馆</span>
          </li>
          <li>
            <span>陶瓷馆</span>
          </li>
          <li>
            <span>丝绸馆</span>
          </li>
          <li>
            <span>家居馆</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <img
          src="../../assets/img/class/classify_image_banner@2x.png"
          class="advertising"
          alt=""
        />
        <ul>
          <li>
            <img src="../../assets/img/class/classify_image@2x.png" alt="" />
            <span>口红</span>
          </li>
          <li>
            <img src="../../assets/img/class/classify_image@2x.png" alt="" />
            <span>口红</span>
          </li>
          <li>
            <img src="../../assets/img/class/classify_image@2x.png" alt="" />
            <span>口红</span>
          </li>
          <li>
            <img src="../../assets/img/class/classify_image@2x.png" alt="" />
            <span>口红</span>
          </li>
          <li>
            <img src="../../assets/img/class/classify_image@2x.png" alt="" />
            <span>口红</span>
          </li>
          <li>
            <img src="../../assets/img/class/classify_image@2x.png" alt="" />
            <span>口红</span>
          </li>
          <li>
            <img src="../../assets/img/class/classify_image@2x.png" alt="" />
            <span>口红</span>
          </li>
          <li>
            <img src="../../assets/img/class/classify_image@2x.png" alt="" />
            <span>口红</span>
          </li>
          <li>
            <img src="../../assets/img/class/classify_image@2x.png" alt="" />
            <span>口红</span>
          </li>
          <li>
            <img src="../../assets/img/class/classify_image@2x.png" alt="" />
            <span>口红</span>
          </li>
          <li>
            <img src="../../assets/img/class/classify_image@2x.png" alt="" />
            <span>口红</span>
          </li>
          <li>
            <img src="../../assets/img/class/classify_image@2x.png" alt="" />
            <span>口红</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import navFoot from "../../components/nav.vue";

export default {
  name: "App",
  components: {
    navFoot,
  },
  methods: {
    go() {
      this.$router.push({
        path: `/Shinkan`,
        query: {
          ip: 2,
        },
      });
    },
  },
};
</script>

<style scoped>
.header {
  width: 7.5rem;
  height: 1.76rem;
  background: #c30d23;
  position: fixed;
  top: 0;
}
.header .grabble {
  position: absolute;
  top: 0.96rem;
  left: 0.6rem;
  width: 6.3rem;
  height: 0.64rem;
  background-color: rgb(255, 255, 255, 0.25);
  border-radius: 0.12rem;
  display: flex;
}
.header .grabble img {
  width: 0.56rem;
  height: 0.56rem;
  margin: 0.04rem 0 0 0.22rem;
}
.header .grabble input {
  width: 4rem;
  height: 0.38rem;
  font-size: 0.28rem;
  font-family: Source Han Serif CN;
  color: #fffcfc;
  margin-top: 0.14rem;
  margin-left: 0.14rem;
  border: none;
  background-color: transparent;
}
.center {
  display: flex;
  justify-content: flex-end;
}
.center .center-nav {
  position: fixed;
  left: 0;
  width: 1.64rem;
  top: 1.76rem;
  bottom: 1.66rem;
  background: #f7f7f7;
  white-space: nowrap;
  overflow: hidden;
  overflow-y: scroll;
}
.center .center-nav ul li {
  height: 1.24rem;
  width: 100%;
  text-align: center;
}
.center .center-nav ul li span {
  padding-top: 0.4rem;
  display: block;
  font-size: 0.28rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  color: #333333;
}
.center .center-nav ul .current {
  background: white;
  position: relative;
}
.center .center-nav ul .current::before {
  width: 0.12rem;
  height: 0.44rem;
  content: "";
  display: block;
  background: url("../../assets/img/class/classify_pickers@2x.png") center
    center no-repeat;
  background-size: cover;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.center .content {
  width: 5.86rem;
  margin-top: 1.78rem;
  margin-bottom: 1.66rem;
}
.center .content .advertising {
  width: 5.38rem;
  height: 2rem;
  display: block;
  margin: 0.24rem 0 0 0.2rem;
}
.center .content ul {
  display: flex;
  margin: 0 0.84rem;
  flex-wrap: wrap;
  justify-content: space-between;
}
.center .content ul li {
  text-align: center;
  width: 1.6rem;
  height: 2.12rem;
  margin-top: 0.4rem;
}
.center .content ul li img {
  width: 1.6rem;
  height: 1.6rem;
  display: block;
}
.center .content ul li span {
  display: block;
  font-size: 0.32rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  color: #333333;
}
</style>
