import * as Vue from 'vue'
import TinyVue from '@opentiny/vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'

window.$vueApp.use(TinyVue)

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Vue.defineAsyncComponent(
        () => import('./components/HomePage.vue')
      ),
    },
    {
      path: '/form',
      component: Vue.defineAsyncComponent(
        () => import('./components/FormPage.vue')
      ),
    },
    {
      path: '/list',
      component: Vue.defineAsyncComponent(
        () => import('./components/ListPage.vue')
      ),
    },
  ],
})

window.$vueApp = Vue.createApp(App)
window.$vueApp.mount('#app')
window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
window.$vueApp.use(router)
