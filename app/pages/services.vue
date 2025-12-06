<template>
  <body>
    <Header />
    <Services />
    <FooterMain />
  </body>
</template>

<script lang="ts" setup>
import { useCanonical } from '~/composables/useCanonical';
useCanonical()
</script>

<style>

</style>