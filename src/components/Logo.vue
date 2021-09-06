<template>
	<p @click="goHome">Fast Library</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	methods: {
		goHome() {
			this.$router.replace('/')
		}
	}
})
</script>

<style lang="scss" scoped>
p {
	color: $primary;
	font-family: 'Roboto', sans-serif;
	font-size: 2rem;
	font-weight: 600;
	cursor: pointer;
	margin: 0 !important;
}
</style>
