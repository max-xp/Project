<template>
  <div>
    <!-- 头部 start -->
    <div class="header">
      <div class="grabble">
        <img src="../../assets/img/home/home_image_logo@2x.png" class="logo" alt="" />
        <div class="grabble-box">
          <img
            src="../../assets/img/home/search bar_icon_search_default@2x.png"
            class="default"
            alt=""
          />
          <input type="text" placeholder="故宫口红" class="grabble-input" />
        </div>
        <img
          src="../../assets/img/home/search bar_icon_notice@2x.png"
          class="notice"
          alt=""
        />
      </div>
      <img src="../../assets/img/home/nav bar_image_bg@2x.png" class="bg" alt="" />
    </div>
    <div class="presentation">
      <ul>
        <li>
          <img src="../../assets/img/home/home_image_new product@2x.png" alt="" />
          <span>故宫新品</span>
        </li>
        <li>
          <img src="../../assets/img/home/home_image_publish@2x.png" alt="" />
          <span>故宫出版</span>
        </li>
        <li>
          <img src="../../assets/img/home/home_image_unite@2x.png" alt="" />
          <span>故宫联名</span>
        </li>
        <li>
          <img src="../../assets/img/home/home_image_culturaly  creative@2x.png" alt="" />
          <span>文创产品</span>
        </li>
      </ul>
    </div>
    <!-- 头部 end -->
    <!-- 小卖部 start -->
    <div class="canteen">
      <div class="division"></div>
      <div class="canteen-header">
        <span class="shop-text">新人专享首单0元购</span>
        <span class="sum-text">返还100%的支付金额</span>
        <img src="../../assets/img/home/new people_btn_go@2x.png" class="btn-go" alt="" @click="go()"/>
        <div class="center-box">
          <div class="product">
            <div class="product-header">
              <span class="header-Ltext">故宫上新</span>
              <span class="header-Rtext">惊喜上新</span>
            </div>
            <div class="product-center">
              <ul>
                <li>
                  <img
                    src="../../assets/img/home/new palace museum_image_small@2x.png"
                    class="small"
                    alt=""
                  />
                  <span>￥199.9</span>
                </li>
                <li>
                  <img
                    src="../../assets/img/home/new palace museum_image_small@2x(1).png"
                    class="small-m"
                    alt=""
                  />
                  <span>￥39.9</span>
                </li>
              </ul>
            </div>
            <div class="product-foot">
              <div class="foot-Img">
                <img src="../../assets/img/home/new palace museum_image_big@2x.png" alt="" />
              </div>
              <div class="foot-Text">
                <span class="text-good">好事登枝茶海</span>
                <span class="text-more">多福多寿</span>
                <span class="text-number">￥159.99</span>
              </div>
            </div>
          </div>
          <div class="partition"></div>
          <div class="selection">
            <div class="selection-header">
              <span class="court-text">宫里好物</span>
              <span class="selection-text">精选</span>
            </div>
            <div class="selection-img">
              <ul class="fixClear">
                <li>
                  <img
                    src="../../assets/img/home/good things in the palace_image@2x.png"
                    alt=""
                  />
                  <span>珐琅茶壶</span>
                </li>
                <li>
                  <img
                    src="../../assets/img/home/good things in the palace_image@2x(2).png"
                    alt=""
                  />
                  <span>五彩藻纹罐</span>
                </li>
                <li>
                  <img
                    src="../../assets/img/home/good things in the palace_image@2x(1).png"
                    alt=""
                  />
                  <span>梅花绣眼壶承</span>
                </li>
                <li>
                  <img
                    src="../../assets/img/home/good things in the palace_image@2x(3).png"
                    alt=""
                  />
                  <span>龙纹酒壶</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="center-foot">
          <span class="foot-Ltext">故宫资讯</span>
          <span class="foot-division"></span>
          <span class="foot-Rtext"
            >“故宫讲堂”第一百六十二讲-古陶瓷科技研究
          </span>
          <img
            src="../../assets/img/home/Palace Museum consultation_icon_more@2x.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- 小卖部 end -->
    <!-- 为你精选 start -->
    <div class="choiceness">
      <div class="choiceness-header">
        <img src="../../assets/img/home/title_image_bg@2x.png" alt="" />
        <span class="text-one">为</span>
        <span class="text-two">你</span>
        <span class="text-three">精</span>
        <span class="text-four">选</span>
      </div>
      <div class="nav">
        <img src="../../assets/img/home/banner_image_mask@2x.png" class="mask" alt="" />
        <h2 class="nav-text">果园老农 × 国立故宫 × IN LIGHT 新中式</h2>
        <img src="../../assets/img/home/banner_icon_hot@2x.png" class="hot-icon" alt="" />
        <img src="../../assets/img/home/banner_icon_more@2x.png" class="more-icon" alt="" />
      </div>
      <div class="browse">
        <ul class="fixClear">
          <li>
            <img
              src="../../assets/img/home/good thing Museum_image_commodity@2x.png"
              alt=""
            />
            <span class="browse-tit">荷包口红•豇豆红</span>
            <div class="browse-number">
              <span class="number">￥199.00</span>
              <span class="remark-one">上新价</span>
            </div>
          </li>
          <li>
            <img
              src="../../assets/img/home/selected for you_image_commodity@2x(1).png"
              alt=""
            />
            <span class="browse-tit">鹤禧觉色•气垫</span>
            <div class="browse-number">
              <span class="number">￥120.00</span>
              <span class="remark-tow">￥199</span>
              <span class="striping"></span>
            </div>
          </li>
          <li>
            <img
              src="../../assets/img/home/selected for you_image_commodity@2x(2).png"
              alt=""
            />
            <span class="browse-tit">鹤禧觉色•气垫</span>
            <div class="browse-number">
              <span class="number">￥540.00</span>
              <span class="remark-one">限时</span>
            </div>
          </li>
          <li>
            <img
              src="../../assets/img/home/selected for you_image_commodity@2x(3).png"
              alt=""
            />
            <span class="browse-tit">鹤舞青松丝巾</span>
            <div class="browse-number">
              <span class="number">￥120.00</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="division"></div>
    </div>
    <!-- 为你精选 end -->
    <!-- 好物管 start -->
    <div class="management">
      <div class="management-header">
        <img src="../../assets/img/home/title_image_bg@2x.png" alt="" />
        <span class="text-one">好</span>
        <span class="text-two">物</span>
        <span class="text-three">管</span>
      </div>
      <div class="management-center">
        <ul class="fixClear">
          <li>
            <img
              src="../../assets/img/home/good thing Museum_image_commodity@2x.png"
              class="text-img"
              alt=""
            />
            <div class="management-box">
              <span class="text-tit">荷包口红•琥珀橘</span>
              <span class="remark">国风好礼</span>
              <div class="price">
                <span class="number">￥199.00</span>
                <span class="sales">月销1987</span>
              </div>
            </div>
          </li>
          <li>
            <img
              src="../../assets/img/home/good thing Museum_image_commodity@2x(1).png"
              class="text-img"
              alt=""
            />
            <div class="management-box">
              <span class="text-tit">花丝比翼双飞流苏耳饰</span>
              <div class="price">
                <span class="number">￥1127.00</span>
                <span class="sales">月销127</span>
              </div>
              <img
                src="../../assets/img/home/Dividing line_image_line@2x.png"
                class="line"
                alt=""
              />
              <div class="rank">
                <img
                  src="../../assets/img/home/card_icon_Ranking List@2x.png"
                  class="list"
                  alt=""
                />
                <span class="rank-text">故宫首饰排行榜第一</span>
                <img src="../../assets/img/home/card_icon_more@2x.png" class="more" alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 好物管 end -->
    <navFoot />
  </div>
