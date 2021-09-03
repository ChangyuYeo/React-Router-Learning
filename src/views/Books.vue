<template>
	<section>
		<div class="headline">
			<ACard hoverable style="width: 240px">
				<img :src="`${book[0]?.thumbnail}`" width="200" />
			</ACard>
			<div class="details">
				<div class="title">{{ book[0]?.title || '정보가 없습니다.' }}</div>
				<div class="detail-content">
					<span class="badge">저자</span>
					{{ book[0]?.authors[0] || '정보가 없습니다.' }}
					<span v-if="book[0]?.authors.length >= 2">&nbsp;외 1</span>
				</div>
				<div class="detail-content">
					<span class="badge">출판사</span>
					{{ book[0]?.publisher || '정보가 없습니다.' }}
				</div>
				<div class="detail-content">
					<span class="badge">출판날짜</span> {{ datetime }}
				</div>
				<div class="detail-content">
					<span class="badge">정가</span>
					{{ book[0]?.price || '정보가 없습니다.' }}
				</div>
				<div class="detail-content">
					<span class="badge">판매가</span>
					{{ book[0]?.sale_price || '정보가 없습니다.' }}
				</div>
				<div class="detail-content">
					<span class="badge">판매 상태</span>
					{{ book[0]?.status || '정보가 없습니다.' }}
				</div>
			</div>
		</div>
		<ADivider />
		<div class="content">
			<div>책소개</div>
			<div>
				{{ book[0]?.contents || '정보가 없습니다.' }}
			</div>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState(['book']),
		datetime() {
			return this.book[0]?.datetime.substring(0, 10) || '정보가 없습니다.'
		}
	},

	created() {
		const book = this.$route.params.id
		this.$store.dispatch('searchBookInfo', book)
	}
}
</script>

<style lang="scss" scoped>
section {
	width: 60%;
	margin: auto;
	margin-top: 50px;
	.headline {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 60px;
		margin-bottom: 50px;
		.details {
			* {
				margin-bottom: 10px;
				font-size: 20px;
				color: $gray-700;
			}
			.title {
				width: 340px;
				font-size: 30px;
				font-weight: 600;
				color: $gray-900;
				white-space: pre-line;
			}
			.detail-content {
				display: flex;
				align-items: center;
				span {
					margin: 0;
					font-size: 16px;
					color: $gray-600;
				}
				.badge {
					font-family: 'Noto Sans KR', sans-serif;
					font-weight: 400;
					font-size: 14px;
					color: $gray-500;
					padding: 0;
					margin: 0;
					margin-right: 10px;
				}
			}
		}
	}
	.content {
		margin-top: 40px;
		font-size: 16px;
		line-height: 1.8;
		:first-child {
			font-size: 20px;
			color: $gray-500;
			margin-bottom: 10px;
		}
	}
}
</style>
