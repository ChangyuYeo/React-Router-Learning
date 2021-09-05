<template>
	<footer>
		<Logo />
		<a href="https://github.com/ChangyuYeo" target="_blank">
			(c){{ thisYear }} Changyu
		</a>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/Logo.vue'

export default defineComponent({
	components: {
		Logo
	},

	computed: {
		thisYear() {
			return new Date().getFullYear()
		}
	}
})
</script>

<style lang="scss" scoped>
footer {
	padding: 70px 0;
	text-align: center;
	opacity: 0.3;
	p {
		display: block;
		margin-bottom: 4;
	}
}
</style>
