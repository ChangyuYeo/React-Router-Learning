<template>
	<div>
		<transition name="slide-fade">
			<Alert
				v-if="message === `해당 검색 결과의 내용을 찾을 수 없습니다.`"
				class="alert"
			/>
		</transition>
		<Headline />
		<Input />
		<BookList />
	</div>
</template>

<script>
import Alert from '@/components/Alert'
import Headline from '@/components/Headline'
import Input from '@/components/Input'
import BookList from '@/components/BookList'
import { mapState } from 'vuex'

export default {
	components: {
		Alert,
		Headline,
		Input,
		BookList
	},

	computed: {
		...mapState(['message'])
	},

	created() {
		this.$store.commit('RESET_BOOKS')
	}
}
</script>

<style lang="scss" scoped>
.alert {
	position: fixed;
	width: 60%;
	margin: 0 auto;
	top: 10%;
	left: 0;
	right: 0;
	cursor: pointer;
}

.slide-fade-enter-active {
	transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.8s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(20px);
	opacity: 0;
}
</style>
