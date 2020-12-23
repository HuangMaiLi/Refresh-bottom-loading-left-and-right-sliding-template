import Vue from 'vue'
import App from './App'
import store from './store/store.js'

import '@/static/css/reset.scss'
import '@/static/iconfont/iconfont.css' //使用字体图标
import '@/static/js/constant.js'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
const app = new Vue({
	store,
    ...App
})
app.$mount()
