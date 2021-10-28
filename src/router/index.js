import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/form',
      component: () => import('@/components/form')
    },
    {
      path: '/table',
      component: () => import('@/components/table')
    }
  ]
})