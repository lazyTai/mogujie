<template>
  <div class="price-down">
    <div class="type-item">
      <div class="title1 c-g">大牌满减</div>
      <div class="title2 font-s">森马新品19元起</div>
      <img src="http://s3.mogucdn.com/mlcdn/c45406/170607_11c773kc1jle69lc83c103i95k602_200x200.jpg_200x9999.v1c7E.70.webp" alt="">
    </div>
    <div class="line"></div>
    <div class="type-item">
      <div class="title1 c-g">每日新品</div>
      <div class="title2 font-s">新品首发5折抢购</div>
      <img src="http://s11.mogucdn.com/mlcdn/c45406/170607_0ic1bdl8e65l2966jkldl2a3ilfek_180x180.jpg_200x9999.v1c7E.70.webp" alt="">
    </div>
    <div class="line"></div>
    <div class="type-item">
      <div class="title1 c-g">天天拼团</div>
      <div class="title2 font-s">每天四款1元好货</div>
      <img src="http://s3.mogucdn.com/mlcdn/c45406/170606_1a603b40la93k1j4kld6ck6k3h6ld_1000x1000.jpg_200x9999.v1c7E.70.webp" alt="">
    </div>
  </div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
    .c-g{
      color: $orange;
    }
  $wrapperheight:1.70rem;
  .price-down{
    position: relative;
    display: flex;
    /*padding-top: 10px;*/
    height: $wrapperheight;
  }
  .type-item{
    padding-top: 10px;
    flex-grow:1;
    background: #fff;
    text-align: center;
    .title1{

    }
    img {
      size: 1rem;
    }
  }
  .line{
    width: 2px;
    height: calc($wrapperheight*3/5);
    position: relative;
    top: 50%;
    margin-top: calc(-$wrapperheight*3/5/2);
    background: #eee;
  }
</style>
<script></script>
