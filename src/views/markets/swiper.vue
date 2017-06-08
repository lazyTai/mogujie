<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="http://s2.mogucdn.com/mlcdn/c45406/170603_0gk56ii3c0kjhe61615k5e5hah45g_750x390.jpg_700x9999.v1c7E.70.webp" alt="">
        </div>
        <div class="swiper-slide">
          <img src="http://s2.mogucdn.com/mlcdn/c45406/170605_8el5h484c7308i5g2ea74lg9j81j3_750x390.jpg_700x9999.v1c7E.70.webp" alt="">
        </div>
        <div class="swiper-slide">
          <img src="http://s11.mogucdn.com/mlcdn/c45406/170603_29hcl9k2bgfa7f1c6c5h2gla37bee_750x390.jpg_700x9999.v1c7E.70.webp" alt="">
        </div>
        <div class="swiper-slide">
          <img src="http://s10.mogucdn.com/mlcdn/c45406/170602_02ddfh0g19fe5bc9520258gfb2gi4_750x390.jpg_700x9999.v1c7E.70.webp" alt="">
        </div>
      </div>

      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .swiper-wrapper{
    width: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  .swiper-slide {
    width: 100%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
<script>
  export default{
      mounted:function () {
        this.$nextTick(function () {
          var swiper = new Swiper('.swiper-container',{
            pagination: '.swiper-pagination',
            paginationClickable: true
          });
        })
      }
  }
</script>
