<template>
  <div class="like">
    <div class="title">猜你喜欢</div>
    <div class="content">
      <div class="like-1" v-for="item in lists">
        <div class="img">
          <router-link to="shop">
            <img :src="item.title" alt="">
          </router-link>
        </div>
        <div class="content1">
          <span class="font-s" v-for="item1 in item.type">{{item1}}</span>
        </div>
        <div class="price-star">
          <div class="price"><b>￥{{item.price}}</b></div>
          <div class="star">
            {{item.star}}
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-star"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .price-star{
    text-align: left;
    display: flex;
    padding: 0 30px;
  }
  .price{flex-grow: 1}
  .like-1{
    background: #fff;
    margin-right: .1rem;
    margin-bottom: 20px;
    padding:20px 0;
    flex-grow: 1;
    text-align: center;
  }
  .content{
    flex-wrap: wrap;
    display:flex;
    .img{
      width: 100%;
      img{
        width: 3rem;
        height: 4.5rem;
      }
    }
  }
  .content1{
    max-width: 3rem;;
    text-align: left;
    padding: 10px 30px;
    position: relative;
    span{
      display: inline-block;
      padding: 5px;
      margin: 0px 2px 5px 0px;
      border-radius: 5px;
      color: #040404;
      background: rgba(191, 191, 191, 0.56);
    }
  }
  .like{
    margin-top: 60px;
  }
  .title{
    height: 60px;
    line-height: 60px;
    width: 100%;
    background: url(http://s18.mogucdn.com/p1/160415/upload_ifrwkyzymu2damdgg4zdambqhayde_313x10.png) no-repeat 50%;
    text-align: center;
    margin-bottom: 30px;
  }
</style>
<script>
  export default{
data(){
    return {
      lists:[
        {title:'http://s2.mogucdn.com/mlcdn/c45406/170504_1fh06g8032j525ej93ejg7a47hbg2_640x960.jpg_320x428.v1cAC.70.webp',
          type:['分袖雪纺衫','高腰','木耳边','v领','碎花','宽松','纯色'],
          price:50,star:44
        },
        {title:'http://s3.mogucdn.com/mlcdn/c45406/170427_1f0279fb69d1fjk1h21gf04ibfi0j_640x960.jpg_320x428.v1cAC.70.webp',
          type:['分袖雪纺衫','高腰','木耳边','v领','碎花','宽松','纯色'],
          price:50,star:44
        },
        {title:'http://s3.mogucdn.com/mlcdn/c45406/170418_180jabjhjh80h57e0fg9g53bi3kci_640x940.jpg_320x428.v1cAC.70.webp',
          type:['分袖雪纺衫','高腰','木耳边','v领','碎花','宽松','纯色'],
          price:50,star:44
        },
        {title:'http://s3.mogucdn.com/p2/170301/196450904_2059iaeg82ccj6hi9e90gk08gea9f_640x960.jpg_320x428.v1cAC.70.webp',
          type:['分袖雪纺衫','高腰','木耳边','v领','碎花','宽松','纯色'],
          price:50,star:44
        },
        {title:'http://s3.mogucdn.com/mlcdn/c45406/170507_78j18a4aeh614c3e7i52kea470b0j_640x960.jpg_320x428.v1cAC.70.webp',
          type:['分袖雪纺衫','高腰','木耳边','v领','碎花','宽松','纯色'],
          price:50,star:44
        },
        {title:'http://s3.mogucdn.com/mlcdn/c45406/170425_5lgafjd737fh4cgfbd7je33l74715_640x960.jpg_320x428.v1cAC.70.webp',
          type:['分袖雪纺衫','高腰','木耳边','v领','碎花','宽松','纯色'],
          price:50,star:44
        },
        {title:'http://s3.mogucdn.com/mlcdn/c45406/170421_5706deg35l076971a9b5f923778ce_640x960.jpg_320x428.v1cAC.70.webp',
          type:['分袖雪纺衫','高腰','木耳边','v领','碎花','宽松','纯色'],
          price:50,star:44
        },
        {title:'http://s3.mogucdn.com/p2/160815/106310496_719alic885l9174ibj5l20058537l_640x960.jpg_320x428.v1cAC.70.webp',
          type:['分袖雪纺衫','高腰','木耳边','v领','碎花','宽松','纯色'],
          price:50,star:44
        }
      ]
    }
}
  }
</script>
