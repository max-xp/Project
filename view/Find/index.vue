<template>
  <div class="find">
    <headder page="发现故宫" />
    <navheader />
    <div class="center">
      <div class="content">
        <ul>
          <li class="obb">
            <img
              src="../../assets/img/find/communication circle_image_big@2x.png"
              class="picture"
              alt=""
            />
            <span class="content-title"
              >故宫的文创产品，给家里增添了不少文化气息</span
            >
            <div class="obb-box">
              <img
                src="../../assets/img/find/communication circle_image_head portrait@2x(3).png"
                class="portrait"
                alt=""
              />
              <span class="name">田田</span>
              <span class="location">北京</span>
            </div>
          </li>
          <li class="even">
            <img
              src="../../assets/img/find/communication circle_image_small@2x(1).png"
              class="picture"
              alt=""
            />
            <span class="content-title">故宫的口红简直太好看了！</span>
            <div class="even-box">
              <img
                src="../../assets/img/find/communication circle_image_head portrait@2x(1).png"
                class="portrait"
                alt=""
              />
              <span class="name">小周舟</span>
              <span class="location">广州</span>
            </div>
          </li>
          <li class="obb">
            <img
              src="../../assets/img/find/communication circle_image_big@2x.png"
              class="picture"
              alt=""
            />
            <span class="content-title"
              >故宫的文创产品，给家里增添了不少文化气息</span
            >
            <div class="obb-box">
              <img
                src="../../assets/img/find/communication circle_image_head portrait@2x(3).png"
                class="portrait"
                alt=""
              />
              <span class="name">田田</span>
              <span class="location">北京</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <navFoot />
    <div class="pop-up-one" :class="{ popupB: pop == false }">
      <img
        src="../../assets/img/find/find_image_pop up@2x.png"
        class="popup-one"
        alt=""
      />
      <img
        src="../../assets/img/find/find_btn_close@2x.png"
        class="close-iconone"
        @click="pop = true"
        alt=""
      />
    </div>
    <div class="pop-up-one" :class="{ popupB: popu == false }">
      <img
        src="../../assets/img/find/find_image_pop up@2x (1).png"
        class="popup-two"
        alt=""
      />
      <span @click="popu = true">我知道了</span>
    </div>
  </div>
</template>

<script lang="ts">
import headder from "../../components/header.vue";
import navheader from "../../components/navheader.vue";
import navFoot from "../../components/nav.vue";
export default {
  name: "find",
  components: {
    navheader,
    headder,
    navFoot,
  },
  data() {
    return {
      pop: true,
      popu: true,
    };
  },
};
</script>


<style scoped>
.find {
  background: #faf8f8;
}
.center {
  width: 7.5rem;
}
.center .content {
  display: flex;
  justify-content: space-between;
  padding-top: 0.4rem;
  margin: 0 0.4rem;
}
.center .content ul {
  width: 3.2rem;
}
.center .content ul li {
  margin-bottom: 0.32rem;
  background-color: white;
}
.center .content ul .obb {
  width: 3.2rem;
}
.center .content ul .obb .picture {
  width: 3.2rem;
  height: 4.26rem;
  display: block;
}
.center .content ul .obb .content-title {
  width: 3.04rem;
  height: 0.74rem;
  font-size: 0.24rem;
  font-family: PingFang SC;
  line-height: 0.32rem;
  color: #333333;
  display: block;
  margin: 0.16rem 0.08rem 0;
}
.center .content ul .obb .obb-box {
  display: flex;
  width: 3.04rem;
  justify-content: space-between;
  padding-bottom: 0.14rem;
}
.center .content ul .obb .obb-box .portrait {
  width: 0.24rem;
  height: 0.24rem;
}
.center .content ul .obb .obb-box .name {
  font-size: 0.2rem;
  font-family: PingFang SC;
  color: #333333;
  margin-right: 1.5rem;
}
.center .content ul .obb .obb-box .location {
  font-size: 0.2rem;
  font-family: PingFang SC;
  color: #999999;
}

.center .content ul .even {
  width: 3.2rem;
}
.center .content ul .even .picture {
  width: 3.2rem;
  height: 2.4rem;
  display: block;
}
.center .content ul .even .content-title {
  width: 3.04rem;
  height: 0.74rem;
  font-size: 0.24rem;
  font-family: PingFang SC;
  line-height: 0.32rem;
  color: #333333;
  display: block;
  margin: 0.16rem 0.08rem 0;
}
.center .content ul .even .even-box {
  display: flex;
  width: 3.04rem;
  justify-content: space-between;
  padding-bottom: 0.14rem;
}
.center .content ul .even .even-box .portrait {
  width: 0.24rem;
  height: 0.24rem;
}
.center .content ul .even .even-box .name {
  font-size: 0.2rem;
  font-family: PingFang SC;
  color: #333333;
  margin-right: 1.5rem;
}
.center .content ul .even .even-box .location {
  font-size: 0.2rem;
  font-family: PingFang SC;
  color: #999999;
}
.pop-up-one {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(51, 51, 51, 0.7);
  display: none;
  z-index: 50;
}
.popupB {
  display: block;
}
.pop-up-one .popup-one {
  height: 8.18rem;
  width: 7.5rem;
  position: relative;
  top: 3.74rem;
  display: block;
}
.pop-up-one .close-iconone {
  width: 1.6rem;
  height: 1.6rem;
  position: relative;
  top: 4rem;
  left: 2.88rem;
  display: block;
}
.pop-up-one .popup-two {
  width: 6.14rem;
  height: 3.2rem;
  display: block;
  position: relative;
  top: 1.84rem;
  left: 0.46rem;
}
.pop-up-one span {
  display: block;
  position: relative;
  top: 3.12rem;
  left: 2.9rem;
  width: 1.76rem;
  border: 1px solid #fffcfc;
  border-radius: 0.32rem;
  font-size: 0.32rem;
  font-family: HuXiaoBao-SaoBao;
  color: #ffffff;
  text-align: center;
  padding: 0.04rem 0 0.03rem 0;
}
</style>