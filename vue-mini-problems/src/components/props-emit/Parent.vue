<script setup>
import { ref } from "vue";
import Child from "./Child.vue";
import InnerChild from "./InnerChild.vue";

const name = ref("Zara");
const arr = ref(["para1", "para2", "para3", "para4"]);
</script>
<template>
  <Child
    :name="name"
    @add="(value) => console.log('Add clicked', value)"
    @remove="console.log('Remove clicked')"
  />
  <div>
    <h2>Banner</h2>
    <ul>
      <InnerChild v-for="item in arr"> {{ item }} </InnerChild>
    </ul>
  </div>
</template>
