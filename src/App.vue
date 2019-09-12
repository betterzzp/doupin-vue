<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-tabs__item{
  font-size: 18px;
  width: 50%;
  margin-right: 20px;
}
.el-tabs__nav{
    margin-left: auto;
    margin-right: auto;
    margin-left: 16px;
}
</style>
