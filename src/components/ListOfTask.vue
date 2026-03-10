<template>
    <Task v-for="task in tasks" :key="task.task_id" :id="task.task_id" :description="task.task_description" :is-checked="!!task.task_isChecked" @update-list="updateTask" @delete-list="removeTask"/>
    <button @click="addtask">Add</button>
</template>

<script setup>
import Task from './Task.vue';
import { getAllTaskFromList, createTask, deleteTask } from "../services/TaskService"
import { ref, onMounted } from 'vue';

const props = defineProps({
    list_id:Number
})

const tasks = ref([])

onMounted(async () => {
    tasks.value = await getAllTaskFromList(props.list_id)
})

async function addtask() {
    await createTask(props.list_id,'')
    tasks.value = await getAllTaskFromList(props.list_id)
}

async function removeTask(id) {
    await deleteTask(id)
    tasks.value = await getAllTaskFromList(props.list_id)
}

async function updateTask() {
    tasks.value = await getAllTaskFromList(props.list_id)
}

</script>

<style scoped>
</style>