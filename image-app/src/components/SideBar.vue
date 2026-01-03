<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["selectOption"]);
const selectOption = (isColor) => {
    console.log(isColor)
  emits("selectOption", isColor);
};
</script>
<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra_a88@gmailcom"
        title="Sandra Adams"
      ></v-list-item>
      <v-divider></v-divider>
      <v-list-item
        @click="selectOption(true)"
        prepend-icon="mdi-image"
        title="Color Gallery"
      >
      </v-list-item>
      <v-list-item
        @click="selectOption(false)"
        prepend-icon="mdi-dialpad"
        title="GraySpace Gallery"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
