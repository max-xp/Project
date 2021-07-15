<template>
  <div class="header">
    <ul>
      <li>
        <span>全部</span>
      </li>
      <li>
        <span>待付款</span>
      </li>
      <li>
        <span>已付款</span>
      </li>
      <li>
        <span>待收货</span>
      </li>
      <li>
        <span>待评价</span>
      </li>
      <li>
        <span>退货售后</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "indexnav",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.header {
  width: 7.5rem;
  height: 0.96rem;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.02);
}
.header ul{
  padding-top: 0.26rem  ;
  width: 7.08rem;
  margin-left:0.24rem;
  display: flex;
  justify-content: space-between;
}
.header ul li span{
  
font-size: 0.28rem;
font-family: Source Han Serif CN;
font-weight: bold;
display: block;
color: #333333;
}
</style>