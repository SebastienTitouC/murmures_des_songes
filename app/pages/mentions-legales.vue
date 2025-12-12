<template>
  <div>
    <Header />
    <LegalNavSub sentence="Mentions légales" />
    <LegalMentionsLegales />
    <FooterMain />

  </div>
</template>

<script lang="ts" setup>
import { useCanonical } from '~/composables/useCanonical';
useCanonical()
</script>

<style scoped>
.title {
  text-align: center;
  font-family: "Montserrat Alternates", Sans-Serif;
  font-size: 2.25rem;
  font-weight: 800;

  margin-bottom: 4rem;
  letter-spacing: .02rem;
}

</style>