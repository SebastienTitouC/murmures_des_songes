<template>

  <div class="last_content_wrapper">

    <CommonOrnament :svg="rabbitSVG" alt="Ornement - Lapin" />
    <h1 class="common_title mt-4 mb-8">Informations utiles </h1>

    <div class="grid_wrapper impair">
      <div class="card">
        <CommonImage position="left" image="/images/goutevernisse.webp" alt="Village de Goutevernisse dans le 31" />
        <h1>Lieux : Goutevernisse</h1>
        <p>
          Prestations sur la commune de Goutevernisse à 45 min de Toulouse, 15 minutes de Carbonne et Cazères.
        </p>
        <p>
          Les séances ont lieu à mon domicile, dans une pièce dédiée au bien-être, au calme et à la détente.
        </p>
        <p>
          L’adresse vous sera communiquée lors de la prise de rendez-vous.
        </p>
      </div>

      <div class="card">
        <CommonImage position="left" image="/images/decoration.webp" alt="Image concept tarifs" />
        <h1>Tarifs</h1>
        <p>
          Tarif unique de 25 euros, pour une séance de 30 minutes (20 minutes de soins).
        </p>
        <p>
          Paiement en espèce, par virement, par Paypal ou Wero.
        </p>
      </div>

      <div class="card">
        <CommonImage position="left" image="/images/rendez-vous.webp" alt="Image concept rendez-vous" />
        <h1>Prise de rendez-vous</h1>
        <p>
          Prise de rendez-vous uniquement par message.
        </p>
        <p>
          Indiquez votre prénom ainsi que vos disponibilités.
        </p>

        <div class="mt-8">
          <CommonSend class="m-auto" />
        </div>
      </div>

      <div class="card">
        <CommonImage position="left" image="/images/outils.webp" alt="Outils de soin" />
        <h1>Indications utiles</h1>
        <p>
          Pratiques non médicales, non thérapeutiques, ni sexuelles
        </p>
        <p>
          Parking privé à disposition.
        </p>
      </div>

    </div>

    <div class="mt-16">
      <CommonOrnament :svg="massageSVG" alt="Ornement - Massage" />
      <h1 class="common_title mt-4 mb-8">Découverte </h1>
    </div>


    <div class="grid_wrapper">
      <div class="card">
        <CommonImage position="left" image="/images/energie.webp" alt="Image concept modelage énergétique" />
        <h1>Qu’est-ce qu’un modelage énergétique ?</h1>
        <p>
          C’est avant tout un moment pour vous. <br> <br>
          Un moment pour lâcher prise sur tout ce qui peut vous tracasser. A l’aide du « scratching » ou plus
          communément des « papouilles » détendez-vous rapidement. <br>
          Il s’agit de bien-être sensoriel localisé sur le haut du
          corps (tête, épaules, dos, bras). Le tout associé a une démarche non verbale mais énergétique afin d’apaiser
          votre âme. <br>
          C’est donc une approche douce et une invitation à sa propre reconnexion.
        </p>
      </div>
  
      <div class="card">
        <CommonImage position="left" image="/images/massage.webp" alt="Scratching" />
        <h1>Qu'est-ce que le scratching ?</h1>
        <p>
          Il s’agit d’une technique de relaxation réalisée avec le bout des doigts ou des accessoires (pinceaux, peigne,
          baguette) qui n’utilise ni pression musculaire ni manipulations mais un toucher très léger. <br>
          L’objectif est de stimuler les terminaisons nerveuses superficielles de la peau et ainsi favoriser le
          relâchement du corps et de
          l’esprit.
        </p>
      </div>
  
      <div class="card">
        <CommonImage position="left" image="/images/entree_livres.webp" alt="Photo de l'entrée" />
        <h1>Pourquoi ce concept ?</h1>
        <p>
          Durant des phases de stress intense, j’ai cherché un moyen d’apaiser mon mental. <br>
          J’ai alors découvert l’ASMR qui reproduit parfois ses « papouilles ». Le cerveau à l’impression de ressentir
          la sensation de bien-être que
          cela procure. J’ai eu envie d’aller plus loin, et de le proposer de manière réelle afin d’aider des personnes
          qui ont besoin d’un instant de repos et qu’on prenne soin d’eux.
        </p>
      </div>

    </div>

  </div>

</template>

<script lang="ts" setup>
import rabbitSVG from '@/assets/svg/lapin.svg'
import massageSVG from '@/assets/svg/massage.svg'

</script>

<style scoped>
.grid_wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 360px));
  justify-content: center;
}

.card {
  --color-light-beige: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-light-beige);
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.card h1 {
  font-family: var(--font-serif);
  font-weight: 800;
  font-size: var(--size-xl);
  margin-bottom: 1rem;
  text-align: center;
}

.card p {
  align-self: flex-start;
  font-family: var(--font-serif);
  font-size: var(--size-base);
  line-height: 1.5rem;
  margin: .5rem 0;
}


@media (min-width: 475px) {
  /* Mobile */
}

@media (min-width: 640px) {
  /* Mobile large */
}

@media (min-width: 768px) {
  /* Tablette */
}

@media (min-width: 1024px) {

  /* Desktop */
  .grid_wrapper.impair .card:last-child {
    grid-column: 2/3;
  }
}

@media (min-width: 1280px) {
  /* Desktop large */
}

@media (min-width: 1536px) {
  /* Desktop xl */
}
</style>