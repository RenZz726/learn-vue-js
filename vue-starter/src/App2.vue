<script setup>
//     import {ref} from "vue";
// export default {
//   setup() {
//     const name = ref("John");
//     const status = ref("active");
//     const tasks = ref(["run", "jump", "sit", "hide"]);

//     const toogleStatus = () => {
//       if (status.value === "active") status.value = "pending";
//       else if (status.value === "pending") status.value = "inactive";
//       else status.value = "active";
//     };
//     return {
//       name,
//       status,
//       tasks,
//       toogleStatus,
//     };
//   },
// };
//
import { ref } from "vue";
const name = ref("John");
const status = ref("active");
const tasks = ref(["run", "jump", "sit", "hide"]);
const newTask = ref("");
const text = ref("");
const textArea = ref("");
const checked = ref(false);

const toogleStatus = () => {
  if (status.value === "active") status.value = "pending";
  else if (status.value === "pending") status.value = "inactive";
  else status.value = "active";
};

const addTask = () => {
  if (newTask.value.trim() !== "") tasks.value.push(newTask.value);
  newTask.value = "";
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>
<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <input name="newTask" v-model="newTask" />
    <br />
    <span>the value here is {{ textArea }}</span>
    <br />
    <input type="text" name="text" v-model="text" />
    <textarea rows="2" cols="10"> {{ textArea }}</textarea>
    <label for="gender">Male</label>
    <input type="checkbox" name="gender" v-model="checked" />
    <button type="submit">Add Task</button>
  </form>
  <h2>Tasks</h2>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <!-- <a v-bind:href="link">google.com</a> -->
  <!-- <a :href="link">google.com</a> -->
  <!-- can use :href is the variable is of same name -->
  <br />
  <!-- <button v-on:click="toogleStatus">Change State</button> -->
  <button @click="toogleStatus">Change State</button>
</template>
<style></style>
