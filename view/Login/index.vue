<template>
  <div>
    <div class="header">
      <img src="../../assets/img/login/sign in_image_logo@2x.png" class="logo" alt="" />
      <span>故 宫 文 创</span>
    </div>
    <div class="login">
      <div class="number">
        <span class="prefix">+86</span>
        <input type="text" placeholder="手机号" />
        <span class="separator"></span>
        <span class="code">获取验证码</span>
      </div>
      <img
        src="../../assets/img/login/dividing line_image_line@2x(1).png"
        class="line"
        alt=""
      />
      <div class="auth-code">
        <input type="text" placeholder="请输入验证码" />
      </div>
      <img
        src="../../assets/img/login/dividing line_image_line@2x(1).png"
        class="line"
        alt=""
      />
      <form action="">
        <input type="checkbox" class="checkbox" /><span class="checktext"
          >我已阅读同意用户协议</span
        >
      </form>
      <div class="login-btn">
        <span>登录</span>
      </div>
    </div>
    <div class="footer">
      <div class="footer-head">
        <img
          src="../../assets/img/login/dividing line_image_line@2x(2).png"
          class="line-s"
          alt=""
        />
        <span>第三方登录</span>
        <img
          src="../../assets/img/login/dividing line_image_line@2x(2).png"
          class="line-s"
          alt=""
        />
      </div>
      <div class="icon-box">
        <img
          src="../../assets/img/login/sign in_icon_wechat_default@2x.png"
          class="wc-icon"
          alt=""
        />
        <img src="../../assets/img/login/sign in _icon_qq@2x.png" class="qq-icon" alt="" />
        <img
          src="../../assets/img/login/sign in _icon_micro-blog@2x.png"
          class="blog-icon"
          alt=""
        />
        <!-- <img src="img/login/Alert view_image_tab@2x.png" class="tab-icon" alt=""> -->
        <span class="rectangle"></span>
        <span class="triangle"></span>
        <span class="icon-text">上次登录</span>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.header{
    width: 7.5rem;
    height: 4.4rem;
    background: url('../../assets/img/login/nav\ bar_image_bg@2x.png') center center no-repeat;
    background-size: cover;
    position: relative;
}
.header .logo{
    position: absolute;
    width: 1.08rem;
    height: 1.08rem;
    top: 1.66rem;
    left: 3.2rem;
}
.header span{
    position: absolute;
    top: 3.04rem;
    left: 3.06rem;
    font-size: 0.28rem;
    font-family: 长城大标宋体;
    line-height: 0.38;
    color: #FFEBB9;
}
.login{
    width: 5.9rem;
    margin: 1.28rem auto 0;
}
.login .number{
    display: flex;

}
.login .number .prefix{
    font-size: 0.28rem;
    font-family: PingFang SC;
    color: #B3B3B3;
    line-height: 0.38rem;
}
.login .number input{
    border: none;
    font-size: 0.28rem;
    font-family: PingFang SC;
    line-height: 0.38rem;
    color: #CCCCCC;
    margin-left: 0.4rem;
}
.login .number .separator{
    display: block;
    width: 0px;
    height: 0.32rem;
    border: 0.01rem solid #E6E6E6;
    line-height: 0.38rem;
}
.login .number .code{
    font-size: 0.28rem;
    font-family: PingFang SC;
    line-height: 0.38rem;
    color: #333333;
    display: block;
    margin-left: 0.28rem;
}
.login .line{
    width: 5.9rem;
    height: 0.04rem;
}
.login .auth-code{
    margin-top: 0.76rem;
    border: none;
}
.login .auth-code input{
    border: none;
    font-size: 0.28rem;
    font-family: PingFang SC;
    line-height: 0.38rem;
    color: #CCCCCC;
}
form{
    margin-top: 0.48rem;
    display: flex;
}
form .checkbox{
    width: 0.32rem;
    height: 0.32rem;
    background-color: black;
}
form .checktext{
    display: block;
    font-size: 0.24rem;
    font-family: PingFang SC;
    line-height: 0.32rem;
    color: #CCCCCC;
    margin-left: 0.2rem;
}
.login-btn{
    width: 5.9rem;
    height: 0.76rem;
    background: #C91328;
    margin-top: 0.4rem;
    text-align: center;
}
.login-btn span{
    display: block;
    font-size: 0.32rem;
    font-family: PingFang SC;
    line-height: 0.76rem;
    color: #FFFCFC;
}
.footer{
    margin-top: 3.6rem;
}
.footer .footer-head{
    text-align: center;
}
.footer .footer-head .line-s{
    width: 1.2rem;
    height: 0.02rem;
}
.footer .footer-head span{
    margin: 0 0.24rem;
    font-size: 0.24rem;
    font-family: PingFang SC;
    line-height: 0.32rem;
    color: #999999;
}
.footer .footer-head .line-s,.footer .footer-head span{
    vertical-align: middle;
}
.icon-box{
    width: 5.14rem;
    margin: 0.48rem auto 0;
    display: flex;
    justify-content: space-between;
    position: relative;
}
.icon-box img{
    width: 0.96rem;
    height: 0.96rem;
}
.icon-box .tab-icon{
    width: 0.8rem;
    height: 0.28rem;
    position: absolute;
    top: -0.2rem;
    left: 0.1rem;
}
.icon-box .icon-text{
    font-size: 0.24rem;
    font-family: PingFang SC;
    line-height: 0.22rem;
    color: #FFFCFC;
    position: absolute;
    top: -0.26rem;
    left: 0px;

}
.rectangle{
    position: absolute;
    top: -0.28rem;
    left: 0px;
    background-color: red;
    width: 0.96rem;
    height: 0.28rem;
}
.triangle{
    position: absolute;
    top: 0px;
    left: 0.4rem;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 12px solid red;
}
</style>