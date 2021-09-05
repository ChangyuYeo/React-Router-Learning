<template>
	<div @click="toBooks" class="item">
		<ACard hoverable style="width: 240px">
			<div :style="{ backgroundImage: `url(${book.thumbnail})` }" class="book">
				<i v-if="!book.thumbnail" class="bi bi-file-image-fill"></i>
			</div>
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
						도서 정가: {{ price(book.price) || '정보가 없습니다' }}
						<span v-if="book.price">원</span>
					</div>
					<div class="text">
						도서 판매가: {{ price(book.sale_price) || '정보가 없습니다' }}
						<span v-if="book.price">원</span>
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
			// const url = this.book.isbn.split(' ')
			// this.$router.push(`/books/${url[0]}`)
			const url = this.book.title
			this.$router.push(`/books/${url}`)
		},
		price(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
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
		display: flex;
		justify-content: center;
		align-items: center;
		.bi {
			font-size: 70px;
			color: rgba($color: $gray-600, $alpha: 0.7);
		}
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
