<template>
  <div>
    <div class="bgd">
      <div class="pass-box">
        <span>3</span>
        <span>跳过</span>
      </div>
    </div>
    <div class="foot">
      <img src="../../assets/img/splash/default_logo@2x.png" alt="" />
      <span>故宫文创</span>
    </div>
  </div>
</template>

<style scoped>
.bgd{
    background: url('../../assets/img/splash/default@2x.png') center center no-repeat;
    background-size: cover;
    width: 7.5rem;
    height: 14.22rem;
    position: relative;
}
.bgd .pass-box{
    position: absolute;
    top: 1.12rem;
    right: 0.48rem;
    width: 1.02rem;
    height: 0.26rem;;
    border-radius: 0.24rem;
    background:rgb(51, 51, 51);
    opacity: 0.5;
    text-align: center;
    display: flex;
    justify-content: center;
}
.bgd .pass-box span{
  display: block;
    font-size: 0.24rem;
    font-family: PingFang SC;
    line-height: 0.26rem;
    color: #FFFFFF;
}
.foot{
    margin: 0.24rem auto 0;
    text-align: center;
}
.foot img{
    width: 1rem;
    height: 1rem;
}
.foot span{
    display: block;
    font-size: 0.24rem;
    font-family: PingFang SC;
    line-height: 0.32rem;
    color: #333333;
}
</style>