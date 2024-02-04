<template>
    <h1>Create Todo</h1>
	<TodoForm :editType="create"/>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'

export default {
	components: {
		TodoForm
	},
}
</script>

<style>

</style>