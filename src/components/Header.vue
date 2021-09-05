<template>
	<header>
		<Logo />
		<nav>
			<ul class="nav">
				<li v-for="(nav, index) in navs" :key="index" class="nav-item">
					<RouterLink
						:to="nav.to"
						class="nav-link"
						active-class="active"
						:class="{ active: isMatch(nav.path) }"
					>
						{{ nav.name }}
					</RouterLink>
				</li>
			</ul>
			<a href="https://github.com/ChangyuYeo" target="_blank">
				<i class="bi bi-github"></i>
			</a>
		</nav>
	</header>
</template>

<script>
import Logo from '@/components/Logo'

export default {
	components: {
		Logo
	},

	data() {
		return {
			navs: [
				{
					name: 'Home',
					to: '/'
				},
				{
					name: 'Books',
					to: '/books/Do it! Vue.js 입문',
					path: /^\/books/
				}
			]
		}
	},

	methods: {
		isMatch(path) {
			if (!path) return false
			return path.test(this.$route.fullPath)
		}
	}
}
</script>

<style lang="scss" scoped>
header {
	padding: 1.5% 0;
	display: flex;
	justify-content: space-between;
	nav {
		display: flex;
		align-items: center;
		.nav {
			font-family: 'Roboto', sans-serif;
			flex-direction: row;
			.nav-item {
				a {
					color: $secondary;
				}
				.active {
					color: $primary;
					font-weight: 600;
				}
			}
		}
		.bi {
			color: $gray-500;
			font-size: 20px;
			padding-left: 15px;
			cursor: pointer;
			transition: 0.2s;
			&:hover {
				font-size: 21px;
				color: $primary;
			}
		}
	}
}
</style>
