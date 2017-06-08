<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="http://s2.mogucdn.com/mlcdn/c45406/170607_3ib629190l3df53b9k4cb253gf9j7_750x250.jpg_700x9999.v1c7E.70.webp" alt="">
      </div>
      <div class="swiper-slide">
        <img src="http://s10.mogucdn.com/mlcdn/c45406/170606_7gglfkc15gfbh162j8056edjk1cbj_750x250.jpg_700x9999.v1c7E.70.webp" alt="">
      </div>
      <div class="swiper-slide">
        <img src="http://s10.mogucdn.com/mlcdn/c45406/170508_406h34211gj40ibacai07d829gl82_750x250.jpg_700x9999.v1c7E.70.webp" alt="">
      </div>
    </div>
  </div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .swiper-container{
    width: 100%;
    height: 200px;
  }
  .swiper-slide{
    width:100%;
    height: 100%;
  img{width: 100%;height: 100%}
  }
</style>
<script>
  export  default{
    mounted:function () {
      var swiper = new Swiper('.swiper-container');
    }
  }
</script>
