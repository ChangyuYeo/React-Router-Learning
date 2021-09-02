<template>
	<Square />
	<div class="container">
		<Header />
		<RouterView v-slot="{ Component }">
			<transition name="fade">
				<component :is="Component" />
			</transition>
		</RouterView>
	</div>
</template>

<script>
import Header from '@/components/Header'
import Square from '@/components/Square'

export default {
	components: {
		Header,
		Square
	}
}
</script>

<style lang="scss">
body {
	background-color: $gray-200;
}
</style>
