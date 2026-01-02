<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import Header from "./components/Header.vue";
import UserDetails from "./components/UserDetails.vue";
import { User } from "./type/User";
type Color = "red" | "blue" | "green";

const name = ref<string>("John");
const age = ref<number>(21);
const isMale = ref<boolean>(true);
const color = ref<Color>("red");

const user: User = reactive({
  name: "Adam",
  age: 34,
});

const isAdult = computed(() => user.age > 18);

const msg = ref("Hello TypeScript");
</script>
<template>
  <div>
    <Header :msg="msg" />
    <UserDetails :name="user.name" :age="user.age"/>
  </div>
</template>
