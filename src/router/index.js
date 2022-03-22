import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/dashboard',
    name: 'Dashboard',
    redirect:{name:'Overview'},
    component: () => import(/* webpackChunkName: "Home" */ '../components/Dashboard.vue'),
    children:[{
      path: 'overview',
			name: 'Overview',
			component: () => import(/* webpackChunkName: "Overview" */ '@/views/Overview.vue'),
			meta:{title: 'Overview'}
    },{
      path: 'partners',
			name: 'Partners',
			component: () => import(/* webpackChunkName: "Partners" */ '@/views/Partners.vue'),
			meta:{title: 'Partners'}
    },{
      path: 'message',
			name: 'Message',
			component: () => import(/* webpackChunkName: "Message" */ '@/views/Message.vue'),
			meta:{title: 'Message'}
    },{
      path: 'stats',
			name: 'Stats',
			component: () => import(/* webpackChunkName: "Stats" */ '@/views/Stats.vue'),
			meta:{title: 'Stats'}
    },{
      path: 'offline',
			name: 'Offline',
			component: () => import(/* webpackChunkName: "Offline" */ '@/views/Offline.vue'),
			meta:{title: 'Offline'}
    },{
      path: 'upload',
			name: 'Upload',
			component: () => import(/* webpackChunkName: "Upload" */ '@/views/Upload.vue'),
			meta:{title: 'Upload'}
    },{
      path: 'discover',
			name: 'Discover',
			component: () => import(/* webpackChunkName: "Discover" */ '@/views/Discover.vue'),
			meta:{title: 'Discover'}
    }]
  },{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "Login" */ '@/components/Login.vue'),
		meta:{title: 'Login'}
	},{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
		meta:{title: 'Home'}
	},{
		path: '/explore',
		name: 'Explore',
		component: () => import(/* webpackChunkName: "Explore" */ '@/views/Explore.vue'),
		meta:{title: 'Explore'}
	},{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "About" */ '@/views/About.vue'),
		meta:{title: 'About'}
	},{
		path: '/faq',
		name: 'Faq',
		component: () => import(/* webpackChunkName: "Faq" */ '@/views/Faq.vue'),
		meta:{title: 'Faq'}
	},{
		path: '/contact',
		name: 'Contact',
		component: () => import(/* webpackChunkName: "Contact" */ '@/views/Contact.vue'),
		meta:{title: 'Contact'}
	},{
		path: '*',
		redirect: '/'
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
