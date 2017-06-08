<template>
<div class="tab">
  <q1>
    <router-link to="show" class="w1">图文详情</router-link>
   <router-link to="can"  class="w1">商品参数</router-link>
   <router-link to="hot"  class="w1">热卖推荐</router-link>
  </q1>
</div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
.tab{
  .q1{
    margin-top: 20px;
    background: #fff;
    display:flex;
    .w1{
      flex: 1;
      height: 60px;
      line-height: 60px;
      text-align: center;
      align-self: center;
      color: $deepgrey;
    }
  .w1.router-link-active{
    border-bottom: 3px solid pink;
  }
  }
}
</style>
<script>
export  default{
    data(){
        return {
            active:'1'
        }
    }
}
</script>
