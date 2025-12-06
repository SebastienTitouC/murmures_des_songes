<template>
  <div ref="container" class="flex flex-wrap gap-2 overflow-hidden">
    <span v-for="(word, index) in sentence.split(' ')" :key="index"
      class="inline-block hiddenWord transition duration-500 ease-out"
      :style="{ transitionDelay: `${(index * 120) + 100}ms` }" :class="{ 'displayWord': visible }">
      {{ word }}&thinsp;
    </span>
  </div>
</template>

<script setup>
defineProps({
  sentence: { type: String, required: true },
});

const container = ref(null);
const visible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 1 }
  );

  if (container.value) {
    observer.observe(container.value);
  }
});
</script>

<style scoped>
.hiddenWord {
  transform: rotate(10deg) translateY(120%);

  opacity: 0;
}

.displayWord {
  transform: rotate(0deg) translateY(0);
  opacity: 1;
}
</style>