<template>
  <div class="register">
    <header>
      <a class="header-left" href="javascript:void(history.back());">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </a>
      <div class="header-m font"><b>注册</b></div>
      <div class="header-right font">
        <router-link to="login">已有账号</router-link>
      </div>
    </header>

    <div class="q1">
      <div class="q1-1">
        <div class="q1-1-1">
          <input type="text" placeholder="国家与地区">
        </div>
        <div class="q1-1-2">中国</div>
        <div class="q1-1-3">
          <svg class="icon" aria-hidden="true" style="fill: #c0c0c0">
            <use xlink:href="#icon-right"></use>
          </svg>
        </div>
      </div>
      <div class="q1-2">
        <div class="q1-2-1">+86</div>
        <div class="q1-2-3"></div>
        <div class="q1-2-2">
          <input type="text" placeholder="手机号">
        </div>
      </div>
    </div>


    <div class="q2">
      <div class="q2-1">
        <div class="q2-1-1">翻转至正确方向</div>
        <div class="q2-1-2">换一组</div>
      </div>
      <div class="q2-2">
        <img src="./1.png"/>
        <img src="./2.png"/>
        <img src="./3.png"/>
        <img src="./4.png"/>
      </div>
    </div>
    <div class="q3">
      <div class="q3-1">
        <input type="text" placeholder="请输入短信验证码">
      </div>
      <div class="q3-2"></div>
      <div class="q3-3">获取验证码</div>
    </div>
    <div class="q4">
      <button>立即注册</button>
    </div>
    <div class="q5 font-s"
    style="padding: 20px"
    >* 注册代表同意《蘑菇街网络服务使用协议》</div>
  </div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  a{
    color: #5e5e5e;
  }
  .q4{
    margin-top: 30px;
    width: 100%;
    padding: 0 30px;
    text-align: center;
    button{
      background: pink;
      color: #fff;
      border:none;
      width: 100%;
      height: 70px;
    }
  }
  .q3-1{
    flex-grow:1;
    input{
      height: 90px;
      border: none;
    }
  }
  .q3-3{
    padding:0 10px;
  }
  .q3-2{
    width: 1px;
    background: #bfbfbf;
    height: 100px;
  }
  .q3{
    display: flex;
    height: 100px;
    line-height: 100px;
    margin: 0 20px;
    border-bottom: 1px solid #bfbfbf;
  }
  .q2-2{
    justify-content: space-around;
    display:flex;
    img {
      size:120px
    }
  }
  .q2-1{
    display: flex;
    line-height: 80px;
    height: 80px;
  }
  .q2-1-1{
    flex-grow: 1;
    text-indent: 20px;
  }
  .q2-1-2{
    text-align: right;padding-right: 20px;color: pink;
  }
  .q1-2{
    display: flex;
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid #bfbfbf;
  }
  .q1-2-3{
    height: 100px;
    width: 1px;
    background: #bfbfbf;
  }
  .q1-2-1{
    width: 100px;
    text-align: center;
  }
  .q1-2-2{
    grow-flex:1;
    input{
      border: none;
      width: 100%;
      text-indent: 20px;
      height: 90px;
    }
  }
  .q1{
    padding: 0 10px;
  }
  .q1-1{
    display: flex;
    height: 100px;
    line-height: 100px;
    position: relative;
    border-bottom: 1px solid #bfbfbf;
  }
  .q1-1-1{
    flex-grow: 1;
    input{
      height: 90px;
      border:none;width: 100%;
      text-indent: 30px;
    }
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
<script></script>
