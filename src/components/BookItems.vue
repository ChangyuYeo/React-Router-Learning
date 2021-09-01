<template>
	<div class="card mb-3" style="max-width: 540px">
		<div class="row g-0" style="width: 540px">
			<div class="col-md-4">
				<div
					:style="{ backgroundImage: `url(${book.thumbnail})` }"
					class="book"
				></div>
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<div class="card-title">{{ book.title }}</div>
					<div class="card-text">
						{{ book.contents || '정보가 없습니다' }}
					</div>
					<div class="authors">
						<div class="card-text">저자:&nbsp;</div>
						<div v-for="author in book.authors" :key="author" class="card-text">
							{{ author || '정보가 없습니다' }}
						</div>
					</div>
					<div class="card-text">
						출판사: {{ book.publisher || '정보가 없습니다' }}
					</div>
					<div class="card-text">
						도서 정가: {{ book.price || '정보가 없습니다' }}원
					</div>
					<div class="card-text">
						도서 판매가: {{ book.sale_price || '정보가 없습니다' }}원
					</div>
					<div class="btn btn-primary">상세정보</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		book: {
			type: Object,
			default: () => ({})
		}
	}
}
</script>

<style lang="scss" scoped>
.book {
	$width: 180px;
	width: $width;
	height: $width * 3 / 2;
	border-radius: 5px;
	background-color: $gray-400;
	background-size: cover;
	overflow: hidden;
}

.card-body {
	padding: 5%;
	height: 100%;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	.card-title {
		font-size: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.card-text {
		color: $gray-600;
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.authors {
		display: flex;
	}
}
</style>
