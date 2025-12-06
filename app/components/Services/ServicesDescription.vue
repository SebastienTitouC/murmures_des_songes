<template>

  <div class="last_content_wrapper">
    <CommonOrnament :svg="massageSVG" alt="Ornement - Massage" />

    <CommonText class="max-w-[600px] m-auto">
      <h1>
        Un soin qui <b>apaise</b> en profondeur tout en éveillant vos sens, mêlant
        <b>douceur</b>, légèreté et bien-être subtil. Un instant suspendu où l’on se relâche, où l’on se reconnecte, où
        l’on <b>ressent</b>.
      </h1>
    </CommonText>

    <ServicesProcedure />

    <CommonText class="md:mt-8" >
      <h1>
        Les séances sont de <b>30 minutes</b> (20 minutes de soins) pour un <b>tarif unique</b> de <b>25 euros</b>.
      </h1>
      <br>
      <h1>
        La réalisation se fait à <b>mon domicile</b> dans la commune de <b>Goutevernisse</b> à 45 min de
        <b>Toulouse</b>, 15 minutes de <b>Carbonne</b> et <b>Cazères</b>.
      </h1>
    </CommonText>


    <CommonText>
      <h1>
        Laissez-vous tenter : votre corps saura vous remercier.
      </h1>
    </CommonText>
    <CommonButton message="Toutes les infos" to="/plus-d-informations" position="center" />
  </div>

</template>

<script lang="ts" setup>
import massageSVG from '@/assets/svg/massage.svg'

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