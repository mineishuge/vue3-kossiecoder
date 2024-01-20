<template>
	<div class="name">{{ name }}</div>
</template>

<script>
export default {
	setup() {
		const name = 'my vue project';

		return {
			name
		};
	}
}
</script>

<style>
	.name {
		color: red;
	}
</style>