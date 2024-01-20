<template>
	<div class="name">{{ name }}</div>
	<button
		class="btn btn-primary"
		v-on:click="consoleLog"
	>
	Click
	</button>
</template>

<script>
export default {
	setup() {
		const name = 'my vue project';

		const consoleLog = () => {
			console.log('hello world');
		};

		return {
			name,
			consoleLog,
		};
	}
}
</script>

<style>
	.name {
		color: red;
	}
</style>