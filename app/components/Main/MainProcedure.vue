<template>
  <div class="procedure_wrapper">
    <CommonOrnament :svg="butterflySVG" alt="Ornement papillon" />
    <h1 class="common_title">Déroulement d'une séance</h1>

    <div>
      <!-- Accueil -->
      <div class="procedure_grid">
        <CommonImage position="left" image="/images/outils.JPG" alt="TODO" />
        <div class="mt-4">
          <h2 class="title">
            Accueil tout en douceur. <br>
          </h2>

          <p class="description">
            Vous arrivez, on respire, on se pose. Je vous explique le déroulement en toute simplicité.
          </p>
        </div>
      </div>

      <!-- Installation -->
      <div class="procedure_grid">
        <div class="">
          <h2 class="title">
            Installation confortable
          </h2>

          <p class="description-right">
            Vous êtes installée habillé, dans une position confortable, sur la table de soin.
            La séance est non verbale, pour vous laisser plonger dans vos sensations.
          </p>
        </div>
        <CommonImage position="right" image="/images/salle-de-massage2.JPG" alt="TODO" />
      </div>

      <!-- Modelage -->
      <div class="procedure_grid">
        <CommonImage position="left" image="/images/massage.JPG" alt="TODO" />
        <div class="">
          <h2 class="title">
            Modelage & scratching
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
.procedure_wrapper {
  margin: 4rem 0 0;
}

.procedure_grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0;
  align-items: start;
  margin-top: 2rem;
}

.title {
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
}

.description {
  text-align: left;
  padding: 0 .25rem 0 .75rem;
}

.description-right {
  text-align: right;
  padding: 0 .75rem 0 .25rem;
}
</style>