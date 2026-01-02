<script setup>
import { provide, reactive, ref } from "vue";
import Inject from "./Inject.vue";

const name = ref("Lue");
const details = reactive({
    age: 20,
    gender: "female",
    address: "not available",
    phone: "not available"
})

provide("name", name);
provide("details", details);
</script>
<template>
  <p>this is parent page</p>
  <Inject />
</template>
