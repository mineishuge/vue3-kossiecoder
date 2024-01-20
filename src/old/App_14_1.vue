<template>
	<div v-show="toggle">true</div>
	<div v-show="!toggle">false</div>
	<button @click="onToggle">Toggle</button>

	<div class="container">
		<h2>To-Do List</h2>
		<form @submit.prevent="onSubmit" >
			<div class="d-flex">
				<div class="flex-grow-1 mr-2">
					<input 
						class="form-control"
						type="text" 
						v-model="todo"
						placeholder="Type new to-do"
					>
				</div>
				<div>
					<button
						class="btn btn-primary"
						type="submit"
					>
					Add
					</button>
				</div>
			</div>
			<!-- <div v-if="hasError" style="color: red"> -->
			<div v-if="hasError" style="color: red">
				This field cannot be empty
			</div>
		</form>
		<div class="card mt-2"
			v-for="todo in todos"
			:key="todo.id"
		>
			<div class="card-body p-2">
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						v-model="todo.completed"
					>
					<label class="form-check-label">
						{{ todo.subject }}
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const toggle = ref(false)
		const todo = ref('');
		const todos = ref([]);
		const hasError = ref(false);

		const onSubmit = () => {
			if (todo.value === '') {
				hasError.value = true;
			}
			else {
				todos.value.push({
					id: Date.now(),
					subject: todo.value,
					completed: false
				});
				todo.value = ''
			}
		};

		const onToggle = () => {
			toggle.value = !toggle.value;
		};

		return {
			todo,
			todos,
			toggle,
			hasError,
			onSubmit,
			onToggle,
		};
	}
}
</script>

<style>
	.name {
		color: red;
	}
</style>