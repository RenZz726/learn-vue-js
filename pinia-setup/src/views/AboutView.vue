<script setup>
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();

</script>
<template>
  <div class="about">
    <h1>This is about page</h1>
    <button @click="storeCounter.increment">{{ storeCounter.count }}</button>
  </div>
</template>
