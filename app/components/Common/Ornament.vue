<template>
  <div class="ornamental_deco_wrapper">
    <img class="ornamental_deco" :src="svg" :alt="alt" width="56px" height="56px" >
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  svg: string,
  alt: string
}>()
</script>

<style>
.ornamental_deco_wrapper {
  width: fit-content;
  margin: auto;
  margin-bottom: 1rem;
  border-radius: 50%;

}

.ornamental_deco {
  width: 56px;
  height: 56px;
}
</style>