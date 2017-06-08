<style  scoped>
  @import "../../assets/styles/modules/home/views.css";
  @import "../../assets/styles/components/mixins.css";
</style>
<template>
  <div style="height: 100%">
    <ui-mark :show="showMark"></ui-mark>
    <head-module></head-module>
    <!--左侧菜单组件-->
    <menuLeft :show="menu.show" :list="menu.list"></menuLeft>
    <!--首页登陆组件-->
    <login-module ></login-module>
    <!--中心数据组件-->
    <views-module></views-module>
    <!--地产下载-->
    <bottom-module></bottom-module>
  </div>
</template>
<script>
  import headModule from './head.vue';
  import uiMark from './mark.vue';
  import menuLeft from './menuLeft.vue'
  import loginModule from './loginModule.vue'
  import viewsModule from "./viewsModule.vue"
  import bottomModule from './bottomModule.vue'
  export default {
      data(){
          return {
              showMark:false,
            menu:{
              show:false,list:[]
            }

          }
      },
      components:{
        headModule,uiMark,menuLeft,loginModule,viewsModule,bottomModule
      }
  }
</script>

