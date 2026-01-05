<template>
  <v-app>
    <v-main>
      <v-container class="mt-10" max-width="500">
        
        <!-- Title -->
        <h2 class="text-h5 mb-4">Simple Task Manager</h2>

        <!-- Input + Button -->
        <v-text-field
          v-model="newTask"
          label="Enter task"
          variant="outlined"
          density="compact"
        />

        <v-btn
          color="primary"
          class="mb-4"
          block
          @click="addTask"
        >
          Add Task
        </v-btn>

        <!-- Task List -->
        <v-list v-if="tasks.length">
          <v-list-item
            v-for="(task, index) in tasks"
            :key="index"
          >
            <v-list-item-title>
              {{ task }}
            </v-list-item-title>

            <template #append>
              <v-btn
                icon="mdi-delete"
                variant="text"
                color="error"
                @click="removeTask(index)"
              />
            </template>
          </v-list-item>
        </v-list>

        <!-- Empty State -->
        <p v-else class="text-medium-emphasis text-center">
          No tasks yet
        </p>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const newTask = ref("");
const tasks = ref([]);

const addTask = () => {
  if (!newTask.value) return;
  tasks.value.push(newTask.value);
  newTask.value = "";
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>
