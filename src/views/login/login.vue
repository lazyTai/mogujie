<template>
  <div class="login">
    <header>
      <a class="header-left" href="javascript:void(history.back());">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </a>
      <div class="header-m font"><b>登录</b></div>
      <div class="header-right font">
        <router-link to="register">立刻注册</router-link >
      </div>
    </header>

    <div class="qq-weibo-wrapper">
      <div class="qq-weibo">
        <img class="qq" src="http://s16.mogucdn.com/p1/150803/upload_ieztmnzwmztdsoddgizdambqgyyde_210x210.png" alt="">
        <img class="weibo"  src="http://s18.mogucdn.com/p1/150803/upload_ie2gcmbqgaygcoddgizdambqgiyde_210x210.png " alt="">
      </div>
    </div>
    <div class="login">
      <div class="title1">
        <div class="title1-1"></div>
        <div class="title1-2">蘑菇街账号登录</div>
        <div class="title1-3"></div>
      </div>
      <div class="form">
        <div  class="name-input">
          <input type="text">
        </div>
        <div  class="password-input">
          <input type="text">
        </div>
        <div class="login-button">
          <button>登录</button>
        </div>
      </div>
      <div class="title2">
        <div class="title2-1">全球手机登录</div>
        <div class="title2-3"></div>
        <div class="title2-2">忘记密码?</div>
      </div>
    </div>

    <div class="title3">
      <div class="title3-1 font-s">©2015 Mogujie.com 杭州卷瓜网络有限公司</div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  a{
    color: #5e5e5e;
  }
  .title3{
    text-align: center;
    position: relative;
    border-top:2px solid #eee;
    padding-top: 30px;
  }
  .title2{
    display: flex;
    justify-content: space-around;
    line-height: 45px;
    height: 45px;
    margin-bottom: 200px;
  }
  .title2-3{
    height: 80%;width: 2px;background: #cecece;
  }
  .title2-1{
    position: relative;
  }
  .login-button{
    padding: .15rem;
    width: 100%;
    button{
      width: 100%;
      line-height: .60rem;
      background: pink;
      border-radius: 5px;
      color: #fff;
      border: none;
      text-align: center;
    }
  }
  .name-input{
    padding: .15rem;
    input{
      width: 100%;
      height: .70rem;
      background: #eee;
      border: none;
      text-indent: 30px;
      line-height: .70rem;
    }
  }
  .password-input{
    padding: .15rem;
    input{
       width: 100%;
       height: .70rem;
       background: #eee;
       border: none;
       text-indent: 30px;
       line-height: .70rem;
     }
  }
  .form{
    width: 100%;
    padding: 10px;
    text-align: center;
  }
  .title1{
    text-align: center;
    position: relative;
    display: flex;
    margin: 20px .30rem;
  }
  .title1-2{
    padding: 0 .30rem;
  }
  .title1-1,.title1-3{
    position: relative;
    flex-grow: 1;
    height: 2px;
    align-self: flex-end;
    background: #eee;
  }
  .qq-weibo-wrapper{
    position: relative;
    width: 100%;
    height: 3.50rem;
  }
  .qq-weibo{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }
  .qq,.weibo{
    align-self: center;
    size:2rem ;
  }
  header{
    display: flex;
    line-height: .60rem;
    background: #eee;
    border-bottom: 1px solid #b7b7b7;
  }
  .header-m{
    flex-grow: 1;
    text-align: center;
  }
  .header-left{
    color: #a5a5a5;
    padding-left: 10px;
  }
  .header-right{
    color: #a5a5a5;
    padding-right: 10px;
  }
</style>
