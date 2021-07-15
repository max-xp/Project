<template>
  <div class="person">
    <div class="header">
      <div class="designation">
        <img
          src="../../assets/img/person/personal center_image_head portrait@2x.png"
          class="portrait"
          alt=""
        />
        <div class="designation-center">
          <span class="name">关山月</span>
          <img
            src="../../assets/img/person/personal center_image_label@2x.png"
            class="label"
            alt=""
          />
        </div>
        <img
          src="../../assets/img/person/personal center_icon_setting@2x.png"
          class="setting"
          alt=""
        />
      </div>
      <ul>
        <li>
          <span class="number">12</span>
          <span class="text">我的收藏</span>
        </li>
        <li>
          <span class="number">2</span>
          <span class="text">我的卡券</span>
        </li>
        <li>
          <span class="number">300</span>
          <span class="text">我的积分</span>
        </li>
        <li>
          <span class="number">48</span>
          <span class="text">我的浏览</span>
        </li>
      </ul>
      <div class="details">
        <span class="details-box">查看详情</span>
      </div>
    </div>
    <div class="indent">
      <div class="indent-box">
        <span class="indent-text">我的订单</span>
        <span class="all">查看全部</span>
        <img
          src="../../assets/img/person/personal center_icon_more@2x.png"
          class="icon-more"
          alt=""
        />
      </div>
      <div class="division"></div>
      <div class="indent-icon">
        <ul>
          <li>
            <img
              src="../../assets/img/person/personal center_icon_into_for the payment@2x.png"
              alt=""
            />
            <span>待付款</span>
          </li>
          <li>
            <img
              src="../../assets/img/person/personal center_icon_into_wait for receiving@2x.png"
              alt=""
            />
            <span>待收货</span>
          </li>
          <li>
            <img
              src="../../assets/img/person/personal center_icon_into_to evaluate@2x.png"
              alt=""
            />
            <span>待评价</span>
          </li>
          <li>
            <img
              src="../../assets/img/person/personal center_icon_into_after-sales@2x.png"
              alt=""
            />
            <span>售后/评价</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav-bg"></div>
    <div class="service">
      <div class="service-box">
        <span class="service-text">我的服务</span>
        <span class="all">查看全部</span>
        <img
          src="../../assets/img/person/personal center_icon_more@2x.png"
          class="icon-more"
          alt=""
        />
      </div>
      <div class="division"></div>
      <div class="service-icon">
        <ul class="fixClear">
          <li class="address">
            <div class="icon-img"></div>
            <span class="icon-text">收货地址</span>
          </li>
          <li class="change">
            <div class="icon-img"></div>
            <span class="icon-text">我的零钱</span>
          </li>
          <li class="member">
            <div class="icon-img"></div>
            <span class="icon-text">我的会员</span>
          </li>
          <li class="chitchat">
            <div class="icon-img"></div>
            <span class="icon-text">客服聊天</span>
          </li>
          <li class="mission">
            <div class="icon-img"></div>
            <span class="icon-text">任务中心</span>
          </li>
          <li class="agreement">
            <div class="icon-img"></div>
            <span class="icon-text">用户协议</span>
          </li>
          <li class="question">
            <div class="icon-img"></div>
            <span class="icon-text">常见问题</span>
          </li>
          <li class="proposal">
            <div class="icon-img"></div>
            <span class="icon-text">产品建议</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="like">
      <img src="../../assets/img/person/personal center_image_adornment picture left@2x.png" alt="">
      <span>猜你喜欢</span>
      <img src="../../assets/img/person/personal center_image_adornment picture right@2x.png" alt="">
    </div>
    <navFoot />
  </div>
</template>

<script lang="ts">
import navFoot from "../../components/nav.vue";

export default{
  components:{
    navFoot
  }
}

</script>


