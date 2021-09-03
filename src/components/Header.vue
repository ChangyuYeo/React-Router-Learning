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
					to: '/books/1188612786',
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
	.nav {
		font-family: 'Roboto', sans-serif;
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
}
</style>
