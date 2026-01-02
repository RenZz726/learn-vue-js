<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { Job } from './types/Job'
import type { OrderTerms } from './types/OrderTerm'
import JobList from './components/JobList.vue'
export default defineComponent({
  name: 'App',
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      {
        title: 'farm worker',
        location: 'lon lon ranch',
        salary: 30000,
        id: '1',
      },
      {
        title: 'quarryman',
        location: 'death mountain',
        salary: 40000,
        id: '2',
      },
      {
        title: 'flute player',
        location: 'the lost woods',
        salary: 35000,
        id: '3',
      },
      {
        title: 'fisherman',
        location: 'lake hylia',
        salary: 20000,
        id: '4',
      },
      {
        title: 'prison guard',
        location: 'gerudo valley',
        salary: 32000,
        id: '5',
      },
    ])

    const order = ref<OrderTerms>('title')

    const handleClick = (term: OrderTerms) => {
      order.value = term
    }
    return { jobs, order, handleClick}
  },
})
</script>
<template>
  <div>
    <button @click="handleClick('title')">Sort by title</button>
    <button @click="handleClick('location')">Sort by location</button>
    <button @click="handleClick('salary')">Sort by salary</button>
    <JobList :jobs="jobs" :order="order"/>
  </div>
</template>
