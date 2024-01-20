<!-- 1. ./components에 TodoSimpleForm.vue 파일을 만들고 --> 
<!-- 2. todo 및 add 관련 form 태그를 해당 파일로 이동 시킴 -->
<!-- 3. 그러나 이 상태에서는 동작하지 않음. -->

<template>
	<div class="container">
		<h2>To-Do List</h2>
		<TodoSimpleForm />
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
import TodoSimpleForm from './components/TodoSimpleForm.vue';

export default {
	components: {
		TodoSimpleForm
	},
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