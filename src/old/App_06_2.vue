<template>
	<div class="name">{{ name }}</div>
	<button
		class="btn btn-primary"
		v-on:click="updateName"
	>
	Click
	</button>
</template>

<script>
export default {
	setup() {
		let name = 'my vue project';

		const updateName = () => {
			name = 'my vue project2';
			console.log(name)
			//위와 같이 로그를 출력해보면, name 변수 및 값에는 문제 없지만,
			//이 변수가 template에 적용되지 않음.
		};

		return {
			name,
			updateName,
		};
	}
}
</script>

<style>
	.name {
		color: red;
	}
</style>