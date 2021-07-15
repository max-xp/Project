<template>
  <div>
    <div class="header">
      <div class="header-text">
        <img
          src="../../assets/img/Shinkan/on the new_icon_back@2x.png"
          class="icon_back"
          alt=""
          @click="back()"
        />
        <span class="header-tit">上新馆</span>
        <span class="remark">排序</span>
        <img
          src="../../assets/img/Shinkan/on the new_icon_more@2x.png"
          class="icon_more"
          alt=""
        />
      </div>
    </div>
    <div class="center">
      <ul class="fixClear">
        <li>
          <img
            src="../../assets/img/Shinkan/classify new_image@2x.png"
            class="new-image"
            alt=""
          />
          <span class="center-tit">荷包口红•豇豆红</span>
          <div class="center-number">
            <span class="center-price">￥199.00</span>
            <span class="center-remark">上新价</span>
          </div>
        </li>
        <li></li>
      </ul>
    </div>
    <navFoot />
  </div>
</template>

<script lang="ts">
import navFoot from "../../components/nav.vue";
export default {
  name: "home",
  components: {
    navFoot,
  },
  methods: {
    back() {
      this.$router.push({
        path: `/class`,
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
}
.header .header-text {
  display: flex;
  padding-top: 1rem;
}
.header .header-text .icon_back {
  width: 0.4rem;
  height: 0.4rem;
  margin: 0.08rem 0 0 0.24rem;
}
.header .header-text .header-tit {
  font-size: 0.4rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  line-height: 0.54rem;
  color: #fffcfc;
  margin-left: 2.52rem;
}
.header .header-text .remark {
  font-size: 0.28rem;
  font-family: PingFang SC;
  line-height: 0.38rem;
  color: #fffcfc;
  margin: 0.14rem 0 0 1.86rem;
}
.header .header-text .icon_more {
  width: 0.4rem;
  height: 0.4rem;
  margin: 0.12rem 0 0 0.1rem;
}
.center {
  margin: 0.16rem 0.27rem 1.66rem 0;
}

.center ul li {
  float: left;
  margin: 0.16rem 0.13rem 0;
  width: 3.22rem;
  height: 4.78rem;
}
.center ul li .new-image {
  display: block;
  width: 3.22rem;
  height: 3.22rem;
}
.center ul li .center-tit {
  font-size: 0.28rem;
  font-family: PingFang SC;
  margin-top: 0;
  color: #333333;
  display: block;
  margin: 0.3rem 0 0 0.16rem;
}
.center ul li .center-number {
  display: flex;
  margin: 0.18rem 0 0 0.14rem;
}
.center ul li .center-number .center-price {
  font-size: 0.32rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.42rem;
  color: #c30d23;
}
.center ul li .center-number .center-remark {
  font-size: 0.16rem;
  font-family: PingFang SC;
  line-height: 0.22rem;
  color: #c30d23;
  width: 0.8rem;
  height: 0.25rem;
  border: 0.02rem solid #c30d23;
  margin: 0.07rem 0 0 0.1rem;
}
</style>