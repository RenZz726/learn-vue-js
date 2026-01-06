<template>
  <v-app>
    <!-- NAVIGATION DRAWER -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav>
        <v-list-item title="Home" to="/" prepend-icon="mdi-home" />

        <v-list-item title="About" to="/about" prepend-icon="mdi-information" />
      </v-list>
    </v-navigation-drawer>

    <!-- APP BAR -->
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>Vuetify Demo</v-app-bar-title>
    </v-app-bar>

    <!-- PAGE CONTENT -->
    <v-main>
      <router-view />

      <ExpandTransition />
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
import Cards from "./components/vCards/Cards.vue";

const drawer = ref(false);
</script>
