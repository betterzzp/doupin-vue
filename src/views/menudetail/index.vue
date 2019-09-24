<template>
    <div>
        <menuDetailHeader :menudetailinfo="menudetailinfo"/>
        <bannerone :menudetailinfo="menudetailinfo"/>
        <detailone :menudetailinfo="menudetailinfo"/>
        <doupinFooter/>
    </div>
</template>
<script>
import menuDetailHeader from '@/components/menudetail/header'
import bannerone from '@/components/menudetail/bannerone'
import detailone from '@/components/menudetail/detail'
import doupinFooter from '@/components/footer'

import {getMenuDetails} from '@/api/menudetails'

export default {
  name: 'index',
  components:{
    menuDetailHeader,
    bannerone,
    detailone,
    doupinFooter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menudetailinfo:null
    }
  },
  created() {
      this.getMenuDetails();
    },
    methods: {
      getMenuDetails(){
           debugger
        getMenuDetails('884e8e77400f4031bdfeab2515b2f94a').then(response => {
          debugger
          console.log(response);
          this.menudetailinfo = response.data.content;
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