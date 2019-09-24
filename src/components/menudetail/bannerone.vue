<template>
<div class="hero" style="background-image: url(&quot;https://img3.doubanio.com/view/market_grip/raw/public/023b7db1e8cb9ed.jpg&quot;); height: 650px;">
</div>
    
</template>
<script>
export default {
 name: 'bannerone',
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
  props:["menudetailinfo"],
  created() {
    this.getBannerInfo();
  },  
}
</script>

<style>
.hero {
    position: relative;
    z-index: 1;
    background: #f9f6f2 50% no-repeat;
    background-size: cover;
    min-height: 500px;
}
</style>