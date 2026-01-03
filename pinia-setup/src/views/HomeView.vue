<script setup>
import Counter from "@/components/Counter.vue";
import { useCounterStore } from "@/stores/counter";
const storeCounter = useCounterStore();
</script>
<template>
  <div class="home">
    <h1>This is home page</h1>
    <button @click="storeCounter.increment">+</button>
    <button @click="storeCounter.decrement">-</button>
  </div>
  <hr />
  <div>
    <p>This counter is : {{ storeCounter.oddOrEven }}</p>
    <input type="number" v-model="storeCounter.count" />
  </div>
  <Counter />
</template>
<style>
button {
  font-size: 24px;
  margin: 12px;
}
</style>
