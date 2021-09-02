import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('@/views/Home')
	},
	{
		path: '/books/:id',
		component: () => import('@/views/Books')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
