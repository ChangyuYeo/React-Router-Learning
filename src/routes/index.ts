import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/books/:id',
		component: () => import('@/views/Books.vue')
	},
	{
		path: '/:pathMatch(.*)',
		component: () => import('@/views/NotFound.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior() {
		return { top: 0 }
	},
	routes
})

export default router
