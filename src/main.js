// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import './assets/iconfont/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang
import App from './App'
import router from './router'

 
// import包
import CnRegionPicker from 'cn-region-picker'
 
// use
Vue.use(CnRegionPicker)
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
