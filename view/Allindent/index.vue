<template>
  <div class="allindent">
    <headder page="全部订单" />
    <indentnav />
    <div class="indent">
      <ul>
        <li class="indent-one">
          <div class="indent-box">
            <div class="indent-header">
              <img
                src="../../assets/img/allindent/make sure the order_image_head portrait@2x.png"
                alt=""
              />
              <span class="header-tit">故宫文创</span>
              <span class="header-remark">等待买家付款</span>
            </div>
            <div class="shops">
              <ul>
                <li>
                  <div class="shop-img">
                    <img src="../../assets/img/allindent/shops.png" alt="" />
                  </div>
                  <div class="shop-text">
                    <span class="shop-name">故宫口红•枫叶红</span>
                    <span class="shop-color">枫叶红</span>
                    <span class="shop-remark">7天无理由退换</span>
                    <div class="shop-box">
                      <span class="shop-price">¥199.00</span>
                      <span class="shop-number">×1</span>
                    </div>
                  </div>
                </li>
                
              </ul>
            </div>
            <div class="shops-price">
              <span class="allcount">共2件商品</span>
              <span class="discount">优惠 ¥ 0.00</span>
              <span class="summat">合计</span>
              <span class="price">¥1326.00 </span>
            </div>
            <div class="button">
              <span class="check">查看物流</span>
              <span class="determine">确认收货</span>
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
import indentnav from "../../components/indentnav.vue";

import navFoot from "../../components/nav.vue";


export default {
  name: "afflatus",
  components: {
    headder,
    indentnav,
    navFoot,
  },
};
</script>

<style scoped>
.allindent {
  background: #fffcfc;
}
.indent {
  margin-top: 0.16rem;
}
.indent ul .indent-one {
  width: 7.5rem;
}
.indent ul .indent-one .indent-box {
  padding: 0.24rem 0;
  margin: 0 0.4rem;
}
.indent ul .indent-one .indent-box .indent-header {
  display: flex;
  justify-content: space-between;
}
.indent ul .indent-one .indent-box .indent-header img {
  width: 0.36rem;
  height: 0.36rem;
  display: block;
}
.indent ul .indent-one .indent-box .indent-header .header-tit {
  display: block;
  font-size: 0.28rem;
  font-family: PingFang SC;
  color: #333333;
  margin-right: 3.4rem;
}
.indent ul .indent-one .indent-box .indent-header .header-remark {
  display: block;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #c30d23;
}


.shops {
  background: white;
  margin-top: 0.08rem;
}
.shops ul li {
  display: flex;
}
.shops ul li .shop-img img {
  width: 1.76rem;
  height: 1.76rem;
}
.shops ul li .shop-text {
  margin-left: 0.32rem;
}
.shops ul li .shop-text .shop-name {

  display: block;
font-size: 0.28rem;
font-family: 长城大标宋体;
font-weight: 400;
color: #333333;
}
.shops ul li .shop-text .shop-color {
  margin-top: 0.16rem;
  display: block;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #333333;
}
.shops ul li .shop-text .shop-remark {
  margin-top: 0.1rem;
  display: block;
  font-size: 0.16rem;
  font-family: PingFang SC;
  color: #c91328;
  width: 1.6rem;
  height: 0.3rem;
  background: #ffe0e4;
}
.shops ul li .shop-text .shop-box {
  margin-top: 0.1rem;
  display: flex;
}
.shops ul li .shop-text .shop-box .shop-price {
  display: block;
  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #c30d23;
}
.shops ul li .shop-text .shop-box .shop-number {
  display: block;
  margin-left: 3.28rem;
  font-size: 0.28rem;
  font-family: PingFang SC;
  color: #333333;
}
.shops-price{
  margin-top: 0.42rem;
  display: flex;
  justify-content:flex-end;
  align-items:flex-end;
}
.shops-price .allcount{
display: block;
font-size: 0.24rem;
font-family: PingFang SC;
color: #333333;
margin-right: 0.24rem;
}
.shops-price .discount{
display: block;
margin-right: 0.32rem;
font-size: 0.24rem;
font-family: PingFang SC;
color: #333333;
}
.shops-price .summat{
display: block;

font-size: 0.24rem;
font-family: PingFang SC;
color: #333333;
}
.shops-price .price{
display: block;

font-size: 0.32rem;
font-family: PingFang SC;
font-weight: bold;
color: #C30D23;
}
.button{
  margin-top: 0.36rem;
  display: flex;
  justify-content:flex-end;
  align-items:flex-end;
}
.button .check{
  width: 1.74rem;
background: #FFEBB9;
text-align: center;
font-size: 0.28rem;
font-family: PingFang SC;
color: #333333;
padding: 0.04rem 0 0.05rem;
margin-right: 0.24rem;
}
.button .determine{
  width: 1.74rem;
background: #C30D23;
text-align: center;
font-size: 0.28rem;
font-family: PingFang SC;
color: #FFFCFC;
padding: 0.04rem 0 0.05rem;
}
</style>
