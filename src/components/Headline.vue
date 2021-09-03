<template>
	<div class="headline">
		<p>Search for a book.</p>
		<p>검색창을 이용해 찾고 싶은 책을 검색해 주세요!</p>
		<p>원하는 책을 찾았다면 책에 대한 상세정보를 얻을 수 있어요!</p>
	</div>
</template>

<style lang="scss" scoped>
.headline {
	margin-top: 11%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	* {
		margin: 0;
		padding-bottom: 1.2%;
	}
	:nth-child(1) {
		font-size: 50px;
		font-weight: 600;
		color: $primary;
	}
	:nth-child(2) {
		font-size: 20px;
	}
	:nth-child(3) {
		font-size: 15px;
		color: $gray-500;
	}
}
</style>
