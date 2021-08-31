<template>
	<p @click="goHome">Fast Library</p>
</template>

<script>
export default {
	methods: {
		goHome() {
			this.$router.replace('/')
		}
	}
}
</script>

<style lang="scss" scoped>
p {
	color: $primary;
	font-family: 'Roboto', sans-serif;
	font-size: 25px;
	font-weight: 600;
	cursor: pointer;
}
</style>