</template>
<script>

import navFoot from "../../components/nav.vue";
export default {
  name: "home",
  components: {
    navFoot,
  },
  methods: {
    go() {
      this.$router.push({
        path: `/NewProduct`,
        query: {
          ip: 1,
        },
      });
    },
  },
};
</script>
<style scoped>
.header{
    width: 7.5rem;
    height: 5.62rem;
    background: #C30D23;
}
.header .grabble{
    padding-top: 1rem;
    display: flex;
}
.header .grabble .logo{
    width: 0.8rem;
    height: 0.8rem;
    margin-left: 0.32rem;
}
.header .grabble .notice{
    width: 0.64rem;
    height: 0.64rem;
    margin-left: 0.16rem;
}
.header .grabble .grabble-box{
    margin-left: 0.14rem;
    width: 5.2rem;
    height: 0.64rem;
    border-radius: 0.12rem;
    background: rgb(255, 255, 255,0.16);
    display: flex;
}
.header .grabble .grabble-box .default{
    width: 0.4rem;
    height: 0.4rem;
    margin-left: 1.66rem;
    margin-top: 0.12rem;
}
.header .grabble .grabble-box .grabble-input{
    font-size: 0.28rem;
    font-family: 长城大标宋体;
    line-height: 0.38rem;
    color: #FFFCFC;
    background-color:transparent;
    border: none;
    margin-left: 0.24rem;
}
.header .bg{
    width: 7.5rem;
}
.presentation{
    margin: 0.7rem auto 0;
    width: 6.08rem;
}
.presentation ul{
    display: flex;
    justify-content: space-between;
}
.presentation ul li img{
    width: 0.88rem;
    height: 0.88rem;
}
.presentation ul li span{
    display: block;
    font-size: 0.24rem;
    font-family: 长城大标宋体;
    line-height: 0.38rem;
    color: #333333;
}
.canteen{
    margin-top: 0.38rem;
    position: relative;
}
.canteen .canteen-header{
    width: 7.5rem;
    height: 7.5516rem;
    background: url('../../assets/img/home/new people_image_bg@2x.png') center center no-repeat;
    background-size: cover;
    position: relative;
}
.canteen .canteen-header .shop-text{
    position: absolute;
    font-size: 0.28rem;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 0.38rem;
    color: #FFFFFF;
    top: 1.9rem;
    left: 0.56rem;
}
.canteen .canteen-header .sum-text{
    position: absolute;
    top: 1.96rem;
    left: 3.12rem;
    font-size: 0.2rem;
    font-family: PingFang SC;
    line-height: 0.28rem;
    color: #FFFFFF;
}
.canteen .canteen-header .btn-go{
    width: 0.96rem;
    height: 0.4rem;
    position: absolute;
    top: 1.9rem;
    left: 5.82rem;
}
.canteen .center{
    position: absolute;
    top: 2.22rem;
    width: 7.5rem;;
    height: 5.34rem;
    background: #C30D23;
    z-index: -1;
}
.canteen .center-box{
  position: absolute;
  top: 2.46rem;
  left: 0.24rem;
    width: 6.94rem;
    height: 4.2rem;
    background-color: white;
    border: 0.04rem solid #FFEBB9;
    border-radius: 8px;
    display: flex;
}
.canteen .center-box .product .product-header{
    margin: 0.16rem 0.08rem 0 0.32rem;
    display: flex;
}
.canteen .center-box .product .product-header .header-Ltext{
    display: block;
    font-size: 0.28rem;
    font-family: 长城大标宋体;
    line-height: 0.38rem;
    color: #333333;
}
.canteen .center-box .product .product-header .header-Rtext{
    display: block;
    font-size: 0.16rem;
    font-family: PingFang SC;
    line-height: 0.22rem;
    color: #FFFCFC;
    width: 0.76rem;
    height: 0.24rem;
    background: linear-gradient(90deg, #FF6815 0%, #FF4C3C 100%);
    border: 4px solid #FFEBB9;
    border-radius: 8px;
}
.canteen .center-box .product .product-center{
    margin: 0.22rem 0 0 0.32rem;
}
.canteen .center-box .product .product-center ul{
    display: flex;
}

.canteen .center-box .product .product-center ul li{
    text-align: center;
    width: 1.44rem;
    height: 1.64rem;
    background: #FFF9FA;
    margin-right: 0.16rem;
}
.canteen .center-box .product .product-center ul li img{
    width: 1.08rem;
    height: 1.08rem;
}
.canteen .center-box .product .product-center ul li span{
    display: block;
    font-size: 0.2rem;
    font-family: PingFang SC;
    line-height:0.28rem;
    color: #C30D23;
}
.canteen .center-box .product .product-foot{
    width: 3.04rem;
    height: 1.48rem;
    background: #F3FAFF;
    margin-top: 0.16rem;
    margin-left: 0.32rem;
    display: flex;
}
.canteen .center-box .product .product-foot .foot-Img{
    margin: 0.24rem 0 0.16rem;
}
.canteen .center-box .product .product-foot .foot-Img img{
    width: 1.36rem;
    height: 1rem;
}
.canteen .center-box .product .product-foot .foot-Text{
    margin: 0.22rem 0 0.16rem;
}
.canteen .center-box .product .product-foot .foot-Text .text-good{
    font-size: 0.2rem;
    font-family: 长城大标宋体;
    line-height: 0.28rem;
    color: #333333;
    display: block;
}
.canteen .center-box .product .product-foot .text-more{
    font-size: 0.16rem;
    font-family: PingFang SC;
    line-height: 0.24rem;
    color: #999999;
    margin-top: 0.06rem;
    display: block;
}
.canteen .center-box .product .product-foot .text-number{
    font-size: 0.2rem;
    font-family: PingFang SC;
    line-height: 0.28rem;
    color: #C30D23;    
    margin-top: 0.18rem;
    display: block;
}
.canteen .center-box .partition{
    width: 0px;
    height: 3.96rem;
    border: 0.02rem solid #707070;
    opacity: 0.06;
    margin-top: 0.08rem;
}
.canteen .center-box .selection .selection-header{
  display: flex;
    margin: 0.16rem 0 0 0.16rem;
}
.canteen .center-box .selection .selection-header .court-text{
    font-size: 0.28rem;
    font-family: 长城大标宋体;
    line-height: 0.38rem;
    color: #333333;
    display: block;
}
.canteen .center-box .selection .selection-header .selection-text{
    display: block;
    width: 0.56rem;
    height: 0.24rem;
    background: linear-gradient(90deg, #FFE2A5 0%, #F5A600 100%);
    font-size: 0.24rem;
    font-family: PingFang SC;
    line-height: 0.22rem;
    color: #FFFCFC;
    margin-left: 0.08rem;
    margin-top: 0.09rem;
}
.canteen .center-box .selection .selection-img{
    margin: 0.05rem 0.14rem 0;
}
.canteen .center-box .selection .selection-img ul li{
    float: left;
    margin: 0.4rem 0.23rem 0;
    text-align: center;
    width: 1.08rem;
}
.canteen .center-box .selection .selection-img ul li img{
    width: 1.08rem;
    height: 1.08rem;
    display: block;
}
.canteen .center-box .selection .selection-img ul li span{
    display: block;
    font-size: 0.18rem;
    font-family: PingFang SC;
    line-height: 0.2rem;
    color: #C30D23;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.canteen .center-foot{
  position: absolute;
  top: 6.82rem;
  left: 0.24rem;
    width: 6.94rem;
    height: 0.4rem;
    background: #FFFFFF;
    border: 0.04rem solid #FFEBB9;
    opacity: 1;
    border-radius: 0.04rem;
    margin: 0.08rem auto 0;
    display: flex;
}
.canteen .center-foot .foot-Ltext{
    font-size: 0.2rem;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 0.38rem;
    color: #C30D23;
    margin-left:0.24rem;
}
.canteen .center-foot .foot-division{
    width: 0px;
    height: 0.24rem;
    border: 0.02rem solid #333333;
    margin-left: 0.08rem;
    margin-top: 0.06rem;
}
.canteen .center-foot .foot-Rtext{
    font-family: PingFang SC;
    color: #333333;
    font-size: 0.2rem;
    line-height: 0.38rem;
}
.canteen .center-foot img{
    width: 0.24rem;
    height: 0.24rem;
    margin-top: 0.08rem;
    margin-left: 0.4rem;
}
.choiceness{
    margin-top: 0.64rem;
}
.choiceness .choiceness-header{
    position: relative;
}
.choiceness .choiceness-header img{
    width: 7.5rem;
    display: block;
}
.choiceness .choiceness-header span{
    display: inline-block;
    width: 0.64rem;
    height: 0.64rem;
    background: url('../../assets/img/home/title_image_word bg@2x(1).png') center center no-repeat;
    background-size: cover;
    position: absolute;
    font-size: 0.32rem;
    font-family: Source Han Serif CN;
    font-weight: bold;
    line-height: 0.64rem;
    color: #FFFFFF;
    text-align: center;
}
.choiceness .choiceness-header .text-one{
    top: -0.25rem;
    left: 2.7rem;
}
.choiceness .choiceness-header .text-two{
    top: -0.25rem;
    left: 3.2rem;
}
.choiceness .choiceness-header .text-three{
    top: -0.25rem;
    left: 3.7rem;
}
.choiceness .choiceness-header .text-four{
    top: -0.25rem;
    left: 4.24rem;
}
.choiceness .nav{
    width: 7rem;
    height: 2.32rem;
    margin: 0.54rem auto 0;
    background: url('../../assets/img/home/selected for you banner_image_commodity@2x.png') center center no-repeat;
    background-size: cover;
    position: relative;
}
.choiceness .nav .mask{
    position: absolute;
    width: 7.2rem;
    height: 0.64rem;
    top: 1.68rem;
    left: -0.1rem;
    opacity: 0.7;
}
.choiceness .nav .nav-text{
    position: absolute;
    top: 1.84rem;
    left: 0.14rem;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 18px;
    color: #FFFCFC;
    display: inline-block;
}
.choiceness .nav .hot-icon{
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    top: 1.8rem;
    left: 4.66rem;
}
.choiceness .nav .more-icon{
    position: absolute;
    width: 0.24rem;
    height: 0.24rem;
    top: 1.88rem;
    left: 6.56rem;
}
.choiceness .browse{
    margin: 0.24rem 0 0.4rem 0.24rem;
    width: 7.26rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    overflow-x: scroll;
}
.choiceness .browse ul{
    width: 7.9rem;
}
.choiceness .browse ul li{
    width: 1.8rem;
    height: 2.8rem;
    float: left;
    margin-right: 0.16rem;
    text-align: center;
}
.choiceness .browse ul li img{
    width: 1.8rem;
    height: 1.8rem;
}
.choiceness .browse ul li .browse-tit{
    margin-top: 0.12rem;
    display: block;
    font-size: 0.2rem;
    font-family: PingFang SC;
    line-height: 0.28rem;
    color: #333333;
}
.choiceness .browse ul li .browse-number{
    margin-top: 0.12rem;
    position: relative;
}
.choiceness .browse ul li .browse-number .number{
    font-size: 0.24rem;
    font-family: PingFang SC;
    line-height: 0.32rem;
    color: #C30D23;
}
.choiceness .browse ul li .browse-number .remark-one{
    font-size: 0.16rem;
    font-family: PingFang SC;
    line-height: 0.22rem;
    color: #C30D23;
    width: 0.52rem;
    height: 0.24rem;
    border: 1px solid #C30D23;
    display: inline-block;
}
.choiceness .browse ul li .browse-number .remark-tow{
    font-size: 0.16rem;
    font-family: PingFang SC;
    line-height: 0.22rem;
    color: #CCCCCC;
}
.choiceness .browse ul li .browse-number .striping{
    display: inline-block;
    position: absolute;
    top: 0.14rem;
    left: 1.2rem;
    width: 28px;
    height: 0px;
    border: 1px solid #CCCCCC;
}


.management{
    margin-top: 0.62rem;
    margin-bottom: 1.66rem;
}
.management .management-header{
    position: relative;
}
.management .management-header img{
    width: 7.5rem;
    display: block;
}
.management .management-header span{
    display: inline-block;
    width: 0.64rem;
    height: 0.64rem;
    /* background: url('../img/home/title_image_word bg@2x(1).png') center center no-repeat; */
    background: url('../../assets/img/home/title_image_word bg@2x(1).png');
    background-size: cover;
    position: absolute;
    font-size: 0.32rem;
    font-family: Source Han Serif CN;
    font-weight: bold;
    line-height: 0.64rem;
    color: #FFFFFF;
    text-align: center;
}
.management .management-header .text-one{
    top: -0.24rem;
    left: 2.94rem;
}
.management .management-header .text-two{
    top: -0.24rem;
    left: 3.44rem;
}
.management .management-header .text-three{
    top: -0.24rem;
    left: 3.94rem;
}
.management .management-center{
    margin: 0.56rem 0.13rem 0;
}
.management .management-center ul li{
    width: 3.4rem;
    background: #FFFFFF;
    float: left;
    margin: 0 0.11rem;
}
.management .management-center ul li .text-img{
    width: 3.4rem;
    height: 3rem;
}
.management .management-center .management-box{
    margin: 0.16rem 0 0 0.16rem;
}
.management .management-center .management-box .text-tit{
    font-size: 0.24rem;
    font-family: PingFang SC;
    line-height: 0.32rem;
    color: #333333;
}
.management .management-center .management-box .remark{
    width: 0.96rem;
    height: 0.32rem;
    margin-top: 0.12rem;
    background: rgb(195, 13, 35, 0.04);
    display: block;
    font-size: 0.2rem;
    font-family: PingFang SC;
    line-height: 0.28rem;
    color: #C30D23;
}
.management .management-center .management-box .price{
    margin-top: 0.16rem;
    display: flex;
    justify-content: space-between;
    
}
.management .management-center .management-box .price .number{
    font-size: 0.32rem;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 0.42rem;
    color: #C30D23;
}
.management .management-center .management-box .price .sales{
    font-size: 0.2rem;
    font-family: PingFang SC;
    line-height: 0.5rem;
    color: #999999;
    margin-right: 0.12rem;
}
.management .management-center .management-box .line{
    width: 3.4rem;
    height: 0.02rem;
    margin-top: 0.18rem;
}
.management .management-center .management-box .rank{
    display: flex;
    margin: 0.08rem 0 0 0.12rem;
}
.management .management-center .management-box .rank .list{
    width: 0.24rem;
    height: 0.24rem;
}
.management .management-center .management-box .rank .rank-text{
    font-size: 0.2rem;
    font-family: PingFang SC;
    color: #333333;
    margin-left: 0.12rem;
}
.management .management-center .management-box .rank .more{
    width: 0.24rem;
    height: 0.24rem;
    margin-left: 0.3rem;
}
.division{
    width: 7.5rem;
    height: 0.24rem;
    background: #F5F5F5;
}
</style>
