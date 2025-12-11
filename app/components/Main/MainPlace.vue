<template>
  <div class="place_wrapper">
    <CommonOrnament :svg="heartSVG" alt="Image d'un coeur" />

    <div class="flex justify-center items-center mt-2">
      <img class="laurel size-6" src="@/assets/svg/laurel.svg" alt="Couronne de laurier">
      <h1 class="common_title">
        Une parenthèse suspendue
      </h1>
      <img class="laurel size-6 scale-x-[-1]" src="@/assets/svg/laurel.svg" alt="Couronne de laurier">
    </div>

    <MainCarousel />

    <CommonText>
      <h1>
        Je vous recois dans une pièce <b>douce</b> au ton crème et bois naturel, avec une table de soin
        <b>confortable</b>,
        dans une atmosphère <b>apaisante</b>.
      </h1>
    </CommonText>

    <CommonButton message="Plus de photos" to="/a-propos" position="center" />

  </div>
</template>

<script lang="ts" setup>
import heartSVG from '@/assets/svg/coeur.svg'

</script>

<style scoped>
.place_wrapper {
  margin: 4rem 0 0;
}

.place_wrapper .title {
  font-size: var(--size-2xl);
  font-weight: 800;
  font-family: var(--font-serif);
  font-style: italic;
}

</style>