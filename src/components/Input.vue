<template>
	<section>
		<select v-model="selected" class="form-select">
			<option
				v-for="option in options"
				:key="option.value"
				:value="option.value"
			>
				{{ option.text }}
			</option>
		</select>
		<input
			v-model="search"
			@keyup.enter="searchBooks"
			class="form-control"
			type="text"
			placeholder="찾으시는 도서의 정보를 자유롭게 검색해 주세요!"
		/>
		<select v-model="size" class="form-select">
			<option
				v-for="number in numbers"
				:key="number.value"
				:value="number.value"
			>
				{{ number.text }}
			</option>
		</select>
		<button v-if="!search" class="btn btn-primary" disabled>
			<i class="bi bi-search"></i>
		</button>
		<button v-else @click="searchBooks" class="btn btn-primary">
			<i class="bi bi-search"></i>
		</button>
	</section>
</template>

<script>
export default {
	data() {
		return {
			selected: 'title',
			options: [
				{ text: '도서 제목', value: 'title' },
				{ text: '출판사', value: 'publisher' },
				{ text: '인명', value: 'person' }
			],
			search: '',
			size: 20,
			numbers: [
				{ text: '10개씩', value: 10 },
				{ text: '20개씩', value: 20 },
				{ text: '30개씩', value: 30 },
				{ text: '40개씩', value: 40 },
				{ text: '50개씩', value: 50 }
			]
		}
	},

	methods: {
		searchBooks() {
			if (!this.search) return
			const datas = {
				query: this.search,
				target: this.selected,
				size: this.size
			}
			this.$store.dispatch('searchBooks', datas)
		}
	}
}
</script>

<style lang="scss" scoped>
section {
	margin-top: 2%;
	display: flex;
	flex-direction: row;
	* {
		margin-right: 10px;
	}
	:last-child {
		margin-right: 0;
	}
	:is(.form-select, .btn) {
		width: 120px;
	}
}
</style>
