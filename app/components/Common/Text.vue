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

  padding: 1.5rem 2rem;
  font-size: var(--size-lg);
  line-height: 1.75rem;
  font-style: italic;
  font-family: var(--font-serif);
  font-weight: 300;
}

.main_text b {
  font-family: var(--font-serif);
  font-weight: 800;
  font-style: normal;
  font-size: var(--size-lg);
}

@media (min-width: 475px) {

  /* Mobile */
}

@media (min-width: 640px) {
  /* Mobile large */
    .main_text, .main_text b {
    font-size: var(--size-xl);
    line-height: 1.75rem;
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