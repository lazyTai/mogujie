<template>
  <div class="markets">
    <header-module></header-module>
    <!--swiper-->
    <swiper-module></swiper-module>
    <!--大减价-->
    <price-down></price-down>
    <!--倒计时-->
    <qian-module></qian-module>
    <!--大优惠-->
    <caoshihui-module></caoshihui-module>
    <!--热门市场-->
    <hot-module></hot-module>
    <!--猜你喜欢-->
    <like-module></like-module>
    <!--底部-->
    <buttom-module></buttom-module>
  </div>
</template>
<style scoped>
  .markets{
    background: #eee;
  }
</style>
<script>
  import headerModule from './header.vue'
  import swiperModule from './swiper.vue'
  import priceDown from "./priceDown.vue";
  import qianModule from "./qianModule.vue";
  import caoshihuiModule from "./caoshihui.vue";
  import hotModule from "./hot.vue"
  import likeModule from "./like.vue"
  import buttomModule from "../../components/buttom.vue"
  export  default{
      components:{
          headerModule,swiperModule,priceDown,qianModule,caoshihuiModule,hotModule,likeModule,buttomModule
      }
  }
</script>
