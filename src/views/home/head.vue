<template>
<div class="header">
  <div class="left" @click="showMenu">
    <svg class="icon font-x" aria-hidden="true">
      <use xlink:href="#icon-hanbao"></use>
    </svg>
  </div>
  <div class="m">
    <div class="m-left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fangdajing1"></use>
      </svg>
    </div>
    <input type="text" class="">
    <div class="m-right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-enter"></use>
      </svg>
    </div>
  </div>
  <div class="right">
    <svg class="icon  font-x" aria-hidden="true">
      <use xlink:href="#icon-gouwuche"></use>
    </svg>
  </div>
</div>
</template>
<script>
  export  default{
      methods:{
        showMenu:function () {
            this.$parent.showMark = true;
            this.$parent.menu.show=true
          }
      }
  }
</script>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .header{
    top:0;
    background: #eeeeee;
    height:.7rem;;
    position: fixed;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eee;
  }
  .left,.right{
    color: #b1b1b1;
    text-align: center;
    flex-grow: 1;
    line-height: .8rem;
  }
  .m{
    line-height: .45rem;
    flex-grow:3;
    position: relative;
    text-align: center;
    align-self: center;/*垂直*/
    display: flex;
    input{
      text-indent: 45px;
      width: 100%;
      height: .45rem;
      border: none;
    }
    .m-left{
      color: #b1b1b1;
      left: .09rem;
      top:-.03rem;
      position: absolute;
    }
    .m-right{
      color: #b1b1b1;
      right: .1rem;
      top:-.03rem;
      position: absolute;
    }
  }
</style>
