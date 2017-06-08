<template>
  <div class="hot">
    <div class="title">热门市场</div>
    <div class="contemt">
      <div class="hot-1" v-for="item in lists">
        <div class="img">
          <img :src="item.img" alt="">
        </div>
        <div class="title1">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .hot{
    margin-top: 20px;

  }
  .title{
    text-align: center;
    height: 60px;
    line-height: 60px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATkAAAAKAgMAAACyFsHVAAAADFBMVEVMaXEzMzMzMzP///8xqFqyAAAAAnRSTlMAtlSR24EAAAABYktHRAMRDEzyAAAAQElEQVQoz2NgoDkQIVZhAHHKMok0jnEJccpWORBnHttK4pStmkCceVJYLV6FCkg1TwtVewPt/Uvt+KB6eqEIAACpih6NjokEAgAAAABJRU5ErkJggg==") no-repeat center center
  }
  .contemt{
    display: flex;
    background: #fff;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    .hot-1{
      padding: 10px;
    }
  }
</style>
<script>
  export  default{
      data(){
          return {
              lists:[
                { title:"新款连衣裙",img:'http://s2.mogucdn.com/mlcdn/c45406/170606_73a3dc42f86kejb5e707clch22438_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"百变上衣",img:'http://s2.mogucdn.com/mlcdn/c45406/170606_1c1kc578ebhc360c470g9i51a0be7_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"时尚美裙",img:'http://s2.mogucdn.com/mlcdn/c45406/170606_0d9al78j6ii48cdg0gf6e6klkd37c_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"热卖T恤",img:'http://s3.mogucdn.com/mlcdn/c45406/170606_64a6c31g536e2lgb9j1ijgg78l9d4_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"绝美凉鞋",img:'http://s2.mogucdn.com/mlcdn/c45406/170606_3eh4l1f2cdk71f36bbgj4j84fjee9_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"当红套装",img:'http://s2.mogucdn.com/mlcdn/c45406/170606_1l2f5c880927ed856aj4465chak75_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"品质单鞋",img:'http://s3.mogucdn.com/mlcdn/c45406/170606_63gj684e07d8lfgl2b12c7f55leac_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"百搭热裤",img:'http://s3.mogucdn.com/mlcdn/c45406/170606_178a0f14habi1j276ief605a7k2h2_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"无所不“包”",img:'http://s11.mogucdn.com/mlcdn/c45406/170606_5lcf942gg9ag6k0el9e5lhb0h4h5b_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"男友潮T",img:'http://s2.mogucdn.com/mlcdn/c45406/170606_2j9fkbf52bag8a3g204dl9db5g1fh_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"夏季睡衣",img:'http://s3.mogucdn.com/mlcdn/c45406/170607_73b21ci5b53a09ic21h9ll2id20ic_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"裤子套装",img:'http://s3.mogucdn.com/mlcdn/c45406/170607_4jiiffc60f80i7fgbe81diehl84df_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"美妆抢购",img:'http://s3.mogucdn.com/mlcdn/c45406/170607_3dfd99j313jk0ieejjbiag040i26l_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"饰品2件29元",img:'http://s3.mogucdn.com/mlcdn/c45406/170607_3ae2ca56683572l7f90ee72994cd6_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"零食9.9包邮",img:'http://s3.mogucdn.com/mlcdn/c45406/170607_8390246gla8d9kk484jl0i10h7cll_120x120.jpg_200x9999.v1c7E.70.webp'},
                { title:"大牌2折起",img:'http://s3.mogucdn.com/mlcdn/c45406/170607_6j1fkg6ge057190cgh9fc4cibde70_120x120.jpg_200x9999.v1c7E.70.webp'},
              ]
          }
      }
  }
</script>
