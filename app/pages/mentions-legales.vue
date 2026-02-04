<template>
  <div>
    <LegalNavSub sentence="Mentions légales" />
    <LegalMentionsLegales />
  </div>
</template>

<script lang="ts" setup>
import { useCanonical } from '~/composables/useCanonical';
useCanonical('Modelage énergétique, scratching et papouilles à Goutevernisse | Aux murmures des songes',
 'Aux murmures des songes - modelage énergétique et scratching à Goutevernisse')
</script>

<style scoped>
.title {
  text-align: center;
  font-family: var(--font-sans);
  font-size: 2.25rem;
  font-weight: 800;

  margin-bottom: 4rem;
  letter-spacing: .02rem;
}

</style>