<template>
    <div>
        <headder class="header"  page='商品评价'>
        </headder>
        <defaulta img="img/default/shop.png" text="还没有评价，这么懒真的好么" click= "去评价"/>
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
