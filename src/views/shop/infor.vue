<template>
  <div class="comment-shop">
    <div class="comment">
      <div class="title">
        <span>累计评价 34 </span>
        <div>
          <span>更多</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-right"></use>
          </svg>
        </div>
      </div>

      <div class="comment-content">
        <div class="a-comment">
          <div class="q1">
            <div class="img">
              <img src="http://s11.mogucdn.com/p1/160105/idid_ifrtgyjxmjrwgntfguzdambqhayde_160x160.jpg_100x100.jpg" alt="">
            </div>
            <div class="name">潘***咩</div>
          </div>
          <div class="q2">还可以 就是有点松</div>
          <div class="q3">
            <div class="time c-g ">2017-06-08</div>
            <div class="dec c-g ">颜色:金框冰粉片 </div>
          </div>
        </div>

        <div class="a-comment">
          <div class="q1">
            <div class="img">
              <img src="http://s11.mogucdn.com/p1/160105/idid_ifrtgyjxmjrwgntfguzdambqhayde_160x160.jpg_100x100.jpg" alt="">
            </div>
            <div class="name">潘***咩</div>
          </div>
          <div class="q2">还可以 就是有点松</div>
          <div class="q3">
            <div class="time c-g ">2017-06-08</div>
            <div class="dec c-g ">颜色:金框冰粉片 </div>
          </div>
        </div>
        <div class="c-g say">[商家回复]:  亲这一款本身就是大框哦，不合适可以联系客服退换哦</div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .comment-shop{
    background: #fff;
  }
  .say{
    padding: 10px 20px;
  }
  .a-comment{
    padding: 10px 30px;
    border-bottom: 1px solid #eee;
    width: 100%;
    .q2{padding: 10px 0}
    .q3{
      display: flex;
      .dec{
        padding: 0 30px;
      }
    }
    .q1{
      align-self: center;
      display: flex;
      .img{
        padding: 5px;
        img{border-radius: 50%}
      }
      .name{
        margin-left: 10px;
        align-self: center;
      }
    }
  }
  .title{
    display: flex;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
</style>
