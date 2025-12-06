<template>
  <button class="main_button">
    <a :href="to">
      {{ message }}
    </a>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  message: string,
  to: string
}>()
</script>

<style scoped>
.main_button {
  background-color: var(--clr-chair);
  color: var(--clr-black);
  padding: 1rem;
  font-family: 'Playfair Serif', sans-serif;
  font-weight: 800;
  letter-spacing: .025rem;
}

.main_button:hover,
.main_button:focus,
.main_button:active {
  transform: scale(1.05);
}
</style>