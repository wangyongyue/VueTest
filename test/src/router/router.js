import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../compentens/login/login.vue'
// import mine from '../compentens/mine.vue'
import home from '../compentens/home.vue'
import goods from '../compentens/goods.vue'
import mine from '../compentens/mine/mine'
import work from '../compentens/work/work'


Vue.use(VueRouter)


const routes = [
  {
    path: '/login',
    name: 'login',
    component: login, children:[]
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  // 重定向
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine
  },
  {
    path: '/work',
    name: 'work',
    component: work
  },



]
const router = new VueRouter({
  mode: 'history',
  routes:routes
})

export default router;
