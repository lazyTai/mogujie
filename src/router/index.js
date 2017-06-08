import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Home from '../views/home/Home.vue'
import login from '../views/login/login.vue'
import register from '../views/register/register.vue'
import markets from '../views/markets/markets.vue'
import fastbuy from "../views/fastbuy/fastbuy.vue"
import  shop from "../views/shop/shop.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/markets',
      name: 'markets',
      component: markets
    },
    {
      path: '/fastbuy',
      name: 'fastbuy',
      component: fastbuy
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      children:[
        {
          path:'show',
          component:require("../views/shop/show.vue")
        },
        {
          path:'can',
          component:require("../views/shop/can.vue")
        },
        {
          path:'hot',
          component:require("../views/shop/hot.vue")
        }]
    }
  ]
})
