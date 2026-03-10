<template>
    
    <div v-if="!canEdit">
        <input type="checkbox" v-model="CheckBoxValue" @change="updateIsChecked"><span>{{ description }}</span>
        <button @click="changeEdit">edit</button>
    </div>
    <div v-else>
        <input type="text" v-model="descriptionInput">
        <button @click="validateName">validate</button>
        <button @click="$emit('delete-list',id)">delete</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { updateTask } from "../services/TaskService"

const props = defineProps({
    id: Number,
    description: String,
    isChecked: Boolean
})

const canEdit = ref(false)
const descriptionInput = ref(props.description)
const CheckBoxValue = ref(props.isChecked)

const emits = defineEmits([ 'delete-list', 'update-list'])

function changeEdit() {
    descriptionInput.value = props.description
    canEdit.value = !canEdit.value
}

async function validateName() {
    await updateTask(props.id, descriptionInput.value, CheckBoxValue.value) 
    canEdit.value = !canEdit.value
    emits('update-list')
}

async function updateIsChecked() {
    await updateTask(props.id, props.description, CheckBoxValue.value)
}
</script>

<style scoped>
</style>