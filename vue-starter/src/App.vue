<script>
export default {
  data() {
    return {
      name: "Don",
      status: "active",
      tasks: ["run", "jump", "sit", "hide"],
      link: "https://www.google.com/",
    };
  },
  methods: {
    toogleStatus() {
      if (this.status === "active") this.status = "pending";
      else if (this.status === "pending") this.status = "inactive";
      else this.status = "active";
    },
  },
};
</script>
<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <h2>Tasks</h2>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">google.com</a> -->
  <a :href="link">google.com</a>
  <!-- can use :href is the variable is of same name -->
  <br />
  <!-- <button v-on:click="toogleStatus">Change State</button> -->
  <button @click="toogleStatus">Change State</button>
</template>
<style></style>
