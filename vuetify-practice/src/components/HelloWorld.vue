<template>
  <v-app>

    <!-- NAVBAR -->
    <v-app-bar color="primary" dark>
      <v-app-bar-title>Vuetify Demo</v-app-bar-title>

      <v-spacer />

      <v-btn variant="text">Login</v-btn>
    </v-app-bar>

    <!-- BODY -->
    <v-main>
      <v-container class="mt-6">

        <!-- CARD WITH INPUT -->
        <v-card class="pa-4 mb-6" max-width="500">
          <h2 class="mb-2">Welcome</h2>

          <v-text-field
            v-model="name"
            label="Enter your name"
            variant="outlined"
            density="compact"
          />

          <v-btn color="primary" @click="submit">
            Submit
          </v-btn>
        </v-card>

        <!-- GRID OF CARDS -->
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-4">Card One</v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="pa-4">Card Two</v-card>
          </v-col>
        </v-row>

      </v-container>
    </v-main>

    <!-- FOOTER -->
    <v-footer class="bg-surface-variant">
      <v-container class="text-center">
        © 2026 Vuetify Learning App
      </v-container>
    </v-footer>

  </v-app>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");

const submit = () => {
  console.log("Name:", name.value);
};
</script>
