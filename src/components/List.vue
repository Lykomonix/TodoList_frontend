<template>
    <div v-if="!canEdit">
        <button @click="$emit('open-list',id)">{{ name }}</button>
        <button @click="changeEdit">edit</button>
    </div>
    <div v-else>
        <input type="text" v-model="nameInput">
        <button @click="validateName">validate</button>
        <button @click="$emit('delete-list',id)">delete</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { updateList } from '../services/listService'

const canEdit = ref(false)
const nameInput = ref('')

const props = defineProps({
    id: Number,
    name: String
})

const emits = defineEmits(['open-list', 'delete-list', 'update-list'])

function changeEdit() {
    nameInput.value = props.name
    canEdit.value = !canEdit.value
}

async function validateName() {
    await updateList(props.id, nameInput.value) 
    canEdit.value = !canEdit.value
    emits('update-list')
}
</script>

<style scoped>
</style>