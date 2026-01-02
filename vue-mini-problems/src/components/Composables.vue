<script setup>
import { mouseMove } from "@/mouseMove";
const {x, y} = mouseMove();
</script>
<template>
  <div>
    <p>{{ x }} -- {{ y }}</p>
    <h1>This is a page.</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
      reiciendis repellendus saepe iure doloremque repudiandae adipisci illo hic
      quas, sint, error nam voluptates amet corporis. Distinctio laboriosam
      veniam doloribus minus suscipit, voluptatum consequuntur molestias?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ullam
      possimus amet laborum minima at nihil nemo a, voluptates accusantium
      nostrum, reprehenderit eum debitis similique animi optio, blanditiis
      eligendi pariatur! Vero nostrum, cumque quos autem delectus alias esse
      assumenda.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, magnam.
    </p>
  </div>
</template>
