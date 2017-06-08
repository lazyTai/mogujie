<template>
  <div class="qian">
    <div class="qian-title1">
      <div class="qian-title1-1">
        <b class="">23点快抢·距结束</b>
        <div class="time">
          <span class="hour span">01</span>: <span  class="minutes span">01</span>: <span  class="seconds span">01</span>
        </div>
      </div>
      <div class="qian-title1-2">
        <b class="c-g">MORE</b>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-more"></use>
        </svg>
      </div>
    </div>
      <!-- Swiper -->
    <div class="swiper-container1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="http://s2.mogucdn.com/mlcdn/1689c6/170606_09jgid7c3j4ld8fjbglk5ci195587_640x640.jpg_320x999.webp" alt="">
            <div class="title1">烫染修复滋养洗发护发套装</div>
            <div class="title2">
              <div class="title2-1 c-p">¥45.80</div>
              <div class="title2-2">
                <del>¥200</del>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <img src="http://s2.mogucdn.com/mlcdn/1689c6/170606_50f5h860j70j6ec54llifb1eab3bi_640x640.jpg_320x999.webp" alt="">
            <div class="title1">送洗面奶 撕出99%黑白头</div>
            <div class="title2">
              <div class="title2-1 c-p">¥45.80</div>
              <div class="title2-2">
                <del>¥200</del>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <img src="http://s17.mogucdn.com/mlcdn/1689c6/170606_00c581ka3l9c7737l8b6kj686a61i_640x640.jpg_320x999.webp" alt="">
            <div class="title1">蜗牛芦荟“双重舒缓痘肌”</div>
            <div class="title2">
              <div class="title2-1 c-p">¥45.80</div>
              <div class="title2-2">
                <del>¥200</del>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <img src="http://s2.mogucdn.com/mlcdn/1689c6/170603_3k7eclgki96h93jfk74b6kflhkg5l_640x640.jpg_320x999.webp" alt="">
            <div class="title1">一瓶解决黑眼圈眼袋脂肪粒</div>
            <div class="title2">
              <div class="title2-1 c-p">¥45.80</div>
              <div class="title2-2">
                <del>¥200</del>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <img src="http://s2.mogucdn.com/mlcdn/1689c6/170605_5i8a1ajj2cjedl89a94b3501f67b7_640x640.jpg_320x999.webp" alt="">
            <div class="title1">补水修护晚安面膜 巨补水</div>
            <div class="title2">
              <div class="title2-1 c-p">¥45.80</div>
              <div class="title2-2">
                <del>¥200</del>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <img src="http://s2.mogucdn.com/mlcdn/1689c6/170605_55275bgak4e8ebkahl40kee0g1lci_640x640.jpg_320x999.webp" alt="">
            <div class="title1">3条冰丝+3条莫代尔纯棉</div>
            <div class="title2">
              <div class="title2-1 c-p">¥45.80</div>
              <div class="title2-2">
                <del>¥200</del>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <img src="http://s17.mogucdn.com/mlcdn/1689c6/170604_72b7chdbe4i5dk627680e526b16h3_640x640.jpg_320x999.webp" alt="">
            <div class="title1">学生外穿飘带拼接镂空T恤</div>
            <div class="title2">
              <div class="title2-1 c-p">¥45.80</div>
              <div class="title2-2">
                <del>¥200</del>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <img src="http://s11.mogucdn.com/mlcdn/1689c6/170606_067fdd32kfg8l1jfi7l4j1h10l5gi_640x640.jpg_320x999.webp" alt="">
            <div class="title1">莲花爆水面膜，水嫩滑</div>
            <div class="title2">
              <div class="title2-1 c-p">¥45.80</div>
              <div class="title2-2">
                <del>¥200</del>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <img src="http://s2.mogucdn.com/mlcdn/1689c6/170606_09jgid7c3j4ld8fjbglk5ci195587_640x640.jpg_320x999.webp" alt="">
            <div class="title1">烫染修复滋养洗发护发套装</div>
            <div class="title2">
              <div class="title2-1 c-p">¥45.80</div>
              <div class="title2-2">
                <del>¥200</del>
              </div>
            </div>
          </div>

        </div>
    </div>
  </div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .c-p{
    color: pink;
  }
  .c-g{
    color: $deepgrey;
  }
  .qian{
    background: #fff;
    margin-top: 10px;
  }
  .qian-title1{
    display: flex;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
  }
  .qian-title1-1{
    flex-grow: 1;
    display: flex;
    .time{
      margin-left: 10px;
    }
    .span{
      padding: 5px;
      text-align: center;
      width: 35px;
      height: 35px;
      line-height: 30px;
      color: #fff;
      border-radius: 5px;
      background: #424242;
    }
  }
  .swiper-container1 {
    width: 100%;
    overflow: hidden;
    background: #eee;
    /*height: 130px;*/
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    padding: 10px;
    background: #fff;
    img{
      size:80px;
    }
    .title1{
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .title2{
      display: flex;
      text-align: center;
      margin-top: 10px;
      justify-content: space-around;
    }
  }
</style>
<script>
  export  default{
      mounted:function () {
        var swiper = new Swiper('.swiper-container1', {
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 10
        });
      }
  }
</script>
