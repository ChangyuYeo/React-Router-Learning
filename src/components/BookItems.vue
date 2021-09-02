<template>
	<div @click="toBooks" class="item">
		<ACard hoverable style="width: 240px">
			<div
				:style="{ backgroundImage: `url(${book.thumbnail})` }"
				class="book"
			></div>
			<ACardMeta :title="book.title" class="title">
				<template v-slot:description>
					<div class="text">
						{{ book.contents || '정보가 없습니다' }}
					</div>
					<div class="text">
						출판사: {{ book.publisher || '정보가 없습니다' }}
					</div>
					<div class="text">
						저자: {{ book.authors[0] || '정보가 없습니다' }}
					</div>
					<div class="text">
						도서 정가: {{ book.price || '정보가 없습니다' }}원
					</div>
					<div class="text">
						도서 판매가: {{ book.sale_price || '정보가 없습니다' }}원
					</div>
				</template>
			</ACardMeta>
		</ACard>
	</div>
</template>

<script>
export default {
	props: {
		book: {
			type: Object,
			default: () => ({})
		}
	},

	methods: {
		toBooks() {
			const url = this.book.isbn.split(' ')
			this.$router.push(`/books/${url[0]}`)
		}
	}
}
</script>

<style lang="scss" scoped>
.item {
	margin-bottom: 25px;
	.book {
		$width: 190px;
		width: $width;
		height: $width * 1.45;
		border-radius: 5px;
		background-color: $gray-400;
		background-size: cover;
		overflow: hidden;
	}
	.title {
		margin-top: 10px;
	}
	.text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
</style>
