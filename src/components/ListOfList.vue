<template>
    <List v-for="list in lists" :key="list.list_id" :id="list.list_id" :name="list.list_name" @open-list="openList" @delete-list="removeList" @update-list="updateList"/>
    <button @click="addList">Add</button>
</template>

<script setup>
import List from './List.vue';
import { getAllList, createList, deleteList } from '../services/listService';
import { ref, onMounted } from 'vue';

const emit = defineEmits(['open-list'])

var lists = ref([])

onMounted(async () => {
    lists.value = await getAllList()
})

function openList(id) {
  emit('open-list', id)
}

async function addList() {
    await createList('new List')
    lists.value = await getAllList()
}

async function removeList(id) {
    await deleteList(id)
    lists.value = await getAllList()
}

async function updateList() {
    lists.value = await getAllList()
}

</script>

<style scoped>
</style>