<template>
	<div class="container">
		<div v-if="!books" class="message">
			{{ message }}
		</div>
		<div v-else class="books">
			<BookItems v-for="(book, index) in books" :key="index" :book="book" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import BookItems from '@/components/BookItems.vue'

export default defineComponent({
	components: {
		BookItems
	},

	computed: {
		...mapState(['books', 'message'])
	}
})
</script>

<style lang="scss" scoped>
.container {
	margin-top: 30px;
	padding: 0;
	.message {
		margin-top: 50px;
		height: 250px;
		font-size: 1.3rem;
		font-weight: 500;
		text-align: center;
		color: $gray-500;
	}
	.books {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
}
</style>
