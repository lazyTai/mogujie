<template>
<div class="store padding-20">
  <div class="q1">
    <div class="q1-1  img">
      <img src="http://s3.mogucdn.com/b7/avatar/140508/oclun_kqzdg42dozbfcwsugfjeg5sckzsew_200x200.jpg_100x100.jpg" alt="">
    </div>
    <div class="q1-2 padding-10">
      <div class="w1 padding-5">XIAMO小陌潮人眼镜</div>
      <div class="w2 padding-5">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-star"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-star"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-star"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-star"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-star"></use>
        </svg>
      </div>
      <div class="w3 padding-5">
        <div class="e1 font-s c-g">总销量 124789</div>
        <div class="e2 font-s c-g padding-l-10">收藏数 14328</div>
      </div>
    </div>
    <div class="q1-3">
      <span class="in">收藏</span>
    </div>
  </div>
  <div class="q2">
    <div class="w1">
      <span class="font-s">描述相符</span>
      <span class="font-s">4.47 </span>
      <span class="font-s c-p">高</span>
    </div>
    <div class="w2">
      <span class="font-s">价格合理</span>
      <span class="font-s">4.47 </span>
      <span class="font-s c-p">高</span>
    </div>
    <div class="w3">
      <span class="font-s">质量满意</span>
      <span class="font-s">4.47 </span>
      <span class="font-s c-p">高</span>
    </div>
  </div>
  <q3>
    <w1>
      <e1 class="">
        <svg class="icon font-l" aria-hidden="true">
        <use xlink:href="#icon-jinqian"></use>
        </svg>
        <span>退货补运费</span>
      </e1>
      <e2>
        <svg class="icon font-l" aria-hidden="true">
          <use xlink:href="#icon-asmkticon0122"></use>
        </svg>
        <span>全国包邮</span>
      </e2>
    </w1>
    <w2>
      <e1>
        <svg class="icon font-l" aria-hidden="true">
          <use xlink:href="#icon-baoguo"></use>
        </svg>
        <span>7天无理由退货</span>
      </e1>
      <e2>
        <svg class="icon font-l" aria-hidden="true">
        <use xlink:href="#icon-shizhong"></use>
      </svg>
        <span>72小时发货</span>
      </e2>
    </w2>
  </q3>
  <q4>
    <w1>全部商品（270）</w1>
    <w1>进入小店</w1>
  </q4>
  </div>
</div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .q4{
    display:flex;
    .w1{
      width:3rem;
      text-align: center;
      padding: 10px;
      border: 1px solid #222;
    }
  }
  .q3{
    .w1{display: flex;padding: 20px;.e1,.e2{flex-grow: 1}}
    .w2{display: flex;padding: 20px;.e1,.e2{flex-grow: 1}}
  }
  .q2{
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    .w1,.w2,.w3{flex: 1;text-align: center}

  }
  .q1{
    display: flex;
  }
  .q1-3{
    display: flex;
    align-self: center;
    .in{
      width: 100px;
      padding: 20px;
      border: 1px solid #222;
    }
  }
  .q1-1{
      size: 100px;
      .img{
        size: 100%;
      }
  }
  .q1-2{
    flex: 1;
    display: flex;
    flex-direction: column;
    .w3{
      display: flex;
    }
  }
  .store{
    margin-top: 20px;
    background: #fff;
  }
</style>
<script></script>
