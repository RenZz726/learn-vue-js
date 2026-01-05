<template>
  <v-container class="mt-6">
    <v-row>
      <v-col>
        <v-card class="pa-4 mb-6" max-width="500">
          <h2 class="mb-2">Welcome</h2>

          <v-text-field
            v-model="name"
            label="Enter your name"
            variant="outlined"
            density="compact"
          />
          <v-btn color="primary" @click="submit"> Submit </v-btn>
        </v-card>
      </v-col>
      <v-col>
        <Discord />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-4">Card One</v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="pa-4">Card Two</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Discord from "@/components/Discord.vue";
import { ref } from "vue";

const name = ref("");

const submit = () => {
  console.log("Name:", name.value);
};
</script>
