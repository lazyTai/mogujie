<template>
  <div class="swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-content">
          <div class="swiper-item" :class="['swiper-item'+(index+1),item.state==1?'swiper-item-no':'']" v-for="(item,index) in lists"
          @click.stop="clickPink(index)"
          >
            <p>{{item.name}}</p>
            <p class="font-s">{{item.state==1?"":item.state}}</p>
        </div>
      </div>
    </div>
    <div class="mid"></div>
  </div>
</template>
<script>
  export  default{
      data(){
          return {
              lists: [
                    /*昨天*/
                    {name:'昨天',state:'1'}, {name:'14:00',state:'已开抢'}, {name:'16:00',state:'已开抢'}, {name:'19:00',state:'已开抢'}, {name:'21:00',state:'已开抢'},
                    {name:'22:00',state:'已开抢'},  {name:'23:00',state:'已开抢'},
                    /*今天*/
                    {name:'今天',state:'1'},{name:'00:00',state:'已开抢'}, {name:'09:00',state:'已开抢'}, {name:'10:00',state:'已开抢'}, {name:'11:00',state:'已开抢'},
                    {name:'12:00',state:'已开抢'},  {name:'13:00',state:'已开抢'},{name:'14:00',state:'已开抢'},{name:'15:00',state:'已开抢'},
                    {name:'16:00',state:'已开抢'},  {name:'19:00',state:'已开抢'},{name:'20:00',state:'已开抢'},{name:'21:00',state:'已开抢'},
                    {name:'22:00',state:'已开抢'},  {name:'23:00',state:'已开抢'},
                    /*明天*/
                    {name:'明天',state:'1'},{name:'00:00',state:'即将开抢'},{name:'09:00',state:'即将开抢'},{name:'10:00',state:'即将开抢'},{name:'11:00',state:'即将开抢'},
                    {name:'12:00',state:'即将开抢'}
                  ],
          }
      },
    methods:{
      clickPink:function (e) {
//        debugger
      }
    },
      mounted:function () {
          function touchmmove(e) {
              console.log(e.touches[0].pageX)
          }
          function touchstart(e) {
            console.log("start==>"+e.touches[0].pageX)
          }
          var allWidth=0;
          $.each(this.lists,function (index) {
            allWidth+=$(".swiper-item"+index).width()
          })
          $('.swiper-content').width(allWidth)
//          $('.swiper1-wrapper')[0].addEventListener('touchmove',touchmmove)
//          $('.swiper1-wrapper')[0].addEventListener('touchstart',touchstart)
      }
  }
</script>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .mid{
    position: absolute;
    width: 100px;
    height: 100px;
    top: 200px;
    left: 50%;
    margin-left: calc(-100px/2);
    opacity: 0.5;
    background: pink;
  }

  .swiper-wrapper{
    width: 100%;
    position: relative;
    height: 100px;
    background: #222;
    color: #fffdef;
    overflow-x:scroll;
  }
  .swiper-content{
    display: flex;
  }
  .swiper-item{
    height: 120px;
    line-height:45px;
    p{
      width: 100px;
      text-align: center;
    }
  }
  .swiper-item-no{
    background: #555555;
    color: #fff;
  }


</style>
