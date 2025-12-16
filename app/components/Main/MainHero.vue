<template>
  <div class="content_wrapper">
    <CommonOrnament class="add" :svg="decoSVG" alt="Ornement - Coeur" />

    <CommonText class="max-w-[600px] m-auto ">
      <h1>
        Bonjour, moi c'est <b>Marion</b>, je pratique le <b>modelage énergétique</b>
        et le <b>scratching</b>.
      </h1>
    </CommonText>

    <div class="content_grid">
      <MainImage />

      <CommonText class="">
        <h1>
          Dans mon <b>cocon</b>, je crée un moment suspendu rien que pour vous.
          C’est une <b>expérience douce</b>, surprenante et profondément <b>réconfortante</b>. 
        </h1>
      </CommonText>
      <CommonButton class="grid-btn text-right" message="En savoir plus" to="/a-propos" position="right" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import decoSVG from '@/assets/svg/ornamental_deco.svg'

</script>

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

.content_grid {
  /* Trois elements, display en colonne si ecran petit, sinon en ligne si la place est disponible */
  display: grid;
  grid-template-columns: 1fr;
}


@media (min-width: 475px) {
  /* Mobile */
}

@media (min-width: 640px) {

  /* Mobile large */
  .content_grid {
    margin: 0 3rem;

    grid-template-columns: max-content 400px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    margin: auto;
  }

  .grid-btn {
    grid-column: 2/3;

    justify-self: end;
  }
}

@media (min-width: 768px) {

  /* Tablette */

}

@media (min-width: 1024px) {

  /* Desktop */
  .content_grid {
    grid-template-columns: max-content 440px;
    justify-content: center;
    gap: 0 4rem;

  }

}

@media (min-width: 1280px) {
  /* Desktop large */
}

@media (min-width: 1536px) {
  /* Desktop xl */
}
</style>