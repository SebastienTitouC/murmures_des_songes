<template>
  <div class="content_wrapper">
    <CommonOrnament :svg="butterflySVG" alt="Ornement - Papillon" />
    <h1 class="common_title">Déroulement d'une séance</h1>

    <div>
      <!-- Accueil -->
      <div class="procedure_grid">
        <CommonImage position="left" image="/images/outils.webp" alt="Outils de soin" />
        <div class="mt-2">
          <h2 class="title">
            Accueil tout en douceur.
          </h2>

          <p class="description">
            Vous êtes accueilli.e dans un espace calme et apaisant.
            Je vous explique le déroulement en toute simplicité.
          </p>
        </div>
      </div>

      <!-- Installation -->
      <div class="procedure_grid-right">
        <div class="">
          <h2 class="title-right">
            Installation confortable.
          </h2>

          <p class="description-right">
            Vous êtes installé.e habillé.e, dans une position confortable, sur la chaise de massage.
            La séance est non verbale, pour vous laisser plonger dans vos sensations.
          </p>
        </div>
        <CommonImage position="right" image="/images/chaise-de-massage.webp" alt="Chaise de massage" />
      </div>

      <!-- Modelage -->
      <div class="procedure_grid">
        <CommonImage position="left" image="/images/massage.webp" alt="Scratching" />
        <div class="">
          <h2 class="title">
            Modelage & scratching.
          </h2>

          <p class="description">
            À l’aide des doigts ou d’accessoires (pinceaux, peigne, baguette), je réalise un toucher léger, non
            musculaire.
            Zones travaillées : tête, épaules, dos, bras.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import butterflySVG from '@/assets/svg/papillon.svg'

</script>

<style scoped>
.procedure_grid,
.procedure_grid-right {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0;
  align-items: start;
  margin: auto;
  margin-top: 2rem;
  max-width: 600px;
}

.procedure_grid-right {
  grid-template-columns: 1fr max-content;
}

.title,
.title-right {
  font-family: var(--font-serif);
  font-weight: 800;
  text-align: center;
  font-size: var(--size-lg);
  margin-bottom: .25rem;
}

.description,
.description-right {
  font-family: var(--font-serif);
  font-size: var(--size-base);
  text-align: justify;
  max-width: 500px;
}

.title,
.description {
  text-align: left;
  padding: 0 .25rem 0 .75rem;
}

.title-right,
.description-right {
  text-align: right;
  margin-left: auto;
  padding: 0 .75rem 0 .25rem;
}

@media (min-width: 475px) {
  /* Mobile */
}

@media (min-width: 640px) {
  /* Mobile large */
}

@media (min-width: 768px) {
  /* Tablette */

  .title,
  .title-right {
    font-size: var(--size-xl);
    margin-top: 2rem;
  }

  .description,
  .description-right {
    font-size: var(--size-lg);
  }
}

@media (min-width: 1024px) {

  /* Desktop */
  .procedure_grid,
  .procedure_grid-right {
    max-width: 800px;

  }
}

@media (min-width: 1280px) {
  /* Desktop large */
}

@media (min-width: 1536px) {
  /* Desktop xl */
}
</style>