/* import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') */

import Vue from 'vue'
import './plugins/axios'
import router from './router'
import '@/assets/reset.css'

// mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App.vue'
import store from './vuex/store'
import './plugins/flexible.js'
Vue.use(Mint);

import Cube from 'cube-ui'
import 'amfe-flexible'
Vue.use(Cube);
// console.log(Cube);

// 引入i18n国际化插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json')
  }
});

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~Main.js~~~~~~~~~~~~~~~~~~~~~~~~~~')

Vue.config.productionTip = false

var app = new Vue({
  	el: '#app',
  	router,
  	store,
		i18n,
  	components: { App },
  	render: h => h(App)
})

window.ap = app;