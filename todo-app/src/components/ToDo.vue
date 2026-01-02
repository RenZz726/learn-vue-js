<script setup>
import { ref } from "vue";
const newTodo = ref("");
const todos = ref([]);
const addTodo = () => {
  if (!newTodo.value)
    return todos.value.push({
      id: Date.now(),
      text: newTodo.value,
      done: false,
    });
  newTodo.value = "";
};
const toggle = (todo) => {
  todo.done = !todo.done;
};
const remove = (id) => {
  todos.value = todos.value.filter((t) => t.id !== id);
};
</script>
<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add todo" />
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span :style="{ textDecoration: todo.done ? 'line-through' : '' }">
          {{ todo.text }}</span
        >
        <button @click="toggle(todo)">Toggle</button>
        <button @click="remove(todo.id)">X</button>
      </li>
    </ul>
  </div>
</template>
