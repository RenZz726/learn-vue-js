<script setup>
import Home from "./Home.vue";
import About from "./About.vue";
import { ref } from "vue";

const currentTab = ref("Home");
const tabs = {
  Home,
  About,
};
</script>
<template>
  <div>
    <button
      v-for="(_, tab) in tabs"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="() => (currentTab = tab)"
      :key="tab"
    >
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>
<style scoped>
.tab-button {
  padding: 6px;
  background-color: transparent;
  border: 1px solid blue;
  border-radius: 2px;
}
.active {
  background-color: red;
}
</style>
