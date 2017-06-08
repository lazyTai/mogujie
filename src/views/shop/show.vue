<template>
  <div class="show">
    <q1>
      <w1></w1>
      <w2>穿着效果</w2>
      <w3>.</w3>
    </q1>
    <q2>
      <img src="http://s3.mogucdn.com/p2/170121/40898975_83bia49ab59ljgej0b283gag9b5h9_750x855.jpg_468x468.jpg" alt="">
      <img src="http://s3.mogucdn.com/p2/170121/40898975_16b8e5efk25jhk2dbl560egbl76gj_750x1074.jpg_468x468.jpg" alt="">
      <img src="http://s2.mogucdn.com/p2/170121/114994688_6kf2lca3ggh967dh7a8fa872jfcdh_750x872.jpg_468x468.jpg" alt="">
      <img src="http://s3.mogucdn.com/p2/170121/40898975_23kkb4gc72l0b1c7j9gch3k3g61dc_750x852.jpg_468x468.jpg" alt="">
      <img src="http://s3.mogucdn.com/p2/170315/40898975_01aj0dig32bbi4kk8028jaledad7a_750x1208.jpg_468x468.jpg" alt="">
      <img src="http://s11.mogucdn.com/p2/170315/40898975_7b70hb29g44j0gei9c66d662k28jj_750x975.jpg_468x468.jpg" alt="">
      <img src="http://s11.mogucdn.com/p2/170121/114994688_5120k8a01eb9j0jkde5l76e8k6h8a_750x874.jpg_468x468.jpg" alt="">
      <img src="http://s11.mogucdn.com/p2/170121/40898975_292iaghi2f2f7efj34ega5ge039l1_750x874.jpg_468x468.jpg" alt="">
    </q2>
  </div>
</template>
<style scoped>
  @import "../../assets/styles/components/mixins.css";
  .show{background: #fff}
  .q1{
    padding: 30px;
    display:flex;
    .w1,.w3{width: 20%;height: 1px;background: #222;margin: 20px}
    .w2{flex: 1;text-align: center}
  }
  .q2{
    text-align: center;
    img {
      margin-bottom: 30px;
      width: 70%;
      height: auto;
    }
  }
</style>
