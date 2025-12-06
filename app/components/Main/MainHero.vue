<template>
  <div class="section-head">
    <hgroup>
      <h2 class="primary">
        Quand le mental s’apaise, le cœur respire.
      </h2>
      <p class="paragraphe">
        Dans mon <b>cocon</b>, je crée un moment suspendu rien que pour vous.
        C’est une <b>expérience douce</b>, surprenante et profondément <b>réconfortante</b>. Vous en ressortirez <b>apaisé</b>, comme réchauffé de l’intérieur.
      </p>
    </hgroup>
  </div>
  <div class="text-right mr-4">
    <CommonButton class="text-right" message="En savoir plus" to="/services"/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.section-head {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	text-wrap: pretty;
  padding: 4rem 1.5rem 2rem;
}

hgroup {
	display: flex;
	flex-direction: column;
	gap: 1.8rem;
}
hgroup .primary {
	color: var(--clr-black-20);
  font-family: var(--font-sans);
	font-weight: 400;
  font-size: 1rem;
  line-height: 1.3rem;
	letter-spacing: -0.01;
}
hgroup p {
  font-family: var(--font-serif);
  color: var(--clr-black);
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5rem;
}
.paragraphe {
  line-height: 2rem;
  font-family: var(--font-serif);
}
.paragraphe b {
  font-family: var(--font-serif);
}

</style>