<template>
  <button v-if="currentList" @click="closeList">Back</button>
  <h1>Todo List App</h1>
  <ListOfList v-if="!currentList" @open-list="openList"/>
  <ListOfTask v-if="currentList" :list_id="currentList"/>
</template>

<script setup>
import { ref } from 'vue';
import ListOfList from './components/ListOfList.vue';
import ListOfTask from './components/ListOfTask.vue';

const currentList = ref(null);

function openList(id) {
  currentList.value = id
}

function closeList() {
  currentList.value = null
}
</script>

<style scoped>
</style>
