<template>
    <h1>Memo</h1>
	<TodoForm :editType="memo"/>
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