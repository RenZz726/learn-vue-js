<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- <h2 class="text-center">Todo App</h2> -->
        <v-sheet rounded="rounded">
          <v-text-field
            label="Enter Todo"
            v-model="todo.value"
            @keydown.enter="add"
          ></v-text-field>
          <v-card-actions>
            <v-btn @click.prevent="add">ADD</v-btn>
          </v-card-actions>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const todo = ref({
  id: "",
  task: "",
  done: false,
});
const todos = ref([]);

const add = () => {
  if (todo.value) {
    todos.value.push({
      id: new Date(),
      task: todo.value,
    });
    console.log(todos.value);
  }
};
</script>
