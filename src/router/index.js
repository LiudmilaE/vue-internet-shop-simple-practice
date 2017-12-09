import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/router/MainPage'
import Basket from '@/router/Basket'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
    	path: '/basket',
    	component: Basket
    }
  ]
})
