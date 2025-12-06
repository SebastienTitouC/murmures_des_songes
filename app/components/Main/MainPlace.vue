<template>
  <div class="content_wrapper">
    <CommonOrnament :svg="heartSVG" alt="Ornement - Coeur" />

    <div class="flex justify-center items-center mt-2">
      <img class="laurel size-6" src="@/assets/svg/laurel.svg" alt="Couronne de laurier" width="24px" height="24px">
      <h1 class="common_title">
        Une parenthèse suspendue
      </h1>
      <img class="laurel size-6 scale-x-[-1]" src="@/assets/svg/laurel.svg" alt="Couronne de laurier" width="24px"
        height="24px">
    </div>

    <MainCarousel />

    <CommonText>
      <h1>
        Je vous recois dans une pièce <b>douce</b> au ton crème et bois naturel, avec une table de soin
        <b>confortable</b>,
        dans une atmosphère <b>apaisante</b>.
      </h1>
    </CommonText>

    <CommonButton message="Découvrir la séance" to="/services" position="center" />

  </div>
</template>

<script lang="ts" setup>
import heartSVG from '@/assets/svg/coeur.svg'

</script>

<style scoped></style>