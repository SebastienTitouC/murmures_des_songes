<template>
  <div class="content_wrapper">
    <CommonOrnament :svg="flowerSVG" alt="Ornement - Fleur" />
    <h1 class="common_title">Questions fréquentes</h1>

    <CommonText>
      <h1>
        Toutes les <b>réponses</b> aux questions que <b>vous vous posez</b>.
      </h1>
    </CommonText>

    <p class="mt-4 pl-2 text-lg font-bold">Le massage</p>
    <UAccordion :items="itemsMassage" :ui="ui">

      <template #modelage>
        <p class="text_response">
          C’est avant tout un moment pour vous. <br> <br>
          Un moment pour lâcher prise sur tout ce qui peut vous tracasser. A l’aide du « scratching » ou plus
          communément des « papouilles » détendez-vous rapidement. <br>
          La pratique n’est pas médicale ni thérapeutique. <br>
          Il s’agit de bien-être sensoriel localisé sur le haut du
          corps (tête, épaules, dos, bras). Le tout associé à une démarche non verbale mais énergétique afin d’apaiser
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
      <template #papouilles>
        <p class="text_response">
          Le scratching et donc les papouilles permettent une détente rapide et un sentiment de réconfort. <br>
          Se faire papouiller c’est prendre le temps de s’évader dans un monde intérieur où tout est doux. <br>
          Vous êtes stréssé.e, surmené.e, fatigué.e ? La papouille est faite pour vous ! <br>
          Venez vous détendre et laissez vous glisser dans cet univers apaisant.
        </p>
      </template>

    </UAccordion>


    <p class="mt-4 pl-2 text-lg font-bold">Le tirage</p>
    <UAccordion :items="itemsTirage" :ui="ui">
      <template #avenir>
        <p class="text_response">
          Les cartes ne prédisent pas votre avenir : elles offrent un support pour éclairer une situation, faire émerger
          des pistes de réflexion et parfois dégrossir ce qui vous semble confus. Vous restez libre de vos choix et de
          votre chemin. <br>
          Mais les cartes peuvent apporter des réponses étonnamment claires. Elles permettent notamment de mettre en
          lumière
          certains éléments d’une situation, de faire ressortir des aspects auxquels vous n’aviez pas pensé ou de mieux
          comprendre ce qui vous questionne.
        </p>
      </template>
      <template #question>
        <p class="text_response">
          La séance s'adapte, que ce soit pour des questions personnelles, des choix à faire, une situation qui vous
          préoccupe, vos relations, vos projets ou simplement pour y voir plus clair. <br>
          Plusieurs questions/sujets peuvent être abordés au cours des 45 minutes. <br>
        </p>
      </template>
      <template #oracle-ge>
        <p class="text_response">
          L’Oracle Gé est un jeu de cartes composé de 61 cartes illustrées, créé par Gérard Barbier.
          <br><br>
          Ses illustrations représentent des personnages, des animaux, des situations et différents symboles qui
          permettent d’explorer de nombreuses thématiques de la vie quotidienne.
          <br><br>
          C’est un Oracle particulièrement intéressant pour l’introspection car ses cartes peuvent offrir des images et
          des symboles facilement accessibles, permettant de faire émerger des associations, des ressentis et des pistes
          de réflexion.
          <br><br>
          Pendant la séance, vous êtes invité(e) à tirer vous-même les cartes. Nous les observons ensuite ensemble et
          cherchons ce qu’elles peuvent évoquer en lien avec votre question et votre situation.
          Il ne s’agit pas de vous dire ce qui va arriver, mais de vous aider à regarder votre situation autrement, à
          mettre en lumière certains éléments et à faire émerger vos propres réponses.
          Les cartes deviennent ainsi un support d’échange et de réflexion, tandis que vous restez libre de vos choix et
          de la direction que vous souhaitez donner à votre chemin.
          <br><br>
          L’Oracle Gé m’accompagne depuis près de 15 ans. Au fil des années, j’ai appris à apprécier la richesse de ses
          symboles et la justesse des réflexions qu’il peut faire émerger.
          <br><br>
          C’est un Oracle que je trouve particulièrement pertinent pour éclairer les situations et prendre du recul, et
          que j’ai naturellement choisi comme support pour vous accompagner lors de ces séances.<br>
        </p>
      </template>
    </UAccordion>


    <p class="mt-4 pl-2 text-lg font-bold">Questions générales</p>
    <UAccordion :items="itemsCommun" :ui="ui">
      <template #concept>
        <p class="text_response">
          Durant des phases de stress intense, j’ai cherché un moyen d’apaiser mon mental. <br>
          J’ai alors découvert l’ASMR qui reproduit parfois ces « papouilles ». Le cerveau a l’impression de ressentir
          la sensation de bien-être que cela procure. J’ai eu envie d’aller plus loin, et de le proposer de manière
          réelle afin d’aider des personnes
          qui ont besoin d’un instant de repos et qu’on prenne soin d’eux.

          <br><br>
          Quant à L’Oracle Gé, il m’accompagne depuis près de 15 ans. Au fil des années, j’ai appris à apprécier la
          richesse de ses symboles et la justesse des réflexions qu’il peut faire émerger.

          C’est un Oracle que je trouve particulièrement pertinent pour éclairer les situations et prendre du recul, et
          que j’ai naturellement choisi comme support pour vous accompagner lors de ces séances.
        </p>
      </template>
      <template #rendez-vous>
        <p class="text_response">
          Prenez rendez-vous par sms uniquement en indiquant des créneaux de disponibilités ainsi que votre prénom. <br>
        </p>
      </template>

    </UAccordion>

    <div class="mt-12">
      <CommonButton message="Plus d'informations" position="right" to="/informations-massage-et-tirage-cartes" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import flowerSVG from '@/assets/svg/fleur.svg'

const itemsMassage = ref([
  {
    label: 'Qu\'est-ce qu’un modelage énergétique ?',
    slot: 'modelage',
  },
  {
    label: 'Qu\'est-ce que le scratching ?',
    slot: 'scratching',
  },
  {
    label: 'Les bienfaits du scratching et des papouilles',
    slot: 'papouilles',
  },
])
const itemsTirage = ref([
  {
    label: 'Est-ce que les cartes vont me donner une réponse précise ?',
    slot: 'avenir',
  },
  {
    label: 'Dois-je avoir une question précise pour faire un tirage de cartes ?',
    slot: 'question',
  },
  {
    label: 'Pourquoi utiliser l’Oracle Gé comme support d’introspection ?',
    slot: 'oracle-ge',
  }
])
const itemsCommun = ref([
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