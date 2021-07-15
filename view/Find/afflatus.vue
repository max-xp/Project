<template>
  <div class="afflatus">
    <headder page='发现故宫'/>
    <navheader />
    <div class="afflatus-box">
      <span class="afflatus-tit">一日一灵感</span>
      <div class="afflatus-content">
        <div class="left-bag"></div>
        <div class="img">
          <img
            src="../../assets/img/find/Inspiration in a day_image_commodity@2x.png"
            alt=""
          />
        </div>
        <div class="text">
          <span class="text-tit">乾隆款珐琅彩花卉山石纹诗句瓶</span>
          <span class="era">年代：清</span>
          <span class="present"
            >腹部彩料绘主题纹饰，山石两侧，兰花月季枝叶茂盛，花开正好。空白处墨书题“夕吹撩寒馥，晨曦透暖光”诗句，源自古诗《腊梅》，诗句旁红彩绘“郁心、寿、奇”印记。......</span
          >
          <span class="promptly">立即了解</span>
        </div>
      </div>
    </div>
    <div class="article-box">
      <span class="article-tit">精选文章</span>
      <ul>
        <li>
          <div class="left-bag"></div>
          <div class="article-text">
            <span class="article-Ttit">宋代的美好都在汴京城里了</span>
            <span class="article-center"
              >《长安十二时辰》的热播，让大家感受到了长安古城的雄伟辉煌，在中国古代历史上，有两座影响深远的文化高峰：唐代和宋代......</span
            >
            <div class="article-foot">
              <img
                src="../../assets/img/find/inspiration in a day_icon_comment@2x.png"
                alt=""
                class="message"
              />
              <span class="message-number">7212</span>
              <span class="article-remark">创事记</span>
              <span class="remark-box">专题</span>
            </div>
          </div>
          <div class="article-img">
            <img src="../../assets/img/find/choiceness_img@2x.png" alt="" />
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
  name: "afflatus",
  components: {
    navheader,
    headder,
    navFoot
  },
};
</script>

<style scoped>
.afflatus {
  background: #faf8f8;
}
.afflatus-box {
  width: 7.02rem;
  margin: 0.22rem auto 0;
}
.afflatus-box .afflatus-tit {
  position: relative;
  display: block;
  font-size: 0.28rem;
  font-family: 长城大标宋体;
  line-height: 0.38rem;
  color: #333333;
  margin-left: 0.24rem;
}
.afflatus-box .afflatus-tit::before {
  display: inline-block;
  width: 0.16rem;
  height: 0.48rem;
  background: url("../../assets/img/find/find inspiration_image@2x.png") center
    center no-repeat;
  background-size: cover;
  content: "";
  position: absolute;
  top: -0.04rem;
  left: -0.24rem;
}
.afflatus-box .afflatus-content {
  width: 7.02rem;
  height: 3.58rem;
  background: #f9f6ef;
  display: flex;
}
.afflatus-box .afflatus-content .left-bag {
  width: 0.28rem;
  height: 3.58rem;
  background: url("../../assets/img/find/inspiration in a day card_image_bg@2x.png")
    center center no-repeat;
}

.afflatus-box .afflatus-content .img img {
  width: 2.2rem;
  height: 2.93rem;
  margin: 0.28rem 0 0 0.3rem;
}
.afflatus-box .afflatus-content .text {
  margin: 0.28rem 0 0 0.4rem;
}
.afflatus-box .afflatus-content .text .text-tit {
  display: block;
  font-size: 0.2rem;
  font-family: 长城大标宋体;
  color: #b30f22;
  width: 2.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.afflatus-box .afflatus-content .text .era {
  display: block;
  margin-top: 0.16rem;
  font-size: 0.2rem;
  font-family: PingFang SC;
  color: #666666;
}
.afflatus-box .afflatus-content .text .present {
  display: block;
  margin-top: 0.24rem;
  width: 3.34rem;
  height: 1.1rem;
  font-size: 0.2rem;
  font-family: PingFang SC;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
}
.afflatus-box .afflatus-content .text .promptly {
  width: 56px;
  height: 18px;
  background: #c30d23;
  display: block;
  margin-top: 0.24rem;
  font-size: 0.2rem;
  font-family: PingFang SC;
  color: #fffcfc;
  text-align: center;
}

.article-box {
  margin: 0.74rem auto 0;
  width: 7.02rem;
}
.article-box .article-tit {
  position: relative;
  display: block;
  font-size: 0.28rem;
  font-family: 长城大标宋体;
  line-height: 0.38rem;
  color: #333333;
  margin-left: 0.24rem;
}
.article-box .article-tit::before {
  display: inline-block;
  width: 0.16rem;
  height: 0.48rem;
  background: url("../../assets/img/find/find inspiration_image@2x.png") center
    center no-repeat;
  background-size: cover;
  content: "";
  position: absolute;
  top: -0.04rem;
  left: -0.24rem;
}
.article-box ul {
  margin-top: 0.16rem;
}
.article-box ul li {
  display: flex;
  width: 7.02rem;
  height: 2.36rem;
  background: #f9f6ef;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.08);
  margin-bottom: 0.24rem;
}
.article-box ul li .left-bag {
  width: 0.28rem;
  height: 2.36rem;
  background: url("../../assets/img/find/inspiration in a day card_image_bg@2x.png")
    center center no-repeat;
}
.article-box ul li .article-text {
  margin: 0.18rem 0 0 0.16rem;
}
.article-box ul li .article-text .article-Ttit {
  display: block;
  font-size: 0.24rem;
  font-family: 长城大标宋体;
  line-height: 0.32rem;
  color: #b30f22;
}
.article-box ul li .article-text .article-center {
  margin-top: 0.26rem;
  width: 3rem;
  height: 0.8rem;
  display: block;
  font-size: 0.2rem;
  font-family: PingFang SC;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
}
.article-box ul li .article-text .article-foot {
  margin-top: 0.4rem;
  display: flex;
}
.article-box ul li .article-text .article-foot .message {
  width: 0.24rem;
  height: 0.24rem;
  margin-top: 0.1rem;
}
.article-box ul li .article-text .article-foot .message-number {
  font-size: 0.16rem;
  font-family: PingFang SC;
  color: #999999;
}
.article-box ul li .article-text .article-foot .article-remark {
  margin-left: 0.44rem;
  font-size: 0.16rem;
  font-family: PingFang SC;
  color: #999999;
}
.article-box ul li .article-text .article-foot .remark-box {
  display: block;
  width: 0.64rem;
  height: 0.32rem;
  border: 1px solid #c30d23;
  font-size: 0.24rem;
  font-family: PingFang SC;
  color: #c30d23;
  zoom: 0.5;
  margin: 0.2rem 0 0 0.2rem;
}
.article-box ul li .article-img img{
  margin-left: 0.5rem;
  width: 1.96rem;
  height: 1.96rem;
  margin-top: 0.2rem;
}
</style>