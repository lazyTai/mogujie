<template>
  <div class="caoshihui">
    <div class="header">超实惠-促销直达</div>
    <div class="caoshihui-1">
      <div class="caoshihui-1-1">
        <b class="title1"> 女神的新装 </b>
        <div class="title2 c-p">5折好货限时抢</div>
        <img src="http://s11.mogucdn.com/mlcdn/c45406/170607_6c1e0ekhkik6aae48d1d2h0k12fab_204x200.jpg_180x180.v1cAC.70.webp" alt="">
      </div>
      <div class="caoshihui-1-2">
        <div class="caoshihui-1-2-1">
          <div class="text">
            <b class="title1">  完美新裙  </b>
            <div class="title2 c-p">3折限量秒</div>
          </div>
          <div class="img">
            <img src="https://s11.mogucdn.com/mlcdn/c45406/170605_4j82addihleiha9lkch899f2ihc1e_180x180.jpg" alt="">
          </div>
        </div>
        <div class="caoshihui-1-2-2">
          <div class="text">
            <b class="title1">   “裤”爽一夏   </b>
            <div class="title2 c-p">最新潮裤7折秒</div>
          </div>
          <div class="img">
            <img src="https://s2.mogucdn.com/mlcdn/c45406/170605_83jj8d16003529fckia37e759cafl_180x180.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="caoshihui-2">
      <div class="caoshihui-2-1">
        <div class="text">
          <b class="title1">    热销上装    </b>
          <div class="title2 c-p">9.9元疯狂大促</div>
        </div>
        <div class="img">
          <img src="http://s11.mogucdn.com/mlcdn/c45406/170605_2g17d664ja4kf19246h9elff8g7fd_180x180.jpg_160x160.v1cAC.70.webp" alt="">
        </div>
      </div>
      <div class="caoshihui-2-1">
        <div class="text">
          <b class="title1">    夏季美鞋    </b>
          <div class="title2 c-p">低至49元限时购</div>
        </div>
        <div class="img">
          <img src="http://s2.mogucdn.com/mlcdn/c45406/170605_1f516kkj9ca7dac94d43hchkl325f_180x180.jpg_160x160.v1cAC.70.webp" alt="">
        </div>
      </div>
      <div class="caoshihui-2-1">
        <div class="text">
          <b class="title1">    人气美妆    </b>
          <div class="title2 c-p">热销单品2折起</div>
        </div>
        <div class="img">
          <img src="http://s2.mogucdn.com/mlcdn/c45406/170605_562b43j1b5kk0dkg56a2ajkgkfhlj_180x180.jpg_160x160.v1cAC.70.webp" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .caoshihui-2{
    display: flex;
    .caoshihui-2-1{flex-grow: 1;text-align: center;padding-top: 20px}
  .caoshihui-2-1:not(:last-child){border-right:1px solid $deepgrey; }
  }
  .c-p{
    color: pink;
  }
  .caoshihui{
    margin-top: 20px;
    background: #fff;
  }
  .header{
    height: 60px;
    line-height: 60px;
    padding: 0 30px;
    border-bottom: 1px solid $deepgrey;
  }
  .caoshihui-1{
    display: flex;
    height: 300px;
    background: #fff;
  }
  .caoshihui-1-1{
    flex-grow: 1;
    padding-top: 40px;
    border-right: 1px solid $deepgrey;
    text-align: center;
  }
  .caoshihui-1-2{
    /*padding: 30px;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    box-sizing: content-box;
    /*flex-grow: 1;*/
  }
  .caoshihui-1-2-1,.caoshihui-1-2-2{
    flex: 1;
    align-self: center;
    display: flex;
    .text{
      flex-grow: 1;
      padding: 30px 0 0 30px;
    }
    .img{
      position: relative;
      right: 0;
      padding: 3px;
      size: 130px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .caoshihui-1-2-1{border-bottom: 1px solid $deepgrey}
  .caoshihui-1{border-bottom: 1px solid $deepgrey}
</style>
