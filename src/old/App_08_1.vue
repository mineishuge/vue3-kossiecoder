<template>
	<div class="name">{{ name }}</div>
	<input :type="type" :value="name">
	<button
		class="btn btn-primary"
		@click="updateName"
	>
	Click
	</button>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const name = ref('Kossie');
		const type = ref('text');

		const updateName = () => {
			name.value = 'Coder';
			type.value = 'number';
		};

		return {
			name,
			type,
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