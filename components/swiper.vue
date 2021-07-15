<template>
  <div class="wrapper">
    <swiper class="mySwiper" ref="mySwiper" v-bind:options="swiperOptions">
      <swiper-slide v-for="(item, idx) in nav" :key="idx" class="bag-img">
        <!-- <img
          :src='item.img'
          alt=""
        /> -->
        <img src="../assets/img/newProduct/new products of the forbidden city banner_image@2x.png" alt="">
        
      </swiper-slide>
        <div class="swiper-pagination-bullet swiper-pagination-bullet-active" slot="pagination"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      
      
        
        <!-- <slot name="pagination" class="swiper-pagination-bullet swiper-pagination-bullet-active"></slot> -->
        
    </swiper>
  </div>
</template>
<script lang="ts">
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      nav: [
        {
          img: "/img/new products of the forbidden city banner_image@2x.eaaa8df6.png",
        },
        {
          img: "/img/new products of the forbidden city banner_image@2x.eaaa8df6.png",
        },
        {
          img: "/img/new products of the forbidden city banner_image@2x.eaaa8df6.png",
        },
      ],
      swiperOptions: {
        loop: true,
        speed: 2000,
        // autoplay: {
        //   delay: 3000,

        //   stopOnLastSlide: false,
        //   disableOnInteraction: false,
        // },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
      },
    };
  },
};
</script>

<style scoped>
.mySwiper{
    
    height: 4.5rem;
}
.bag-img{
    
    height: 4.5rem;
}
.bag-img img{
    width: 7.5rem;
    height: 4.5rem;
}
.swiper-slide {
  height: 150px;
}
/deep/.swiper-pagination-bullet{
    background: url('../assets/img/newProduct/banner_image_page indicator_nor@2x.png') center center no-repeat;
    background-size: cover;
    width: 0.5rem;
    height: 0.18rem;
}
/deep/.swiper-pagination-bullet-active{
    background: url('../assets/img/newProduct/banner_image_page indicator_pre@2x.png') center center no-repeat;
    background-size: cover;
    width: 0.5rem;
    height: 0.18rem;
}
</style>