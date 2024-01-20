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
import { ref } from 'vue';
// import { reactive } from 'vue';
// "reactive는 'value'를 사용하지 못하고, object와 arrary를 사용할 수 있다.

export default {
	setup() {
		// const name = ref('my vue project');
		const name = ref({
			id: 1
		});

		const updateName = () => {
			// name.value = 'my vue project2';
			//name.id = 2; //"reactive"를 사용할 경우.
			name.value.id = 2;
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