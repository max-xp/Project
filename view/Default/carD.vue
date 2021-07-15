<template>
    <div>
        <headder class="header"  page='购物车'>
            <span slot="copyreader" class="text">编辑</span>
        </headder>
        <defaulta img="img/default/car.png" text="一件商品都没了，进宫溜达溜达~" click= "逛一逛"/>
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