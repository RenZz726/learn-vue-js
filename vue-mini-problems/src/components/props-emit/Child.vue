<script setup>
import { useAttrs } from "vue";

const props = defineProps({
  name: String,
});
const emit = defineEmits(["add", "remove"]);

const add = () => {
  emit("add", 4);
};
const remove = () => {
  emit("remove", 4);
};

const attr = useAttrs();
</script>
<template>
  <div style="padding: 12px">
    <h3 v-bind="attr">{{ props.name }}</h3>
    <button @click="$emit('add', 4)">Add</button>
    <button @click="remove">Remove</button>
  </div>
</template>
