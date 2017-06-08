<template>
  <transition name="slide-fade">
    <div class="leftMenu" v-show="show">
      <div class="close" @click="closeMenu">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-guanbi"></use>
        </svg>
      </div>
      <div class="listContent">
        <div class="item" v-for="item in lists">
          <router-link to="/markets">{{item}}</router-link>
        </div>
      </div>
      <div class="login">
        <router-link to="login">亲登录</router-link>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-touxiang"></use>
        </svg>
      </div>
    </div>
  </transition>
</template>
<script>
  export  default{
      props:['show',"list"],
      data(){
            return {
                lists:['首页','上衣','裤子','裙子','内衣','女鞋']
            }
      },
      methods:{
        closeMenu:function () {
          this.$parent.showMark = false;
          this.$parent.menu.show=false
        }
      }
  }
</script>
<style scoped>
  a{
    color:pink;
  }
  .leftMenu{
    z-index: 2001;
    top:0;
    position: fixed;
    background:#fff;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .close{
    width: 100%;
   text-align: right;
    padding:5px 5px 0 0;
    color: #c4c4c4;
  }
  .listContent{
    flex-grow: 1;
    border-bottom:1px solid #eee;
    .item{
      display: inline-block;
      text-align: center;
      padding: .05rem;
      width: 50%;
    }
  }
  .login{
    height: 0.75rem;
    line-height: 0.75rem;
    text-indent: .20rem;
    color: #ff6b9b;
  }
</style>
