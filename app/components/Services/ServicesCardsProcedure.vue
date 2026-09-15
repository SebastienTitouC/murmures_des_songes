<template>
  <div class="content_wrapper">
    <CommonOrnament :svg="butterflySVG" alt="Ornement - Papillon" />
    <h1 class="common_title">Déroulement du tirage des cartes</h1>
    <p class="text-center italic">
      La séance dure 45 minutes, dans un lieu chaleureux et propice à l’échange et à l’introspection.
    </p>
    <div>
      <!-- Questions -->
      <div class="procedure_grid">
        <CommonImage position="left" image="/images/question-mark.webp" alt="Outils de soin" />
        <div class="">
          <h2 class="title">
            Vous avez une question ? Les cartes vous accompagnent.
          </h2>

          <p class="description">
            Vous pouvez venir avec une question précise ou plusieurs sujets que vous souhaitez aborder.
            Durant les 45 minutes, vous pouvez poser différentes questions au fil de la séance : une situation
            personnelle, une relation, un choix, un projet, une période de doute ou simplement quelque chose que vous
            aimeriez mieux comprendre.

          </p>
        </div>
      </div>

      <!-- Accueil -->
      <div class="procedure_grid-right">
        <div class="">
          <h2 class="title-right">
            Accueil tout en douceur.
          </h2>

          <p class="description-right">
            À votre arrivée, prenez le temps de vous installer confortablement. Je vous propose également une boisson
            chaude ou fraîche, selon vos envies et la saison, afin de faire de ce rendez-vous un véritable moment pour
            vous.

          </p>
        </div>
        <CommonImage position="right" image="/images/tasse_accueil.webp" alt="Chaise de massage" />
      </div>

      <!-- Tirage -->
      <div class="procedure_grid">
        <CommonImage position="left" image="/images/tirage.webp" alt="Scratching" />
        <div class="">
          <h2 class="title">
            A vous de tirer...
          </h2>

          <p class="description">
            C’est vous qui tirez les cartes. Nous les découvrons ensuite ensemble afin d’explorer les symboles et les
            différentes pistes qu’elles peuvent apporter.

          </p>
        </div>
      </div>

      <!-- Introspection -->
      <div class="procedure_grid-right">
        <div class="">
          <h2 class="title-right">
            ... puis laissez-vous guider.
          </h2>

          <p class="description-right">
            Les cartes peuvent apporter des réponses étonnamment claires. Elles permettent notamment de mettre en
            lumière certains éléments d’une situation, de faire ressortir des aspects auxquels vous n’aviez pas pensé ou
            de mieux comprendre ce qui vous questionne.

          </p>
        </div>

        <CommonImage position="right" image="/images/discussion.webp" alt="Scratching" />
      </div>

      <!-- Avenir -->
      <div class="procedure_grid">
        <CommonImage position="left" image="/images/avenir.webp" alt="Scratching" />
        <div class="">
          <h2 class="title">
            Et l’avenir dans tout ça ?
          </h2>

          <p class="description">
            L’objectif n’est pas de prédire ce qui va arriver de façon nette puisque vous avez votre libre arbitre et
            vos choix peuvent faire évoluer les situations.
          </p>
        </div>
      </div>
    </div>
    <br>
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