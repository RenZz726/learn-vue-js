<script setup>
import { ref } from "vue";

const open = ref(false);
</script>
<template>
  <div>
    <button @click="open = true">Open Modal</button>
  </div>
  <Teleport to="body">
    <div v-if="open" class="overlay" @click.self="open = false">
      <div class="modal">
        <h3>This is the modal</h3>
        <button @click="open = false">Close modal</button>
      </div>
    </div>
  </Teleport>
</template>

<style>
.overlay {
  inset: 0;
  position: fixed;
  background-color: rgba(1, 1, 1, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background-color: #fff;
  color: #000;
  padding: 12px;
  border-radius: 5px;
}
</style>
