<template>
    <div>
        <menuDetailHeader v-bind:menudetailinfo="menudetailinfo" :shopCarnumber="shopCarnumber" ref="menuDetailHeader"/>
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
import loginComponent from '@/components/logincomponent/logincomponent'

export default {
  name: 'index',
  components:{
    menuDetailHeader,
    bannerone,
    detailone,
    doupinFooter,
    shopDialog,
    loginComponent,
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
      this.requestUrl = window.location.href;
      let index=this.requestUrl.lastIndexOf("=");
      this.menuId=this.requestUrl.substring(index+1,this.requestUrl.length);
      this.getMenuDetails();
      this.getShopcarNumber();
    },
    methods: {
      getMenuDetails(){
        getMenuDetails(this.menuId).then(response => {
          console.log(response);
          this.menudetailinfo = response.data.content;
      })
      },
      getShopcarNumber(){
        getShopcarNumber().then(response => {
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