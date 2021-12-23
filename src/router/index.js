import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = ()=>import('@/pages/Home/home.vue')
const City = ()=>import('@/pages/City/city.vue')
const Login = ()=>import('@/pages/Login/login.vue')


const router = new VueRouter({
    mode:'hash',
   routes: [
       {path:'/',component:Home},
       {path:'/home',component:Home},
       {path:'/login',component:Login},
       {path:'/city',component:City}
]
})



export default router