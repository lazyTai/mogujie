<template>
  <header>
    <div class="header-l">
      <svg class="icon font-l" aria-hidden="true">
        <use xlink:href="#icon-chat"></use>
      </svg>
    </div>
    <div class="header-m">
      <svg class="icon font icon-fangdajing1" aria-hidden="true">
        <use xlink:href="#icon-fangdajing1"></use>
      </svg>
      <input type="text">
    </div>
    <div class="header-r">
      <svg class="icon font-l" aria-hidden="true">
        <use xlink:href="#icon-gouwuche"></use>
      </svg>
    </div>
  </header>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  $deepgrey:#7a7a7a;
  header{
    display: flex;
    line-height: 60px;
    color: $deepgrey;
    background: #fff;
    border-bottom: 1px solid $deepgrey;
  }
  .header-l,.header-r{
    padding: 5px 15px;
  }
  .header-m{
    display: flex;
    text-align: center;
    justify-content: center;
    align-self: center;
    flex-grow: 1;
    .icon-fangdajing1{
      position: relative;
      top:10px;
      left: 40px;
    }
    input{
      border: none;
      background: #eee;
      width: 100%;
      height: 45px;
      text-indent: 50px;
    }
  }
</style>
<script></script>
