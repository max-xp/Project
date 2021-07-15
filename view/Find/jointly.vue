<template>
  <div class="jointly">
    <headder page='发现故宫'/>
    <navheader />
    <div class="center">
      <ul>
        <li>
          <div class="center-box">
            <span class="center-text">20年×百雀羚故宫×年货节</span>
            <span class="center-remark"
              >《百雀羚故宫系列--流光溢彩器什件》</span
            >
            <ul>
              <li>
                <img src="../../assets/img/find/jointly_image@2x.png" alt="" />
                <span>雀鸟翠木箸什件</span>
              </li>
              <li>
                <img src="../../assets/img/find/jointly_image@2x.png" alt="" />
                <span>雀鸟翠木箸什件</span>
              </li>
              <li>
                <img src="../../assets/img/find/jointly_image@2x.png" alt="" />
                <span>雀鸟翠木箸什件</span>
              </li>
            </ul>
            <span class="division"></span>
            <div class="center-foot">
              <span class="foot-tit">更多百雀羚×故宫好品，引领新风尚</span>
              <img
                src="../../assets/img/find/find_icon_more@2x.png"
                class="icon_more"
                alt=""
              />
            </div>
          </div>
        </li>
        <li>
          <div class="center-box">
            <span class="center-text">20年×百雀羚故宫×年货节</span>
            <span class="center-remark"
              >《百雀羚故宫系列--流光溢彩器什件》</span
            >
            <ul>
              <li>
                <img src="../../assets/img/find/jointly_image@2x.png" alt="" />
                <span>雀鸟翠木箸什件</span>
              </li>
              <li>
                <img src="../../assets/img/find/jointly_image@2x.png" alt="" />
                <span>雀鸟翠木箸什件</span>
              </li>
              <li>
                <img src="../../assets/img/find/jointly_image@2x.png" alt="" />
                <span>雀鸟翠木箸什件</span>
              </li>
            </ul>
            <span class="division"></span>
            <div class="center-foot">
              <span class="foot-tit">更多百雀羚×故宫好品，引领新风尚</span>
              <img
                src="../../assets/img/find/find_icon_more@2x.png"
                class="icon_more"
                alt=""
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <navFoot />
  </div>
</template>

<script lang="ts">
import headder from "../../components/header.vue";
import navheader from "../../components/navheader.vue";
import navFoot from "../../components/nav.vue";

export default {
  name: "jointly",
  components: {
    headder,
    navheader,
    navFoot
  },
};
</script>

<style scoped>
.jointly {
  background: #faf8f8;
}
.center ul li {
  width: 7.01rem;
  height: 4.88rem;
  background: #ffffff;
  margin: 0.24rem auto 0;
}
.center ul li .center-box {
  width: 6.54rem;
  padding-top: 0.26rem;
  margin: 0 auto;
}

.center ul li .center-box .center-text {
  display: block;
  font-size: 0.32rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  color: #333333;
  margin-left: 0.08rem;
}
.center ul li .center-box .center-remark {
  display: block;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #999999;
  margin-top: 0.1rem;
}
.center ul li .center-box ul {
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
}
.center ul li .center-box ul li {
  margin: 0;
  text-align: center;
  height: auto;
}
.center ul li .center-box ul li img {
  width: 1.96rem;
  height: 1.96rem;
}
.center ul li .center-box ul li span {
  display: block;
  font-size: 0.2rem;
  font-family: PingFang SC;
  color: #333333;
}
.center ul li .center-box .division {
  width: 6.52rem;
  height: 0px;
  border: 1px solid #e6e6e6;
  display: block;
  margin-top: 0.2rem;
}
.center ul li .center-box .center-foot {
  margin-top: 0.18rem;
  display: flex;
  justify-content: space-between;
}
.center ul li .center-box .center-foot .foot-tit {
  display: block;
  font-size: 0.2rem;
  font-family: PingFang SC;
  color: #333333;
}
.center ul li .center-box .center-foot img {
  width: 0.4rem;
  height: 0.4rem;
}
</style>