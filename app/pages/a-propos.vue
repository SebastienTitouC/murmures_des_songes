<template>
  <body>
    <Header />
    <Hero />
    <FooterMain />
  </body>
</template>

<script lang="ts" setup>
import { useCanonical } from '~/composables/useCanonical';
useCanonical()
</script>

<style scoped>

</style>