<template>
  <div>
    <Header />
    <LegalNavSub sentence="R. G. P. D." />
    <LegalMentionsRGPD />
    <FooterMain />

  </div>
</template>

<script lang="ts" setup>
import { useCanonical } from '~/composables/useCanonical';
useCanonical()
</script>

<style scoped>
  
</style>