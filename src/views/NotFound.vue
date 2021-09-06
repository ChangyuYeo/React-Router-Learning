<template>
	<div class="not-found">
		<div class="status">404</div>
		<div class="message">Not Found</div>
		<div class="sub-message">페이지를 찾을수 없습니다 :(</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.not-found {
	line-height: 1.2;
	text-align: center;
	padding: 80px 20px;
	> * {
		margin-bottom: 20px;
	}
	.status {
		font-size: 160px;
		color: $primary;
	}
	.message {
		font-size: 50px;
	}
	.sub-message {
		font-size: 20px;
		color: $gray-500;
	}
}
</style>
