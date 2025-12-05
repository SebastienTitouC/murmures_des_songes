<template>
  <header class="header_wrapper">
    <header-nav />
    <header-menu />
  </header>
</template>

<script lang="ts" setup>

</script>

<style>
.header_wrapper {
  position: fixed;
  /* background-color: var(--clr-white); */
  backdrop-filter: blur(5px);
  color: white;
  top: 0;
  font-family: var(--font-sans);
  text-align: center;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 2rem;
  display: grid;
  grid-template-areas: ". enterprise menu";
}
</style>