<template>
  <div class="fastbuy">
    <swiper-module></swiper-module>
    <swiper1-module></swiper1-module>
    <content-module></content-module>
  </div>
</template>
<script>
  import swiperModule from "./swiper.vue"
  import swiper1Module from "./swiper1.vue";
  import contentModule from "./content.vue";
  export  default{
      mounted:function () {

      },
    components:{
      swiperModule,swiper1Module,contentModule
    }
  }
</script>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
</style>
