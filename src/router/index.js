import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('@/views/login/Login')
const Register = () => import('@/views/register/Register')
const Home = () => import('@/views/home/Home')

Vue.use(VueRouter)

const routes = [
  { path: '', component: Home },
  { path: '/home', component: Home },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/reg',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
