<script setup>
import { useCounterStore } from "@/stores/counter";

const storeCounter = useCounterStore();
</script>
<template>
  <p>Counter: {{ storeCounter.count }}</p>
</template>
