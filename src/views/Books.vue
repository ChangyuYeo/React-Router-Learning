<template>
	<section>
		<template v-if="loading">
			<ASkeleton active :paragraph="{ rows: 5 }" />
		</template>
		<template v-else>
			<div class="headline">
				<ACard hoverable style="width: 240px">
					<div class="thumbnail">
						<img
							v-if="book[0]?.thumbnail"
							:src="`${book[0]?.thumbnail}`"
							width="200"
						/>
						<i v-else class="bi bi-file-image-fill"></i>
					</div>
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
						<span v-if="book[0]?.price">&nbsp;원</span>
					</div>
					<div class="detail-content">
						<span class="badge">판매가</span>
						{{ book[0]?.sale_price || '정보가 없습니다.' }}
						<span v-if="book[0]?.sale_price">&nbsp;원</span>
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
		</template>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
	computed: {
		...mapState(['book', 'loading']),
		datetime() {
			return this.book[0]?.datetime.substring(0, 10) || '정보가 없습니다.'
		}
	},

	methods: {
		price(x: number) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
		}
	},

	created() {
		const book = this.$route.params.id
		this.$store.dispatch('searchBookInfo', book)
	}
})
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
		.thumbnail {
			background-color: $gray-400;
			height: 320px;
			display: flex;
			justify-content: center;
			.bi {
				margin: auto 0;
				font-size: 100px;
				color: rgba($color: $gray-600, $alpha: 0.7);
			}
		}

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
		height: 200px;
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
