<template>
  <NuxtLink :to="to">
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  to: string
}>()
</script>

<style>
@media (min-width: 475px) {
    /* Mobile */
}

@media (min-width: 640px) {
    /* Mobile large */
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