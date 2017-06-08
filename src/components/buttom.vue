<template>
  <div class="bottom">
    <div class="q q1">
      <svg class="icon font-x" aria-hidden="true">
        <use xlink:href="#icon-shouyeshouye"></use>
      </svg>
      <div><router-link to="home">首页</router-link></div>
    </div>
    <div class="q q2">
      <svg class="icon font-x" aria-hidden="true">
        <use xlink:href="#icon-fenlei"></use>
      </svg>
      <div>分类</div>
    </div>
    <div class="q q3">
      <svg class="icon font-x" aria-hidden="true">
        <use xlink:href="#icon-gouwuche"></use>
      </svg>
      <div>购物车</div>
    </div>
    <div class="q q4">
      <svg class="icon font-x" aria-hidden="true">
        <use xlink:href="#icon-wode"></use>
      </svg>
      <div>我的</div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
  @import "../assets/styles/components/mixins.css";
  a{color: #222}
  .bottom{
    width: 100%;
    padding: 20px;
    position: fixed;
    display: flex;
    bottom: 0px;
    height: 100px;
    /*line-height: px;*/
    background: #fff;
    border-top:1px solid #cecece;
  }
  .q{
   text-align: center;
    flex-grow: 1;
  }
</style>
