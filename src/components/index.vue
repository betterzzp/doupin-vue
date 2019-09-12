<template>
<div>
  <div>
    <banner/>
  </div>
</div>
</template>
<script>
import banner from "@/components/banner"
import menulist from "@/components/menulist"
export default {
  name: 'index',
  components:{
    banner
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
