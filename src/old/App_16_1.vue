<!-- 1. 추가된 todo 삭제 : v-for="(todo, index) in todos" -->
<!-- 2. todos에 todo가 하나도 없을 시 문구 출력(추가된 Todo가 없습니다.) : v-if="!todos.length" -->

<template>
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
		<div v-if="!todos.length">
			추가된 Todo가 없습니다.
		</div>
		<div class="card mt-2"
			v-for="(todo, index) in todos"
			:key="todo.id"
		>
			<div class="card-body p-2 d-flex align-items-center">
				<div class="form-check flex-grow-1">
					<input
						class="form-check-input"
						type="checkbox"
						v-model="todo.completed"
					>
					<label 
						class="form-check-label"
						:class="{ todo: todo.completed }"
					>
						{{ todo.subject }}
					</label>
				</div>
				<div>
					<button 
						class="btn btn-danger btn-sm"
						@click="deleteTodo(index)"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const todo = ref('');
		const todos = ref([]);
		const hasError = ref(false);
		const todoStyle = {
			textDecoration: 'line-through',
			color: 'gray'
		};

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

		const deleteTodo = (index) => {
			// console.log('delete todo')
			todos.value.splice(index, 1)
		};

		return {
			todo,
			todos,
			hasError,
			todoStyle,
			onSubmit,
			deleteTodo,
		};
	}
}
</script>

<style>
	.todo {
		color: gray;
		text-decoration: line-through;
	}
</style>