<template>
	<div class="container">
		<div class="books">
			<BookItems v-for="(book, index) in books" :key="index" :book="book" />
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import BookItems from '@/components/BookItems'

export default {
	components: {
		BookItems
	},

	computed: {
		...mapState(['books'])
	}
}
</script>

<style lang="scss" scoped>
.container {
	margin-top: 30px;
	.books {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
}
</style>
