<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import type { Job } from '@/types/Job'
import type { OrderTerms } from '@/types/OrderTerm'
export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>,
    },
    order: {
      required: true,
      type: String as PropType<OrderTerms>,
    },
  },
  setup(props) {
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1
      })
    })
    return {orderedJobs}
  },
})
</script>
<template>
  <div>
    <p>ordered by: {{ order }}</p>
    <ul>
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }}</p>
        </div>
        <div class="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat magnam omnis similique
          magni accusamus quae at.
        </div>
      </li>
    </ul>
  </div>
</template>
