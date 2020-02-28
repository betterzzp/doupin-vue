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
      component: () => import('@/views/pay/index')
    },
    {
      path: '/payment',
      component: () => import('@/views/payment/index')
    },
    {
      path: '/shopcar',
      component: () => import('@/views/shopcar/index')
    },
    {
      path: '/address',
      component: () => import('@/components/address/address')
    },
    {
      path: '/registory',
      component: () => import('@/views/registory/index')
    }
    ,
    {
      path: '/order',
      component: () => import('@/views/doupinorder/index')
    }
  ]
})
