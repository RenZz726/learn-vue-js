<script setup>
import { inject } from "vue";

const name = inject("name");
const details = inject("details");
const isEmployed = inject("employed", true)
</script>
<template>
  <p>This is Inject child with name = {{ name }}</p>
  <ul>
    <li>{{ details.age }} yr</li>
    <li>{{ details.gender }}</li>
    <li>Employed: {{ isEmployed }}</li>
  </ul>
</template>
