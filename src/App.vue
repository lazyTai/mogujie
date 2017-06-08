<template>
  <div id="app">
    <loading :show="showLoaing"></loading>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import "../src/assets/font/iconfont.js";
  import "../src/components/tai/tai.js"
  import loading from './components/loading.vue';
//  require("./assets/styles/base.css")
  require('./assets/viewport.js')
  export default {
    name: 'app',
    data(){
        return {
          showLoaing:true
        }
    },
    components:{
        loading
    },
    mounted:function () {
      this.showLoaing=false;
//      this.$router.push('home')
    }
}
</script>

<style>
  @reset-global mobile;
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  #app,body,html{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(-500px);
    opacity: 0;
  }
</style>
