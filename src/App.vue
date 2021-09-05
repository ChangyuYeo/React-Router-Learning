<template>
	<transition name="fade">
		<Square v-if="trigger" />
	</transition>
	<div class="container">
		<Header />
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" :key="$route.path" />
			</transition>
		</router-view>
		<ASpin v-if="loading" class="spin" tip="Loading..." size="large" />
	</div>
	<Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import Square from '@/components/Square.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
	components: {
		Square,
		Header,
		Footer
	},

	data() {
		return {
			trigger: false
		}
	},

	computed: {
		...mapState(['loading'])
	},

	methods: {
		isShow() {
			setTimeout(() => {
				this.trigger = true
			}, 800)
		}
	},

	created() {
		this.isShow()
	}
})
</script>

<style lang="scss">
body {
	background-color: $gray-200;
	color: $gray-900;
	font-size: 100%;
	line-height: 1.4;
	font-family: 'Noto Sans KR', sans-serif;
	box-sizing: border-box;
}

.container {
	position: relative;
	.spin {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.7s, transform 0.7s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
