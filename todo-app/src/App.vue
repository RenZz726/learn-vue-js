<script setup>
import { ref, reactive, computed } from "vue";
import Header from "./components/Header.vue";
import TodoItem from "./components/TodoItem.vue";

const inputValue = ref("");
const tasks = ref([]);
const inputRef = ref(null);
const editingIndex = ref(null);

const handleSubmit = () => {
  const value = inputValue.value.trim();
  console.log(editingIndex.value, " ", value);
  if (value) {
    if (editingIndex.value !== null) {
      tasks.value[editingIndex.value] = value;
      editingIndex.value = null;
    } else {
      tasks.value.push(inputValue.value);
    }

    inputValue.value = "";
    inputRef.value.focus();
  }
};
const edit = (index) => {
  inputValue.value = tasks.value[index];
  inputRef.value.focus();
  editingIndex.value = index;
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>
<template>
  <div>
    <Header />
    <form @submit.prevent="handleSubmit">
      <input ref="inputRef" type="text" v-model="inputValue" />
      <button type="submit">Add</button>
    </form>
    <div>
      <h2>TodoList</h2>
      <ul>
        <TodoItem
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
          :index="index"
          @edit="edit"
          @delete="deleteTask"
        />
      </ul>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style-type: decimal;
}
</style>

<!-- To do


Infinite scroll
<template>
   
  <div ref="container" style="height: 300px; overflow-y: auto">
       
    <div v-for="item in items" :key="item" class="item">
            Item {{ item }}   
    </div>
       
    <p v-if="loading">Loading...</p>
     
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const items = ref([])const loading = ref(false)const container = ref(null)let count = 0
const loadMore = () => {  loading.value = true  setTimeout(() => {    for (let i = 0; i < 10; i++) {      items.value.push(++count)    }    loading.value = false  }, 500)}
onMounted(() => {  loadMore()  container.value.addEventListener('scroll', () => {    const { scrollTop, scrollHeight, clientHeight } = container.value    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading.value) {      loadMore()    }  })})
</script>

Custom directive - auto focus // main.jsimport { createApp } from 'vue'import
App from './App.vue' const app = createApp(App) app.directive('focus', { 
mounted(el) {    el.focus()  }}) app.mount('#app')
<input v-focus placeholder="Auto focused" />
Reusable component - modal
<template>
   
  <div
    v-if="modelValue"
    class="overlay"
    @click.self="$emit('update:modelValue', false)"
  >
       
    <div class="modal">
            <slot />     
      <button @click="$emit('update:modelValue', false)">Close</button>   
    </div>
     
  </div>
</template>
<script setup>
defineProps(['modelValue'])defineEmits(['update:modelValue'])
</script>
<style>
.overlay {  position: fixed;  inset: 0;  background: rgba(0,0,0,0.5);}.modal {  background: white;  padding: 20px;  margin: 100px auto;  width: 300px;}
</style>
<template>
    <button @click="show = true">Open</button> 
  <Modal v-model="show"
    >   
    <h3>Hello Modal</h3>
     
  </Modal>
</template>
<script setup>
import { ref } from 'vue'import Modal from './Modal.vue'
const show = ref(false)
</script> -->
