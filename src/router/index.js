import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/index')
    },
    {
      path: '/product',
      component: () => import('@/views/menudetail/index')
    }
    ,
    {
      path: '/deal',
      component: () => import('@/views/rightnowbuy/index')
    }
    ,
    {
      path: '/pay',
      component: () => import('@/views/paypage/index')
    }
    ,
    {
      path: '/shopcar',
      component: () => import('@/views/shopcar/index')
    }
  ]
})
