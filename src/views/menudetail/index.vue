<template>
    <div>
        <menuDetailHeader :menudetailinfo="menudetailinfo" :shopCarnumber="shopCarnumber" ref="menuDetailHeader"/>
        <bannerone :menudetailinfo="menudetailinfo"/>
        <detailone :menudetailinfo="menudetailinfo" ref="detailone"/>
        <shopDialog :showShopDialog="showShopDialog"/>
        <doupinFooter/>
    </div>
</template>
<script>
import menuDetailHeader from '@/components/menudetail/header'
import bannerone from '@/components/menudetail/bannerone'
import detailone from '@/components/menudetail/detail'
import doupinFooter from '@/components/footer'
import {shopDialog} from '@/components/shopdialog/shopdialog'
import {getMenuDetails} from '@/api/menudetails'
import {debug } from 'util';
import {getShopcarNumber} from '@/api/shopcar';

export default {
  name: 'index',
  components:{
    menuDetailHeader,
    bannerone,
    detailone,
    doupinFooter,
    shopDialog,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menudetailinfo:null,
      requestUrl:'',
      menuId:'',
      showShopDialog:true,
      shopCarnumber:0
    }
  },
  created() {
    debugger
      this.requestUrl = window.location.href;
      let index=this.requestUrl.lastIndexOf("=");
      this.menuId=this.requestUrl.substring(index+1,this.requestUrl.length);
      this.getMenuDetails();
      this.getShopcarNumber();
    },
    methods: {
      getMenuDetails(){
        debugger
        getMenuDetails(this.menuId).then(response => {
          debugger
          console.log(response);
          this.menudetailinfo = response.data.content;
      })
      },
      getShopcarNumber(){
        getShopcarNumber().then(response => {
          debugger
          this.shopCarnumber = response.data.content;
        })
      }
  }
}
</script>

<style scoped>
.homepage{
    margin-top: 1px
}
</style>