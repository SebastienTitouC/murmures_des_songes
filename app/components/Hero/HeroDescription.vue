<template>

  <div class="last_content_wrapper">
    <CommonOrnament :svg="fishSVG" alt="Ornement - Poisson" />

    <CommonText>
      <h1>
        Avant de vous <b>recevoir</b>, je souhaite vous partager un peu de <b>moi</b> et un bout de <b>mon histoire</b>
        ...
      </h1>
    </CommonText>

    <!-- Part 1 -->
    <div class="procedure_grid">
      <CommonImage position="left" image="/images/marion2.webp" alt="Photo de la masseuse" />
      <div class="mt-4">
        <h2 class="title">
          Je m’appelle Marion ...
        </h2>

        <p class="description">
          ... et si deux mots me qualifient c’est bien ceux qui caractérisent les natifs des poissons, dont je fais
          partis, qui sont sensibles et rêveurs.
        </p>
      </div>
    </div>

    <!-- Part 2 -->
    <div class="procedure_grid">
      <div class="">
        <h2 class="title-right">
          J’aime m’évader ...
        </h2>

        <p class="description-right">
          ... dans mon monde tout doux et je vous en ouvre les portes aujourd’hui.
        </p>
      </div>
      <CommonImage position="right" image="/images/chateau.webp" alt="Image du chateau de Disney" />
    </div>

    <!-- Part 3 -->
    <div class="procedure_grid">
      <CommonImage position="left" image="/images/autres.webp" alt="Image conceptuelle amis" />
      <div class="">
        <h2 class="title">
          Tournée vers les autres ...
        </h2>

        <p class="description">
          ... de façon discrète depuis plus de 10 ans dans ma première activité qui est le ménage, j’ai envie, dès à
          présent d’être encore au plus prêt des âmes et de vous offrir une bulle de douceur.
        </p>
      </div>
    </div>
    <CommonText>
      <h1>
        C'est pour cela que j'ai décidé de m'initier au <b>modelage énergétique</b> et au <b>scratching</b> afin de vous
        apporter bien-être et lâcher-prise.
      </h1>
    </CommonText>
    <CommonButton message="Découvrir la séance" to="/services" position="center" />
  </div>

</template>

<script lang="ts" setup>
import fishSVG from '@/assets/svg/poisson.svg'

</script>

<style scoped>
.procedure_grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0;
  align-items: start;
  margin-top: 2rem;
}

.title,
.title-right {
  font-family: var(--font-serif);
  font-weight: 800;
  font-size: var(--size-lg);
  margin-bottom: .25rem;
}

.description,
.description-right {
  font-family: var(--font-serif);
  font-size: var(--size-base);
  text-align: justify;
}

.title,
.description {
  text-align: left;
  padding: 0 .25rem 0 .75rem;
}

.title-right,
.description-right {
  text-align: right;
  padding: 0 .75rem 0 .25rem;
}
</style>