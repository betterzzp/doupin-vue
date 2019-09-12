<template>
    <div>
        <doupin-header/>
        <div class="homepage" id="homepage">
            <doupin-banner/>
            <doupin-menu/>
        </div>
        <doupin-footer/>
    </div>
</template>
<script>
import doupinBanner from '@/components/banner'
import doupinHeader from '@/components/header'
import doupinMenu from '@/components/menu'
import doupinFooter from '@/components/footer'
export default {
  name: 'index',
  components:{
    doupinBanner,doupinHeader,doupinMenu,doupinFooter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
.homepage{
    margin-top: 1px
}
</style>