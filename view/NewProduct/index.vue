<template>
  <div>
    <!-- 头部 start -->
    <div class="header">
      <img
        src="../../assets/img/newProduct/nav bar_icon_more_nor@1x@2x.png"
        alt=""
        @click="back()"
      />
      <span>故宫新品</span>
    </div>
    <!-- 头部 end -->
    <!-- 轮播图 -->
    <swipera>
    </swipera>
    <!-- 轮播图 -->
    <!-- 商品介绍 start -->
    <div class="product-list">
      <ul>
        <li>
          <div class="product-img">
            <img
              src="../../assets/img/newProduct/new products of the Forbidden city commodity_image_commodity@2x.png"
              alt=""
            />
          </div>
          <div class="product">
            <div class="product-tit">
              <span class="tit-box">新品</span>
              <span class="tit-name">故宫口红 荷包口红</span>
            </div>
            <div class="product-referral">
              <span>滋润保湿 妆感舒悦 持妆显色</span>
            </div>
            <div class="product-remark">
              <span>多色可选</span>
              <span>包装精美</span>
            </div>
            <div class="product-price">
              <span class="price-number">￥199.00</span>
              <span class="price-boxOne">满200减50</span>
            </div>
            <div class="product-evaluate">
              <span>1万条评价</span>
              <span>98.2%觉得好</span>
            </div>
          </div>
        </li>
        <li>
          <div class="product-img">
            <img
              src="../../assets/img/newProduct/new products of the Forbidden city commodity_image_commodity@2x(2).png"
              alt=""
            />
          </div>
          <div class="product">
            <div class="product-tit">
              <span class="tit-name">宫廷文化·揽月恒温杯</span>
            </div>
            <div class="product-referral">
              <span>宅家养生 人走茶不凉</span>
            </div>
            <div class="product-remark">
              <span>加热保温</span>
            </div>
            <div class="product-price">
              <span class="price-number">￥99.00</span>
              <span class="price-boxTow">近期加入购物车</span>
            </div>
            <div class="product-evaluate">
              <span>9876条评价</span>
              <span>96.2%觉得好</span>
            </div>
          </div>
        </li>
        <li>
          <div class="product-img">
            <img
              src="../../assets/img/newProduct/new products of the Forbidden city commodity_image_commodity@2x(1).png"
              alt=""
            />
          </div>
          <div class="product">
            <div class="product-tit">
              <span class="tit-name">有凤来仪古风保湿气垫</span>
            </div>
            <div class="product-referral">
              <span>轻薄水润 粉底奶油肌</span>
            </div>
            <div class="product-remark">
              <span>多色可选</span>
              <span>包装精美</span>
            </div>
            <div class="product-price">
              <span class="price-number">￥120.00</span>
              <span class="price-boxOne">满150减30</span>
            </div>
            <div class="product-evaluate">
              <span>9235条评价</span>
              <span>95.2%觉得好</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 商品介绍 end -->
    <navFoot />
  </div>
</template>

<script>
import swipera from "../../components/swiper.vue";

import navFoot from "../../components/nav.vue";
export default {
  name: "home",
  components: {
    swipera,
    navFoot
  },
  methods: {
    back() {
      this.$router.push({
        path: `/home`,
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
  display: flex;
}
.header img {
  width: 0.4rem;
  height: 0.4rem;
  margin: 1.16rem 0 0 0.48rem;
}
.header span {
  font-size: 0.4rem;
  font-family: 长城大标宋体;
  line-height: 0.54rem;
  color: #fafafa;
  margin-left: 2.1rem;
  margin-top: 1.04rem;
}
.nav img {
  width: 7.5rem;
  height: 4.5rem;
}
.product-list {
  margin-top: 0.36rem;
  margin-left: 0.24rem;
  margin-bottom: 1.66rem;
}
.product-list ul li {
  display: flex;
  margin-bottom: 0.48rem;
}
.product-list ul li .product-img img {
  width: 2.4rem;
  height: 2.4rem;
}
.product-list ul li .product {
  margin-left: 0.24rem;
}
.product-list ul li .product .product-tit {
  display: flex;
}
.product-list ul li .product .product-tit .tit-box {
  width: 0.56rem;
  height: 0.32rem;
  background: #c30d23;
  border-radius: 0.04rem;
  display: block;
  font-size: 0.2rem;
  font-family: PingFang SC;
  line-height: 0.28rem;
  color: #fffcfc;
  text-align: center;
  margin-right: 0.12rem;
}
.product-list ul li .product .product-tit .tit-name {
  font-size: 0.32rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  line-height: 0.21rem;
  color: #333333;
}
.product-list ul li .product .product-referral {
  margin-top: 0.1rem;
}
.product-list ul li .product .product-referral span {
  display: block;
  font-size: 0.24rem;
  font-family: PingFang SC;
  line-height: 0.3rem;
  color: #666666;
}
.product-list ul li .product .product-remark {
  margin-top: 0.16rem;
  display: flex;
}
.product-list ul li .product .product-remark span {
  width: 0.96rem;
  height: 0.32rem;
  background: #f2f2f2;
  display: block;
  font-size: 0.2rem;
  font-family: PingFang SC;
  line-height: 0.28rem;
  color: #b3b3b3;
  margin-right: 0.16rem;
  line-height: 0.32rem;
}
.product-list ul li .product .product-price {
  margin-top: 0.24rem;
  display: flex;
}
.product-list ul li .product .product-price .price-number {
  font-size: 0.24rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.32rem;
  color: #c30d23;
  margin-right: 0.2rem;
}
.product-list ul li .product .product-price .price-boxOne {
  display: block;
  font-size: 0.2rem;
  font-family: PingFang SC;
  line-height: 0.28rem;
  color: #c30d23;
  width: 1rem;
  height: 0.28rem;
  text-align: center;
  border: 1px solid #c30d23;
}
.product-list ul li .product .product-price .price-boxTow {
  width: 1.7rem;
  height: 0.28rem;
  border: 1px solid #2448ac;
  font-size: 0.2rem;
  font-family: PingFang SC;
  line-height: 0.28rem;
  color: #2448ac;
}
.product-list ul li .product .product-evaluate {
  margin-top: 0.16rem;
}
.product-list ul li .product .product-evaluate span {
  display: block;
  font-size: 0.2rem;
  font-family: PingFang SC;
  line-height: 0.28rem;
  color: #999999;
  margin-right: 0.2rem;
}

</style>