import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/page/auth/Register'
import Login from '@/page/auth/Login'
import Forget from '@/page/auth/Forget'
import Container from "@/page/home/Container";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/forget',
      name:'Forget',
      component:Forget
    },
    {
      path:'/home',
      name:"Home",
      component:Container
    }
  ]
})
