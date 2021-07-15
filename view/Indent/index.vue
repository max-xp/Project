<template>
  <div class="indent">
    <div class="header">
      <span class="header-tit">确认订单</span>
    </div>
    <div class="gain">
      <div class="gain-box">
        <span class="name">收货人：关山月</span>
        <span class="number">12345678911</span>
      </div>
      <div class="gain-Tbox">
        <span class="add">收货地址：广州市荔湾区西关大道999号</span>
        <img
          src="../../assets/img/indent/make sure the order_icon_more@2x.png"
          alt=""
        />
      </div>
    </div>
    <div class="shops">
      <ul>
        <li v-for="(item,idx) in arr" :key=idx >
          <div class="shop-img">
            <img
              :src="item.img"
              alt=""
            />
          </div>
          <div class="shop-text">
            <span class="shop-name">{{item.title}}</span>
            <span class="shop-color">枫叶红</span>
            <span class="shop-remark">7天无理由退换</span>
            <div class="shop-box">
              <span class="shop-price">¥{{item.price}}</span>
              <span class="shop-number">×{{item.count}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="remark">
      <div class="remark-box">
        <div class="discounts">
          <span class="discounts-tit">优惠</span>
          <div class="reel">
            <span>五品小主券</span>
            <img
              src="../../assets/img/indent/make sure the order_icon_more@2x.png"
              alt=""
            />
          </div>
        </div>
        <div class="distribution">
          <span class="distribution-tit">配送方式</span>
          <span class="distribution-text">快递免运费</span>
        </div>
        <div class="message">
          <span>买家留言</span>
          <input
            type="text"
            placeholder="留言前建议协商（50字内）"
            name=""
            id=""
          />
        </div>
      </div>
    </div>
    <div class="calculate">
      <div class="calculate-box">
        <div class="money">
          <span class="money-tit">商品金额</span>
          <span class="money-price">¥{{this.price}}.00</span>
        </div>
        <div class="freight">
          <span class="freight-tit">运费</span>
          <span class="freight-text">免运费</span>
        </div>
        <div class="summation">
          <span class="summation-tit">合计</span>
          <span class="summation-text">¥{{this.price}}.00</span>
        </div>
      </div>
    </div>
    <div class="submit-box">
        <span class="footing">合计:</span>
        <span class="number">¥{{this.price}}</span>
        <span class="submit" @click="submit()">提交订单</span>
    </div>
    <navFoot />
  </div>
</template>
<script>
import navFoot from "../../components/nav.vue";
export default {
  name: "navheader",
  components: {
    navFoot,
  },
  data() {
    return {
        arr:this.$route.query.obj,
        price:this.$route.query.price
    };
  },
  methods: {
      submit(){
          console.log(this.arr);
      }
  },
  
};
</script>

<style scoped>
.indent {
  background: #f5f5f5;
}
.header {
  width: 7.5rem;
  height: 1.76rem;
  background: #c30d23;
  text-align: center;
}
.header .header-tit {
  font-size: 0.4rem;
  font-family: Source Han Serif CN;
  font-weight: bold;
  color: #fafafa;
  display: block;
  padding-top: 1.04rem;
}
.gain {
  width: 7.5rem;
  height: 1.44rem;
  background: white;
}
.gain-box {
  width: 6.64rem;
  display: flex;
  justify-content: space-between;
  padding-top: 0.24rem;
  margin: 0 auto;
}
.gain-box .name {
  display: block;
  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #333333;
}
.gain-box .number {
  display: block;
  font-size: 0.24rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #333333;
}
.gain-Tbox {
  width: 6.64rem;
  display: flex;
  justify-content: space-between;
  margin: 0.18rem auto 0;
}
.gain-Tbox .add {
  display: block;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #333333;
}
.gain-Tbox img {
  width: 0.4rem;
  height: 0.4rem;
  display: block;
}
.shops {
  background: white;
  margin-top: 0.24rem;
}
.shops ul {
  padding: 0.16rem 0;
}
.shops ul li {
  margin: 0 0.4rem 0.24rem;
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
  font-family: Source Han Serif CN;
  font-weight: bold;
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
.remark {
  height: 2.52rem;
  background: white;
  margin-top: 0.24rem;
}
.remark .remark-box {
  width: 6.76rem;
  padding: 0.42rem 0 0.4rem 0;
  margin: 0 auto;
}
.remark .remark-box .discounts {
  display: flex;
  justify-content: space-between;
}
.remark .remark-box .discounts .discounts-tit {
  display: block;
  font-size: 0.28rem;
  font-family: 长城大标宋体;
  color: #333333;
}
.remark .remark-box .discounts .reel {
  display: flex;
}
.remark .remark-box .discounts .reel span {
  display: block;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #c30d23;
}
.remark .remark-box .discounts .reel img {
  width: 0.4rem;
  height: 0.4rem;
  display: block;
}
.remark .remark-box .distribution {
  margin-top: 0.28rem;
  display: flex;
  justify-content: space-between;
}
.remark .remark-box .distribution .distribution-tit {
  display: block;
  font-size: 0.28rem;
  font-family: 长城大标宋体;
  color: #333333;
}
.remark .remark-box .distribution .distribution-text {
  display: block;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #333333;
}
.remark .remark-box .message {
  margin-top: 0.28rem;
  display: flex;
}
.remark .remark-box .message span {
  display: block;
  font-size: 0.28rem;
  font-family: 长城大标宋体;
  color: #333333;
}
.remark .remark-box .message input {
  width: 3rem;
  height: 0.32rem;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #999999;
  border: none;
  margin-left: 0.32rem;
  margin-top: 0.03rem;
}
.calculate {
  margin-top: 0.24rem;
  height: 2.78rem;
  background: white;
}
.calculate .calculate-box {
  width: 6.64rem;
  padding: 0.4rem 0 0.68rem;
  margin: 0 0.4rem;
}
.calculate .calculate-box .money {
  display: flex;
  justify-content: space-between;
}
.calculate .calculate-box .money .money-tit {
  display: block;
  font-size: 0.28rem;
  font-family: 长城大标宋体;
  color: #333333;
}
.calculate .calculate-box .money .money-price {
  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #c30d23;
  display: block;
}
.calculate .calculate-box .freight {
  display: flex;
  justify-content: space-between;
  margin-top: 0.28rem;
}
.calculate .calculate-box .freight .freight-tit {
  display: block;
  font-size: 0.28rem;
  font-family: 长城大标宋体;
  color: #333333;
}
.calculate .calculate-box .freight .freight-text {
  display: block;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #333333;
}
.calculate .calculate-box .summation {
  display: flex;
  justify-content: space-between;
  margin-top: 0.28rem;
}
.calculate .calculate-box .summation .summation-tit {
  display: block;
  font-size: 0.28rem;
  font-family: 长城大标宋体;
  color: #333333;
}
.calculate .calculate-box .summation .summation-text {
  display: block;
  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #c30d23;
}
.submit-box{
width: 7.5rem;
height: 0.88rem;
background: white;
position: fixed;
bottom: 1.66rem;
display: flex;
justify-content:flex-end;
}
.submit-box .footing{
    display: block;
font-size: 0.28rem;
font-family: PingFang SC;
color: #333333;
margin-top: 0.24rem;
margin-right: 0.16rem;
}
.submit-box .number{
    display: block;
font-size: 0.36rem;
font-family: PingFang SC;
color: #C30D23;
margin-top: 0.18rem;
margin-right: 0.32rem;
}
.submit-box .submit{
    display: block;
font-size: 0.28rem;
font-family: PingFang SC;
width: 1.88rem;
background: #C30D23;
text-align: center;
color: #FFFCFC;
padding: 0.22rem 0 0.28rem;
}
</style>