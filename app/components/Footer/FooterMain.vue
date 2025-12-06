<template>
  <div>
    <FooterDesktop v-if="!isMobile" />
    <FooterMobile v-else />
    
  </div>
</template>

<script lang="ts" setup>
  const isMobile = ref(true)
  let mql:MediaQueryList

  function handleMqlChange(e) {
    isMobile.value = e.matches
  }

  onMounted(() => {
    mql = window.matchMedia('(max-width: 767px)')
    isMobile.value = mql.matches
    mql.addEventListener('change', handleMqlChange)
  })

  onUnmounted(() => {
    mql.removeEventListener('change', handleMqlChange)
  })
</script>

<style>

</style>