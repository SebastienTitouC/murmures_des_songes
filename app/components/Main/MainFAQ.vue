<template>
  <div class="content_wrapper">
    <CommonOrnament :svg="flowerSVG" alt="Ornement - Fleur" />
    <h1 class="common_title">Questions fréquentes</h1>

    <CommonText>
      <h1>
        Toutes les <b>réponses</b> aux questions que <b>vous vous posez</b>.
      </h1>
    </CommonText>

    <UAccordion :items="items" :ui="ui">

      <template #modelage>
        <p class="text_response">
          C’est avant tout un moment pour vous. <br> <br>
          Un moment pour lâcher prise sur tout ce qui peut vous tracasser. A l’aide du « scratching » ou plus
          communément des « papouilles » détendez-vous rapidement. <br>
          La pratique n’est pas médicale ni thérapeutique. <br>
          Il s’agit de bien-être sensoriel localisé sur le haut du
          corps (tête, épaules, dos, bras). Le tout associé a une démarche non verbale mais énergétique afin d’apaiser
          votre âme. <br>
          C’est donc une approche douce et une invitation à sa propre reconnexion.
        </p>
      </template>
      <template #scratching>
        <p class="text_response">
          Il s’agit d’une technique de relaxation réalisée avec le bout des doigts ou des accessoires (pinceaux, peigne,
          baguette) qui n’utilise ni pression musculaire ni manipulations mais un toucher très léger. <br>
          L’objectif est de stimuler les terminaisons nerveuses superficielles de la peau et ainsi favoriser le
          relâchement du corps et de
          l’esprit.
        </p>
      </template>
      <template #concept>
        <p class="text_response">
          Durant des phases de stress intense, j’ai cherché un moyen d’apaiser mon mental. <br>
          J’ai alors découvert l’ASMR qui reproduit parfois ses « papouilles ». Le cerveau à l’impression de ressentir
          la sensation de bien-être que
          cela procure. J’ai eu envie d’aller plus loin, et de le proposer de manière réelle afin d’aider des personnes
          qui ont besoin d’un instant de repos et qu’on prenne soin d’eux.
        </p>
      </template>
      <template #rendez-vous>
        <p class="text_response">
          Prenez rendez-vous par sms uniquement en indiquant des créneaux de disponibilités ainsi que votre prénom. <br>
        </p>
      </template>
      
    </UAccordion>

    <div class="mt-12">
      <CommonButton message="Plus d'informations" position="right" to="/plus-d-informations" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import flowerSVG from '@/assets/svg/fleur.svg'

const items = ref([
  {
    label: 'Qu\'est-ce qu’un modelage énergétique ?',
    slot: 'modelage',
  },
  {
    label: 'Qu\'est-ce que le scratching ?',
    slot: 'scratching',
  },
  {
    label: 'Pourquoi ce concept ?',
    slot: 'concept',
  },
  {
    label: 'Comment prendre rendez-vous ?',
    slot: 'rendez-vous',
  }
])

const ui = {
  root: 'pl-[2rem] pr-[1rem] text-lg',
  header: 'text-lg',
  content: 'text-[var(--clr-wood)] text-base',
  trigger: 'font-bold border-0 group transform-gpu will-change-transform hover:bg-muted/5 active:bg-muted/5',
}
</script>

<style scoped>
.text_response {
  font-size: var(--size-sm);
  color: var(--clr-wood);
  margin-bottom: 1rem;
}
</style>