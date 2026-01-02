import { onMounted, onUnmounted, ref } from "vue";

export function mouseMove() {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
    console.log(e);
  }
  onMounted(() => {
    window.addEventListener("mousemove", update);
  });
  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return { x, y };
}

