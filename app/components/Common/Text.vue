<template>
  <div class="main_text">
    <slot />
  </div>

</template>

<script lang="ts" setup>

</script>

<style>
.main_text {
  color: var(--clr-black);

  padding: 1.5rem 2rem ;
  font-size: var(--size-xl);
  line-height: 1.75rem;
  font-style: italic;
  font-family: var(--font-serif);
  font-weight: 300;
  
  
}

.main_text b {
  font-family: var(--font-serif);
  font-weight: 800;
  font-style: normal;
  font-size: var(--size-xl);
}
</style>