import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import vuescroll from "vuescroll"
import "vuescroll/dist/vuescroll.css"
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import VueClipboard from 'vue-clipboard2'
import './mock'
import i18n from './locale/index'

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(Antd)
Vue.use(vuescroll)//使用
Vue.use(mavonEditor)
let app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
export default app;

