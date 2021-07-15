<template>
  <div>
    <headder page='发现故宫'/>
    <navheader />
    <ul>
      <li>
        <div class="img">
          <img src="../../assets/img/find/ZCOOL@2x.png" class="ZCOOL" alt="" />
        </div>
        <div class="content">
          <span class="content-tit">故宫新品研究员</span>
          <span class="division"></span>
          <span class="content-tit">北京</span>
          <span class="division"></span>
          <span class="content-tit">宋轶</span>
        </div>
        <div class="content-text">
          <span
            >“关于故宫文化，我有很多想法，但是最重要的是怎么用设计把文化融入生活”</span
          >
        </div>
      </li>
      
    </ul>
    <navFoot />
  </div>
</template>

<script lang="ts">
import headder from "../../components/header.vue";
import navheader from "../../components/navheader.vue";
import navFoot from "../../components/nav.vue";

export default {
  name: "stylist",
  components: {
    headder,
    navheader,
    navFoot
  },
};
</script>


<style scoped>
ul li {
    margin-bottom: 0.44rem;
}
ul li .img img {
  width: 7.5rem;
  height: 4.2rem;
  display: block;
}
ul li .content {
  display: flex;
  margin: 0.32rem 0 0 0.4rem;
}
ul li .content .content-tit {
  font-size: 0.28rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  line-height: 0.38rem;
  color: #333333;
}
ul li .content .division {
  width: 1px;
  height: 0.28rem;
  background: #333333;
  margin: 0.05rem 0.08rem;
}
.content-text span {
  display: block;
  width: 6.7rem;
  height: 0.68rem;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #999999;
  margin: 0.14rem 0 0 0.4rem;
}
</style>