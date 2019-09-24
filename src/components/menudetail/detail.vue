<template>
    <div class="content-wrapper">
        <div class="product-image-wrap" name="details">
            <img class="product-image loaded" src="https://img3.doubanio.com/view/market_grip/raw/public/1ecfdd071e78960.jpg">
        </div>
        <div class="product-image-wrap" name="">
            <img class="product-image loaded" src="https://img1.doubanio.com/view/market_grip/raw/public/4bfd5a941120228.jpg">
        </div>
        <div class="product-image-wrap" name="">
            <img class="product-image loaded" src="https://img3.doubanio.com/view/market_grip/raw/public/65deba9d34ff12f.jpg">
        </div>
        <div class="product-image-wrap" name="">
            <img class="product-image loaded" src="https://img3.doubanio.com/view/market_grip/raw/public/f4c704593eae4d5.jpg">
        </div>
        <div class="product-image-wrap" name="">
            <img class="product-image loaded" src="https://img1.doubanio.com/view/market_grip/raw/public/876a602fc80bc87.jpg">
        </div><div class="product-image-wrap" name="">
            <img class="product-image loaded" src="https://img3.doubanio.com/view/market_grip/raw/public/2d1adac9caff382.jpg">
        </div>
        <div class="product-image-wrap" name="">
            <img class="product-image loaded" src="https://img3.doubanio.com/view/market_grip/raw/public/2478b54d1465185.jpg">
        </div><div class="product-image-wrap" name="">
            <img class="product-image loaded" src="https://img3.doubanio.com/view/market_grip/raw/public/4c101750c48ce04.jpg">
        </div>
        <div class="product-image-wrap" name="">
            <img class="product-image loaded" src="https://img3.doubanio.com/view/market_grip/raw/public/bd98f0ee253aa82.jpg">
        </div>
        <div class="product-image-wrap" name="">
            <img class="product-image loaded" src="https://img1.doubanio.com/view/market_grip/raw/public/1930c07d688fa2c.jpg">
        </div>
        <div class="product-image-wrap" name="">
            <img class="product-image loaded" src="https://img3.doubanio.com/view/market_grip/raw/public/8408f98b22a21f3.jpg">
        </div>
        <div class="product-image-wrap" name="">
            <img class="product-image loaded" src="https://img1.doubanio.com/view/market_okra/raw/public/d6cfe12b94c11aa.jpg">
        </div>
        <div class="product-image-divide">
        </div>
        <div class="product-image-wrap product-module-image" name="params">
            <img class="product-image" src="http://img3.doubanio.com/view/treasury_image/raw/public/a8ae901bce2166c.jpg">
        </div>
        <div class="product-image-wrap">
            <img class="product-image" src="https://img3.doubanio.com/view/market_okra/raw/public/44b698c69929e4d.jpg">
        </div>
        <div class="product-image-wrap">
            <img class="product-image" src="https://img3.doubanio.com/view/market_okra/raw/public/324f0bfe6ab482d.jpg">
        </div>
        <div class="product-image-wrap">
            <img class="product-image" src="https://img1.doubanio.com/view/market_okra/raw/public/80a488905dfb53a.jpg">
        </div>
        <div class="product-image-divide">
        </div
        ><div class="product-image-wrap product-review-title" name="reviews">
            <img class="product-image" src="http://img1.doubanio.com/view/treasury_image/raw/public/32309fbad02829f.jpg">
        </div>
        <div class="product-noreview-wrapper">
            <img src="https://img3.doubanio.com/img/files/file-1563961143-0.png">
            <div>
                产品测评收集中
            </div>
        </div>
        <div class="product-image-wrap">
            <img class="product-image" data-src="https://img3.doubanio.com/img/files/file-1561433207-0.jpg" alt="豆品物流公众号">
        </div>
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
      loginwithPasswords:true,
      loginwithValidatecode:true,
      phonenumberLogin:{
          phoneNumber:"",
          validatecode:"",
          password:""
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
</style>