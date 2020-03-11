<template>
<div class="hero" :style="{backgroundImage:'url('+ menudetailinfo[0].bigpic +')',height:heightz+'px'}">
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
      heightz:650,
      show:true,
      activeColor:'red',
      fontSize:30,
      loginwithPasswords:true,
      loginwithValidatecode:true,
      backgroundImage:url("'"+menudetailinfo[0].bigpic+"'"),
      phonenumberLogin:{
          phoneNumber:"",
          validatecode:"",
          password:""
      }
    }
  }, 
  props:["menudetailinfo"], 
}
</script>
<style scoped>
.hero {
    position: relative;
    z-index: 1;
    background: #f9f6f2 50% no-repeat;
    background-size: cover;
    min-height: 500px;
}
</style>