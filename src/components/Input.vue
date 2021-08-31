<template>
	<section>
		<select class="form-select">
			<option selected>도서 제목</option>
			<option>ISBN</option>
			<option>출판사</option>
			<option>인명</option>
		</select>
		<input
			class="form-control"
			type="text"
			placeholder="찾으시는 도서의 정보를 검색해 주세요!"
		/>
		<select class="form-select">
			<option selected>10</option>
			<option>20</option>
			<option>30</option>
		</select>
		<button class="btn btn-primary">검색하기</button>
	</section>
</template>

<script>
export default {}
</script>

<style lang="scss">
section {
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
