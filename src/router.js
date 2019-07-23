import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index/index.vue'
import Index1 from './views/index1/index.vue'
import demoPage from './views/demoPage/demoPage.vue'
// 国际化
import gjh from './views/Internationalization/Index/Index'

Vue.use(Router)

export default new Router({
	mode: 'history',//'hash',//
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/gjh',
			// alias: '/',
			name: 'gjh',
			component: gjh
		},
		{
			path: '/index',
			alias: '/', // 路径显示不变 组件内容实际为index.vue
			name: 'index',
			component: Index,
			'meta': {
				keepAlive: true // 需要被缓存
			}
		},
		{
			path: '/index1',
			alias: '/indexBase', // 路径显示不变 组件内容实际为index.vue
			name: 'index1',
			component: Index1
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/demoPage',
			name: 'demoPage',
			component: demoPage
		},
	]
})
