<template>
    <div>
        <headder class="header"  page='无信号'>
        </headder>
        <defaulta img="img/default/signa.png" text="宫里网络不好了" click= "刷新"/>
    </div>
</template>

<script>
import headder from "../../components/header.vue";
import defaulta from "../../components/default.vue";

export default {
  name: "afflatus",
  components: {
    headder,
    defaulta
  },
};
</script>

<style scoped>
.header{
    position: relative;
}
.text{
    position: absolute;
    display: block;
font-size: 0.24rem;
font-family: PingFang SC;
color: #FFFCFC;
bottom: 0.34rem;
right: 0.24rem;
}
</style>