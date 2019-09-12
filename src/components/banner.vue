<template>
  <el-carousel :interval="2500" arrow="always" height="420px">
    <el-carousel-item v-for="item in list" :key="item">
       <img style="height:420px" :src="item.pic">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import {getBanner} from '@/api/banner'
    export default {
    name: 'doupinBanner',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App',
        list:null,
        }
    },
    created() {
      this.getBannerInfo();
    },
     methods: {
       getBannerInfo(){
         getBanner().then(response => {
           debugger
           console.log(response);
           this.list = response.data.content;
        })
       }
     }
}

</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>