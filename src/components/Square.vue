<template>
	<div class="square square-secondary square-1"></div>
	<div class="square square-secondary square-2"></div>
	<div class="square square-primary square-3"></div>
	<div class="square square-primary square-4"></div>
	<div class="square square-primary square-5"></div>
	<div class="square square-primary square-6"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.square {
	overflow: hidden;
	position: absolute;
	&.square-1 {
		top: 13%;
		left: 19%;
		height: 60px;
		width: 60px;
		transform: rotate(32deg);
		border-radius: 10px;
	}
	&.square-2 {
		top: 24%;
		left: -100px;
		height: 200px;
		width: 200px;
		transform: rotate(45deg);
		border-radius: 24px;
	}
	&.square-3 {
		top: 36%;
		right: -70px;
		height: 160px;
		width: 160px;
		transform: rotate(38deg);
		border-radius: 24px;
	}
	&.square-4 {
		top: 22%;
		right: 14%;
		height: 60px;
		width: 60px;
		transform: rotate(76deg);
		border-radius: 13px;
	}
	&.square-5 {
		top: 35%;
		right: 17%;
		height: 32px;
		width: 32px;
		transform: rotate(59deg);
		border-radius: 8px;
	}
	&.square-6 {
		bottom: 60px;
		left: 24%;
		height: 32px;
		width: 32px;
		transform: rotate(59deg);
		border-radius: 8px;
	}
	&.square-secondary {
		background-color: rgba($color: $secondary, $alpha: 0.1);
	}
	&.square-primary {
		background-color: rgba($color: $primary, $alpha: 0.1);
	}

	@include media-breakpoint-down(sm) {
		:is(&.square-1, &.square-4) {
			width: 30px;
			height: 30px;
		}
		&.square-2 {
			width: 100px;
			height: 100px;
			left: -50px;
		}
		&.square-3 {
			width: 80px;
			height: 80px;
			right: -35px;
		}
		:is(&.square-5, &.square-6) {
			width: 20px;
			height: 20px;
		}
	}
}
</style>
