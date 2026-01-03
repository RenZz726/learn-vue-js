import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    count.value--;
  };

  // getters
  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return "even";
    else return "odd";
  });

  return {
    count,
    increment,
    decrement,
    oddOrEven,
  };

  /*
  state: () => {
    count: 0
    }

  actions: {
    increment() {
      this.count++;
    }
  }
  */
});
