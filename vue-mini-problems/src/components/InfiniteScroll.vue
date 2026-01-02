<script setup>
import { onMounted, ref } from "vue";

const items = ref([]);
const count = ref(0);
const isLoading = ref(false);
const containerRef = ref(null);

const loadMore = () => {
  isLoading.value = true;
  setTimeout(() => {
    for (let i = 0; i < 50; i++) {
      items.value.push(++count.value);
    }
    isLoading.value = false;
  }, 1000);
};
onMounted(() => {
  loadMore();
  containerRef.value.addEventListener("scroll", () => {
    const { scrollTop, clientHeight, scrollHeight } = containerRef.value;
    if (scrollTop + clientHeight >= scrollHeight) loadMore();
  });
});
</script>
<template>
  <div ref="containerRef" style="height: 350px; overflow-y: auto">
    <ul>
      <li v-for="item in items" :key="item">item {{ item }}</li>
    </ul>
    <div v-if="isLoading">Loading...</div>
  </div>
</template>
