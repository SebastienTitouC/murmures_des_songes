<template>
  <div class="w-100 h-[150px]" /> <!--  for navbar -->
  <h1 class="mainTitle ">
    <AnimationGoUp class="justify-center" :sentence="sentence" />
  </h1>
</template>

<script lang="ts" setup>
defineProps<{
  sentence: string
}>()
</script>

<style>
  .mainTitle {
  font-family: "Montserrat Alternates", Sans-Serif;
  text-align: center;
  font-weight: 800;
  letter-spacing: .02rem;

  font-size: 1.5rem;
  margin: 0 .5rem 2.5rem;
}


@media (min-width: 475px) {
  /* Mobile */
  .mainTitle {
    font-size: 1.75rem;
    margin: 0 .5rem 2.5rem;
  }
}

@media (min-width: 640px) {
  /* Mobile large */
  .mainTitle {
    font-size: 2rem;
    margin: 0 2rem 2.5rem;
  }
}

@media (min-width: 768px) {
  /* Tablette */
  .mainTitle {
    font-size: 2.25rem;
    margin: 0 2rem 3rem;
  }
}

@media (min-width: 1024px) {
  /* Desktop */
  .mainTitle {
    margin: 0 2rem 4rem;
  }

}
</style>