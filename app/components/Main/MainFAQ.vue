<template>
  <div class="accordion">
    <div class="ornamental_deco_wrapper">
      <img class="ornamental_deco" src="@/assets/svg/fleur.svg" alt="">
    </div>
    <h1 class="title">
      Questions fréquentes
    </h1>
    <h2 class="subtitle">
      Toutes les réponses aux questions que vous vous posez.
    </h2>

    <UAccordion :items="items" class="text-xl" />
  </div>
</template>

<script lang="ts" setup>

const items = ref([
  {
    label: 'Qu’est-ce qu’un modelage énergétique ?',
    content: 'C’est avant tout un moment pour vous. Un moment pour lâcher prise sur tout ce qui peut vous tracasser. A l’aide du « scratching » ou plus communément des « papouilles » détendez-vous rapidement. La pratique n’est pas médicale ni thérapeutique. Il s’agit de bien être sensoriel localisé sur le haut du corps (tête, épaules, dos, bras). Le tout associé a une démarche non verbale mais énergétique afin d’apaiser votre âme. C’est donc une approche douce et une invitation à sa propre reconnexion.'
  },
  {
    label: 'Qu’est ce que le scratching ?',
    content: 'Il s’agit d’une technique de relaxation réalisée avec le bout des doigts ou des accessoires (pinceaux, peigne, baguette) qui n’utilise ni pression musculaire ni manipulations mais un toucher très léger. L’objectif est de stimuler les terminaisons nerveuses superficielles de la peau et ainsi favoriser le relâchement du corps et de l’esprit.'
  },
  {
    label: 'Pourquoi ce concept ?',
    content: 'Durant des phases de stresse intense, j’ai cherché un moyen d’apaiser mon mental. J’ai alors découvert l’ASMR qui reproduit parfois ses « papouilles ». Le cerveau à l’impression de ressentir la sensation de bien-être que cela procure. J’ai eu envie d’aller plus loin, et de le proposer de manière réelle afin d’aider des personnes qui ont besoin d’un instant de repos et qu’on prenne soin d’eux.'
  },
  {
    label: 'Comment prendre rendez-vous ?',
    content: 'Prenez rendez-vous par sms uniquement en indiquant des créneaux de disponibilités ainsi que votre prénom. Les séances sont de 30 minutes  (20 minutes de soins) pour un tarif unique de 25 euros. Prestations sur la commune de Goutevernisse à 45 min de Toulouse, 15 minutes de Carbonne et Cazères. Adresse communiquée à la confirmation du rendez vous.'
  }
])
</script>

<style scoped>
.ornamental_deco_wrapper {
  width: fit-content;
  margin: 4rem auto 0;
}

.ornamental_deco {
  width: 64px;
  height: 64px;
}

.accordion {
  padding: 0 1rem;
}

.accordion,
.title,
.subtitle {
  color: var(--clr-black);
  font-family: var(--font-serif);
}
.title {
  margin: 4rem 1rem 2rem;
  font-weight: 800;
  font-size: 2rem;

}
.subtitle {
  margin: 2rem 1rem;
  font-size: 1.25rem;
}
</style>