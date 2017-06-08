<template>
    <div class="loginModule">
      <div class="login">登录</div>
      <div class="download">下载</div>
      <!--<div class="qq-weibo">-->
        <!--<div class="qq font-x">-->
          <!--<svg class="icon font-x" aria-hidden="true">-->
            <!--<use xlink:href="#icon-87"></use>-->
          <!--</svg>-->
          <!--<b class="font-l">qq登录</b></div>-->
        <!--<div class="weibo font-l">-->
          <!--<svg class="icon font-x" aria-hidden="true">-->
            <!--<use xlink:href="#icon-weibo"></use>-->
          <!--</svg>-->
          <!--<b class="font-l">微博登录</b></div>-->
      <!--</div>-->
    </div>
</template>

<script></script>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .loginModule{
    margin-top: .7rem;
    /*position: relative;*/
    width: 100%;
    height: 5rem;
    background: url("http://s7.mogucdn.com/p1/160426/t0_ifqwgm3dgfrggnzshazdambqgyyde_750x750.gif") no-repeat;
    background-size:100% 100%;
  }
  $buttonWidth:4.00rem;
  $buttonHeight:.60rem;

  .login{
    color: #fff;
    position: relative;
    top:50%;
    left:50%;
    margin-left: -calc($buttonWidth/2);
    margin-top: -calc($buttonHeight/2);
    width: $buttonWidth;
    height: $buttonHeight;
    text-align: center;
    background: #ff5777;
    line-height: $buttonHeight;
  }
  .download{
    position: relative;
    top:60%;
    left:50%;
    margin-left: -calc($buttonWidth/2);
    margin-top: -calc($buttonHeight/2);
    width: $buttonWidth;
    height: $buttonHeight;
    text-align: center;
    background: #fff;
    line-height: $buttonHeight;
  }
  .qq-weibo{
    color: lightskyblue;
    position: relative;
    top:65%;
    left:0%;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
  }
</style>
