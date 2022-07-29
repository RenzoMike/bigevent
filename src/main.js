import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/global.css' //全局初始化样式
import '@/elementUI'  //注册element-UI 组件库
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
