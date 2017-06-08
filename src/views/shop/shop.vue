<template>
  <div class="shop">
    <div class="r1">
      <div class="r1-1">
        <router-link to="/home">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-back"></use>
          </svg>
        </router-link>
      </div>
      <div class="r1-2">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
      </div>
    </div>
    <div class="img">
      <img src="http://s11.mogucdn.com/p2/170312/40898975_2ejg6hf91gf447998ha55if8gidf3_640x960.jpg_468x468.jpg" alt="">
    </div>
    <div class="r2">
      <div class="r2-1">
        【送盒子】反光太阳镜潮复古金属镂空圆形墨镜女复古大框圆脸眼镜
      </div>
      <div class="r2-2 c-g">个性圆形镂空设计</div>
    </div>
    <div class="price">
      <span class="font-x">¥25.20</span>
      <span><del>¥36.00</del></span>
      <span class="tabage">7折</span>
    </div>
    <div class="send">
      <span class="c-g">全国包邮</span>
      <span class="width"></span>
      <span class="c-g">销量 420</span>
    </div>

    <!-- 促销信息 -->
    <div class="sald">
      <span>满59元减5元</span>
      <div>
        <span>更多</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-right"></use>
        </svg>
      </div>
    </div>

    <!-- 商品详情-评价列表 -->
    <infor-module></infor-module>

    <!-- 商品详情-店铺 -->
    <store-module></store-module>

    <!--tab-->
    <tab-module></tab-module>
    <!--router-view-->

    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .shop{
    background: #eee;
  }
  .r1{
    background: #fff;
  }
  .sald{
    margin: 20px 0px;
    background: #fff;
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 10px;
    line-height: 80px;
  }
  .r2{
    background: #fff;
    padding: 10px 30px;
    text-align: center;
  }
  .send{
    background: #fff;
    padding: 10px 30px;
    text-align: center;
    .width{
     border-right: 1px solid $deepgrey;
      padding: 5px;
      margin-right: 10px;
    }
  }
  .price{
    background: #fff;
    padding: 10px 30px;
    text-align: center;
    .tabage{
      padding: 5px;
      color: #fff;
      border-radius: 5px;
      background: darkred;
    }
  }
  .r2-1{

  }
  img{
    width: 100%;
    height: 800px;
  }
  .r1-1{
    position: absolute;
    size: 100px;
    opacity: 0.5;
    border-radius: 50%;
    padding: 20px;
    background: #5e5e5e;
    .icon{
      fill:#fff;
      size: 50px;
    }
  }
  .r1-2{
    position: absolute;
    right: 10px;
    size: 100px;
    opacity: 0.5;
    border-radius: 50%;
    padding: 20px;
    background: #5e5e5e;
  .icon{
    fill:#fff;
    size: 50px;
  }
  }
</style>
<script>
  import inforModule from "./infor.vue";
  import storeModule from './store.vue';
  import tabModule from './tab.vue'
  export  default{
      components:{
        inforModule,storeModule,tabModule
      },
    mounted:function () {
      this.$router.push('/shop/show')
    }
  }
</script>
