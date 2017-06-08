<template>
<div>
  <div class="特殊市场">
    <div class="title1">特殊市场</div>
    <div class="for4">
      <div class="item1 item">
        <img src="http://s16.mogucdn.com/p1/151105/upload_ie4wenjumvqwkzdbgqzdimbqgqyde_200x200.jpg" alt="">
        <div class="for4-title1 ">
          <router-link to="/markets" class="font-s">心水好货</router-link>
        </div>
        <div class="for4-title1-small font-ss">新款春装上阵</div>
      </div>
      <div class="item2 item">
        <img src="http://s16.mogucdn.com/p1/150923/upload_ieztkzjzgvrtsmlegmzdambqgyyde_200x200.jpg" alt="">
        <div class="for4-title1 font-s">
          <router-link to="/markets" class="font-s">运动</router-link></div>
        <div class="for4-title1-small font-ss">轻松购出好身材</div>
      </div>
      <div class="item3 item">
        <img src="http://s17.mogucdn.com/p1/150923/upload_ieytqmzzgrrtsmlegmzdambqmeyde_200x200.jpg" alt="">
        <div class="for4-title1 font-s">
          <router-link to="/markets" class="font-s">设计师</router-link></div>
        <div class="for4-title1-small  font-ss">设计师新款来袭</div>
      </div>
      <div class="item4 item">
        <img src="http://s7.mogucdn.com/p1/160125/fm_ie4wkyrrhezdkzrugyzdambqgqyde_200x200.png" alt="">
        <div class="for4-title1 font-s">
          <router-link to="/markets" class="font-s">充值</router-link></div>
        <div class="for4-title1-small font-ss">话费全国通用</div>
      </div>
    </div>
    <div class="for4-down">
      <img class="for4-1" src="../../assets/images/home/1.png"></img>
      <div class="for4-2">
        <img class="for4-2-1" src="http://s7.mogucdn.com/p1/160314/2p_ifrtamjrgjstoyrug4zdambqhayde_428x174.jpg"></img>
        <div class="for4-2-2">
          <img class="for4-2-2-1" src="http://s8.mogucdn.com/p1/160401/ec_ie4dindfmyydoodbg4zdambqgiyde_209x174.jpg"></img>
          <img class="for4-2-2-2" src="http://s7.mogucdn.com/p1/160404/h6_ifrgkyjwhftdontcg4zdambqmeyde_209x174.jpg"></img>
        </div>
      </div>
    </div>
    <all-shop></all-shop>
  </div>
</div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  a{color: #222}
  .title1{
    padding: 0.2rem;
  }
  .for4{
    justify-content: space-around;
    display: flex;
    .item{
      text-align: center;
      img{
        width: .9rem;
        height: .9rem;
      }
      .font-ss{
        color: #737373;
      }
    }
  }
  .for4-down{
    margin-top: 10px;
    width: 100%;
    height: 3rem;
    display: flex;
    .for4-1,.for4-2{
      flex-grow: 1;
    }
  }
  .for4-2-1,.for4-2-2{
    display: flex;
    height: 50%;
  }
  .for4-2-1{
    width: 100%;
  }
  .for4-2-2 img{
    width: 50%;
    height: calc(3/2)rem;
  }
</style>
<script>
  import allShop from './allShop.vue'
  export  default{
      components:{
        allShop
      }
  }
</script>
