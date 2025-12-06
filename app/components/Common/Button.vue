<template>
  <div :class="{ 'right': position == 'right', 'left': position == 'left', 'center': position == 'center' }">
    <NuxtLink :href="to" class="main_button">
      {{ message }}
    </NuxtLink>

  </div>
</template>

<script lang="ts" setup>
defineProps<{
  message: string,
  to: string,
  position: 'left' | 'right' | 'center' | 'none'
}>()
</script>

<style scoped>
.main_button {
  background-color: var(--clr-chair);
  padding: 1rem 1.25rem;
  font-family: var(--font-serif);
  font-weight: 600;
  letter-spacing: .025rem;
  border-radius: 4px;
}

.main_button:hover,
.main_button:focus,
.main_button:active {
  transform: scale(1.05);
}

.right {
  text-align: right;
  margin-top: 2rem;
  margin-right: 1rem;
}

.left {
  text-align: left;
  margin-top: 2rem;
  margin-left: 1rem;
}

.center {
  text-align: center;

  margin: auto;
  margin-top: 2rem;
}


@media (min-width: 475px) {
    /* Mobile */
}

@media (min-width: 640px) {
    /* Mobile large */

.right {
  text-align: right;
  margin-top: 2rem;
  margin-right: 2rem;
}

.left {
  text-align: left;
  margin-top: 2rem;
  margin-left: 2rem;
}
}

@media (min-width: 768px) {
    /* Tablette */
}

@media (min-width: 1024px) {
    /* Desktop */
}

@media (min-width: 1280px) {
    /* Desktop large */
}

@media (min-width: 1536px) {
    /* Desktop xl */
}
</style>