<style scoped>
.person {
  background: #faf8f8;
  padding-bottom: 1rem;
}
.header {
  width: 7.5rem;
  height: 4.76rem;
  background: url("../../assets/img/person/personal center_image_bg@2x.png")
    center center no-repeat;
  background-size: cover;
}
.header .designation {
  display: flex;
  padding-top: 1.22rem;
  margin-left: 0.56rem;
}
.header .designation .portrait {
  width: 0.92rem;
  height: 0.92rem;
  display: block;
  margin-top: 0.14rem;
}
.header .designation .designation-center {
  margin-top: 0.18rem;
  margin-left: 0.4rem;
}
.header .designation .designation-center .name {
  display: block;
  font-size: 0.32rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  color: #fffcfc;
}
.header .designation .designation-center .label {
  width: 1.16rem;
  height: 0.44rem;
  display: block;
  margin-top: 0.06rem;
}
.header .designation .setting {
  width: 0.64rem;
  height: 0.64rem;
  display: block;
  margin-left: 3.46rem;
}
.header ul {
  width: 5.9rem;
  margin: 0.36rem auto 0;
  display: flex;
  justify-content: space-around;
}
.header ul li .number {
  text-align: center;
  display: block;
  font-size: 0.36rem;
  font-family: PingFang SC;
  font-weight: 800;
  color: #fffcfc;
}
.header ul li .text {
  display: block;
  font-size: 0.24rem;
  font-family: PingFang SC;
  margin-top: 0.1rem;
  color: #fffcfc;
}
.details {
  width: 6.7rem;
  height: 0.8rem;
  background: url("../../assets/img/person/personal center_image_vip card bg@2x.png")
    center center no-repeat;
  background-size: cover;
  margin: 0.4rem auto 0;
  position: relative;
}
.details .details-box {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  width: 1.28rem;
  height: 0.48rem;
  background: #f4d4ac;
  border-radius: 0.22rem;

  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #333333;
  text-align: center;
  line-height: 0.48rem;
  margin-left: 5rem;
}
.indent {
  width: 7.02rem;
  height: 2.32rem;
  background: #ffffff;
  margin: 0.2rem auto 0;
}
.indent .indent-box {
  width: 6.4rem;
  height: 0.4rem;
  padding-top: 0.24rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.indent .indent-box .indent-text {
  font-size: 0.28rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  display: block;
  color: #333333;
}
.indent .indent-box .all {
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #999999;
  display: block;
  margin-left: 3.9rem;
  line-height: 0.4rem;
}
.indent .indent-box .icon-more {
  width: 0.4rem;
  height: 0.4rem;
  display: block;
}
.indent .division {
  width: 6.22rem;
  border: 1px solid #f2f2f2;
  margin: 0.16rem auto 0;
}
.indent .indent-icon {
  width: 5.78rem;
  margin: 0.28rem auto 0;
}
.indent .indent-icon ul {
  display: flex;
  justify-content: space-between;
}
.indent .indent-icon ul li img {
  width: 0.64rem;
  height: 0.64rem;
  display: block;
  margin: 0 auto;
}
.indent .indent-icon ul li span {
  display: block;
  font-size: 0.2rem;
  font-family: PingFang SC;
  color: #333333;
}
.nav-bg {
  width: 7rem;
  height: 1.56rem;
  background: url("../../assets/img/person/personal center_image_banner@2x.png")
    center center no-repeat;
  background-size: cover;
  margin: 0.24rem auto 0;
}
.service {
  width: 7.02rem;
  height: 4rem;
  background: #ffffff;
  margin: 0.32rem auto 0;
}
.service .service-box {
  width: 6.4rem;
  height: 0.4rem;
  padding-top: 0.24rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.service .service-box .service-text {
  font-size: 0.28rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  display: block;
  color: #333333;
}
.service .service-box .all {
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #999999;
  display: block;
  margin-left: 3.9rem;
  line-height: 0.4rem;
}
.service .service-box .icon-more {
  width: 0.4rem;
  height: 0.4rem;
  display: block;
}
.service .division {
  width: 6.22rem;
  border: 1px solid #f2f2f2;
  margin: 0.16rem auto 0;
}
.service .service-icon {
  margin-top: 0.04rem;
}

.service .service-icon ul {
  margin: 0 auto;
  width: 6.8rem;
}
.service .service-icon ul li {
  float: left;   
  margin: 0.4rem 0.37rem 0;
}
.service .service-icon ul li .icon-text {
  display: block;
  font-size: 0.2rem;
  font-family: PingFang SC;
  color: #333333;
  margin-top: 0.16rem;
}
.service .service-icon ul li .icon-img {
  margin: 0 auto;
  width: 1.12rem;
  height: 1.12rem;
  zoom: 0.5;
  background-size: cover;
}
.service .service-icon ul .address .icon-img {
  background: url("../../assets/img/person/personal center_icon_shipping address@2x.png")
    center center no-repeat;
}
.service .service-icon ul .change .icon-img {
  background: url("../../assets/img/person/personal center_icon_change@2x.png")
    center center no-repeat;
}
.service .service-icon ul .member .icon-img {
  background: url("../../assets/img/person/personal center_icon_members@2x.png")
    center center no-repeat;
}
.service .service-icon ul .chitchat .icon-img {
  background: url("../../assets/img/person/personal center_icon_service@2x.png")
    center center no-repeat;
}
.service .service-icon ul .mission .icon-img {
  background: url("../../assets/img/person/personal center_icon_task center@2x.png")
    center center no-repeat;
}
.service .service-icon ul .agreement .icon-img {
  background: url("../../assets/img/person/personal center_icon_user agreement@2x.png")
    center center no-repeat;
}
.service .service-icon ul .question .icon-img {
  background: url("../../assets/img/person/personal center_icon_problem@2x.png")
    center center no-repeat;
}
.service .service-icon ul .proposal .icon-img {
  background: url("../../assets/img/person/personal center_icon_product ideas@2x.png")
    center center no-repeat;
}
.like{
  margin-top: 0.4rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1.66rem;
}
.like img{
  width: 1.546rem;
  height: 0.212rem;
  display: block;
  margin-top: 0.1rem;
}
.like span{
  display: block;
font-size: 0.28rem;
font-family: Source Han Serif CN;
font-weight: bold;
color: #C30D23;
}
</style>