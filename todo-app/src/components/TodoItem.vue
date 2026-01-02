<script setup>
const props = defineProps({
  task: String,
  index: Number,
});

const emit = defineEmits(["delete", "edit"]);
const deleteTodo = () => {
  emit("delete", props.index);
};
const editTodo = () => {
  emit("edit", props.index);
}
</script>
<template>
  <li>{{ task }} <button @click="editTodo()">Edit</button><button @click="deleteTodo()">X</button></li>
</template>

<!-- 
1. use filter for deleting 
2. use Date.now as id
-->