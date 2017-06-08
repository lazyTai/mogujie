<template>
<div>
  <div class="title1-1">全部商品</div>
  <div class="for6">
    <div class="for6-item">
      <img src="http://s18.mogucdn.com/p1/160304/upload_ifrwemrrgi4donzrg4zdambqhayde_120x120.png" alt="">
      <div class="for4-title1 font-s">上衣</div>
      <div class="for4-title1-small font-ss">底价新品壁咚</div>
    </div>
    <div class="for6-item">
      <img src="http://s16.mogucdn.com/p1/160301/upload_ifrdonddgnswgnzqg4zdambqmeyde_120x120.jpg" alt="">
      <div class="for4-title1 font-s">裤子</div>
      <div class="for4-title1-small font-ss">春季最热卖</div>
    </div>
    <div class="for6-item">
      <img src="http://s8.mogucdn.com/p1/160229/er_ie4tambxmq2wkmzqg4zdambqgqyde_120x120.jpg" alt="">
      <div class="for4-title1 font-s">裙子</div>
      <div class="for4-title1-small font-ss">焕新你的衣橱</div>
    </div>
    <div class="for6-item">
      <img src="http://s8.mogucdn.com/p1/160215/7m_ifrdkyrvhaztgylcgyzdambqmeyde_120x120.jpg" alt="">
      <div class="for4-title1 font-s">内衣</div>
      <div class="for4-title1-small font-ss">焕新由内而外</div>
    </div>
    <div class="for6-item">
      <img src="http://s8.mogucdn.com/p1/160320/in_ifrdaojyg5rdsyrwg4zdambqmeyde_120x120.png" alt="">
      <div class="for4-title1 font-s">女鞋</div>
      <div class="for4-title1-small font-ss">好鞋不将“旧”</div>
    </div>
  </div>
  <div class="for4">
    <div class="for4-1">
      <div class="title1 font-ss">百货</div>
      <router-link to="/shop/show">
        <img src="http://s18.mogucdn.com/p1/160506/upload_ifqtszldmmzdczjvhazdambqgyyde_315x315.png" alt="">
      </router-link>
      <div class="title2 font">长不大的少女心</div>
      <div class="title3 font-ss">我不想 我不想 不想长大~</div>
      <div class="line"></div>
    </div>
    <div class="for4-1">
      <div class="title1 font-ss">百货</div>
      <img src="http://s17.mogucdn.com/p1/160506/upload_ifrggndfmezdczjvhazdambqmeyde_315x315.png" alt="">
      <div class="title2 font">长不大的少女心</div>
      <div class="title3 font-ss">我不想 我不想 不想长大~</div>
      <div class="line"></div>
    </div>
    <div class="for4-1">
      <div class="title1 font-ss">家居</div>
      <img src="http://s18.mogucdn.com/p1/160307/upload_ie4wgmdfmfqtaojsg4zdambqgqyde_315x315.jpg" alt="">
      <div class="title2 font">创意生活</div>
      <div class="title3 font-ss">生活里，总需要小创意～</div>
      <!--<div class="line"></div>-->
    </div>
    <div class="for4-1">
      <div class="title1 font-ss">家居</div>
      <img src="http://s17.mogucdn.com/p1/160325/upload_ie4gen3eguzdmnbyg4zdambqgiyde_315x315.png" alt="">
      <div class="title2 font">创意生活</div>
      <div class="title3 font-ss">生活里，总需要小创意～</div>
      <!--<div class="line"></div>-->
    </div>
  </div>
</div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .title1-1{
    text-indent: 10px;
  }
  .for6{
    display: flex;
    flex-wrap: wrap;
  }
  .for6-item{
    text-align: center;
    margin-bottom:10px;
    width:calc((1/4)*100%);
    img{
      size:1.20rem;
    }
  }
  .for4{
    display: flex;
    flex-wrap: wrap;
  }
  .for4-1{
    text-align: center;
    box-sizing: border-box;
    width:50%;
    .title2,.title3{
      text-indent: 20px;
      text-align: left;
    }
    .title1{
      top: 10px;
      left: 50%;
      background: #fff;
      margin-left: calc(-.6rem/2);
      position: relative;
      border-radius: 10px;
      width: .60rem;
      text-align: center;
      height: .30rem;
      padding: 5px;
      border: 1px solid #222;
    }
    img {
      size:3rem;
    }
    .title3{
      margin-bottom: 40px;
    }
    .line{
      height: 5px;
      width: 2.50rem;
      position: relative;
      left: 50%;
      margin-left: calc(-2.50rem/2);
      bottom: 0;
      background: #795da3;
      margin-bottom: 20px;
    }
  }
</style>
<script>

</script>
