<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isWithColor: String,
});

const copyUrl = async (url) => {
    await navigator.clipboard.writeText(url);
}
</script>
<template>
  <v-card class="ma-4">
    <v-row>
      <v-col v-for="n in 200" :key="n" cols="1">
        <v-card
          @click="
            copyUrl(
              `https://picsum.photos/500/300?image=${n * 5 + 10}${
                isWithColor ? '' : '&grayscale'
              }`
            )
          "
        >
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}${
              isWithColor ? '' : '&grayscale'
            }`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}${
              isWithColor ? '' : '&grayscale'
            }`"
            aspect-ratio="1"
            cover
          >
            <template v-slot:placeholder>
              <v-row align="center" class="fill-height ma-0" justify="center">
                <v-progress-circular
                  color="grey-lighten-5"
                  indeterminate
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
                                                          