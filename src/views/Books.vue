<template>
	<div class="test">
		<ACard hoverable style="width: 240px">
			<img :src="`${book[0]?.thumbnail}`" width="200" />
		</ACard>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['book'])
	},

	created() {
		const book = this.$route.params.id
		this.$store.dispatch('searchBookInfo', book)
	}
}
</script>

<style lang="scss" scoped>
.ant-card-body {
	padding: 30px;
}
</style>
