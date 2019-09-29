<template>
    <div class="content-wrapper">

        <div class="product-image-wrap" name="details"   v-for="item in menudetailinfo[0].goodDetail" :key="item" >
            <img class="product-image loaded" :src="item.url">
        </div>

        <div class="product-image-divide">
        </div>

        <div class="product-image-wrap product-module-image" name="params" v-for="item in menudetailinfo[0].goodParam" :key="item" >
            <img class="product-image" :src="item.url">
        </div>


        <div class="product-image-divide">
        </div>

        <div name="reviews" class="product-image-wrap product-review-title"><img src="http://img1.doubanio.com/view/treasury_image/raw/public/32309fbad02829f.jpg" class="product-image"></div>
        
        <div class="product-noreview-wrapper"><img src="https://img3.doubanio.com/img/files/file-1563961143-0.png"><div>产品测评收集中</div></div>
        
        <div class="product-image-wrap"><img class="product-image loaded" data-src="https://img3.doubanio.com/img/files/file-1561433207-0.jpg" alt="豆品物流公众号" src="https://img3.doubanio.com/img/files/file-1561433207-0.jpg"></div>
    </div>
</template>
<script>
export default {
 name: 'detailone',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dialogVisible: false,
      activeName: 'first',
      token:null,
      show:true,
      styleObj1:{color:'blue','font-weight':200,'font-size':'40px'},
      loginwithPasswords:true,
      loginwithValidatecode:true,
      phonenumberLogin:{
          phoneNumber:"",
          validatecode:"",
          password:"I WILL ALWAYS LOVE U",
      }
    }
  }, 
  props:["menudetailinfo"]  
}
</script>
<style>
.content-wrapper {
    width: 1100px;
    margin: 0 auto;
}
.product-image-wrap, .product-video-wrap {
    position: relative;
    z-index: 1;
    margin: 0 auto;
}
.product-image-wrap img, .product-image-wrap video, .product-video-wrap img, .product-video-wrap video {
    max-width: 100%;
    display: block;
    margin: 0 auto;
}
.product-image-wrap img, .product-image-wrap video, .product-video-wrap img, .product-video-wrap video {
    max-width: 100%;
    display: block;
    margin: 0 auto;
}
product-image-wrap img, .product-image-wrap video, .product-video-wrap img, .product-video-wrap video {
    max-width: 100%;
    display: block;
    margin: 0 auto;
}
</style>