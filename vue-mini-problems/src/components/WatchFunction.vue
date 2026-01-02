<script setup>
import { reactive, ref, watch, watchEffect, onMounted } from "vue";

const count = ref(0);
const form = reactive({
  name: "don",
  age: 22,
});
const price = ref(100);
const quantity = ref(2);
const item = ref("");
const items = ref([]);

const increment = () => {
  count.value++;
  form.age = form.age + 2;
  quantity.value = quantity.value + 1;
};

const handleEnter = () => {
  if (item.value.trim() !== "") {
    items.value.push(item.value);
    item.value = "";
    localStorage.setItem("items", JSON.stringify(items.value));
  }
  return;
};
watch(items, () => {
  //   console.log("Total = ", price.value * quantity.value);
  localStorage.setItem("items", JSON.stringify(items.value));

  console.log(items.value);
});

// watch(count, (newValue, oldValue) => {
//   console.log(oldValue, "->", newValue);
// });

// watch(
//   form,
//   (newVal) => {
//     console.log("change ", newVal);
//   },
//   { deep: true }
// );
// watch(
//   () => form.age,
//   (newAge) => {
//     console.log("new age = ", newAge);
//   }
// );
onMounted(() => {
  console.log(form);
  items.value = JSON.parse(localStorage.getItem("items"));
});
</script>
<template>
  <input type="text" @keydown.enter="handleEnter" v-model="item" />
  <div>
    <span>Count - {{ count }}</span>
    <span>Age - {{ form.age }}</span>
    <span>Total - {{ price * quantity }}</span>
  </div>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
  <button @click="increment">Increment</button>
</template>
