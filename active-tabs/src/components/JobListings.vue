<script setup>
import { defineProps, onMounted, reactive } from "vue";
import JobList from "./JobList.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});
const state = reactive({
  data: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get("/api/jobs");
    state.data = response.data;
  } catch (error) {
    console.error("Error in fetching jobs ", error);
  } finally {
    state.isLoading = false;
  }
});
</script>
<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div v-if="state.isLoading" class="text-center">
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobList
          v-for="job in state.data.slice(0, limit || state.data.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
    <div v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </div>
  </section>
</template>
