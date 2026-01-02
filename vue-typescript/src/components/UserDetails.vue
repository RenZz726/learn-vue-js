<script setup lang="ts">
import { User } from "@/type/User";
import { ref } from "vue";
const props = defineProps<User>();
const inputValue = ref<string>("");
const handleClick = (e: Event) => {
  const input = e.target as HTMLInputElement;
  inputValue.value = input.value;
};
</script>
<template>
  <div>
    <h2>User Details</h2>
    <p>{{ props.name }} - {{ props.age }}</p>
    <span>{{ inputValue }}</span>
    <input type="text" @change="handleClick" />
  </div>
</template>
