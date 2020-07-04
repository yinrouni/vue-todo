import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import Container from '../components/Container'

Vue.use(Router)
Vue.use(ElementUI, {locale})

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Container',
      component: Container
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
