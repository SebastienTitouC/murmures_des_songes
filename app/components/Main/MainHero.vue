<template>
  <div class="hook_wrapper">
    <!-- <div class="ornamental_deco_wrapper">
      <img class="ornamental_deco" src="@/assets/svg/ornamental_deco.svg" alt="ornamental decoration">
    </div> -->
    <CommonOrnament class="add" :svg="decoSVG" alt="Image d'un coeur" />

    <CommonText class="text-center ">
      <h1>
        Bonjour, moi c'est <b>Marion</b>, je pratique le <b>modelage énergétique</b>
        et le <b>scratching</b>.
      </h1>
    </CommonText>

    <MainImage />

    <CommonText>
      <h1>
        Dans mon <b>cocon</b>, je crée un moment suspendu rien que pour vous.
        C’est une <b>expérience douce</b>, surprenante et profondément <b>réconfortante</b>. Vous en ressortirez
        <b>apaisé</b>, comme réchauffé de l’intérieur.
      </h1>
    </CommonText>

    <CommonButton class="text-right" message="En savoir plus" to="/services" position="right" />

  </div>
</template>

<script lang="ts" setup>
import decoSVG from '@/assets/svg/ornamental_deco.svg'

</script>

<style scoped>
.hook_wrapper {
  margin: 4rem 0 0;
}
</style>

<style>
.ornamental_deco_wrapper.add {
  padding: .5rem;
  border: 2px dotted var(--clr-black);
}

.ornamental_deco_wrapper.add .ornamental_deco {
  animation: rotate 5s infinite linear both;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(0deg);
  }

}
</style>