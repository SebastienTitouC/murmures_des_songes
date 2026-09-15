<template>

  <div class="last_content_wrapper">

    <CommonOrnament :svg="rabbitSVG" alt="Ornement - Lapin" />
    <h1 class="common_title mt-4 mb-8">Informations utiles </h1>

    <div class="grid_wrapper impair">
      <div class="card">
        <CommonImage position="left" image="/images/goutevernisse.webp" alt="Village de Goutevernisse dans le 31" />
        <h1>Lieu : Goutevernisse</h1>
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
        <p class="text-center">
          Paiement en espèces, par virement, par PayPal ou Wero.
        </p>
        <p />
        <h2 class="underline">Séance de papouilles</h2>
        <p>
          Tarif unique de <b>25 euros</b>, pour une séance de 30 minutes (20 minutes de soins).
        </p>
        <h2 class="underline">Tirage des cartes</h2>
        <p class="pb-2">
          Tarif de lancement : <b>30 euros</b>, pour une séance de 45 minutes (35 € à partir du 1ᵉʳ janvier 2027).
        </p>
        <br>
        <h2 class="underline text-center">Formule L’Éveil des Songes : <br> Massage + Oracle</h2>
        <p>
          Le massage apaise le corps, les cartes ouvrent la réflexion : <b>50 euros</b> au lieu de 55&nbsp;€.
        </p>

      </div>

      <div class="card ">
        <CommonImage position="left" image="/images/rendez-vous.webp" alt="Image concept rendez-vous" />
        <h1>Prise de rendez-vous</h1>
        <p>
          Prise de rendez-vous uniquement par message.
        </p>
        <p>
          Indiquez votre prénom ainsi que vos disponibilités.
        </p>

        <div class="mt-8">
          <CommonSend class="m-auto text-center" />
        </div>
      </div>

      <div class="card grid_wrapper_impair">
        <CommonImage position="left" image="/images/outils.webp" alt="Outils de soin" />
        <h1>Indications utiles</h1>
        <p>
          Pratiques non médicales, non thérapeutiques, ni sexuelles.
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


    <div class="grid_wrapper impair">
      <div class="card">
        <CommonImage position="left" image="/images/energie.webp" alt="Image concept modelage énergétique" />
        <h1>Qu’est-ce qu’un modelage énergétique ?</h1>
        <p>
          C’est avant tout un moment pour vous. <br> <br>
          Un moment pour lâcher prise sur tout ce qui peut vous tracasser. A l’aide du « scratching » ou plus
          communément des « papouilles » détendez-vous rapidement. <br>
          Il s’agit de bien-être sensoriel localisé sur le haut du
          corps (tête, épaules, dos, bras). Le tout associé à une démarche non verbale mais énergétique afin d’apaiser
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
        <CommonImage position="left" image="/images/autres.webp" alt="Scratching" />
        <h1>Les bienfaits du scratching et des papouilles</h1>
        <p>
          Le scratching et donc les papouilles permettent une détente rapide et un sentiment de réconfort. <br>
          Se faire papouiller c’est prendre le temps de s’évader dans un monde intérieur où tout est doux. <br>
          Vous êtes stréssé.e, surmené.e, fatigué.e ? La papouille est faite pour vous ! <br>
          Venez vous détendre et laissez vous glisser dans cet univers apaisant.
        </p>
      </div>

      <div class="card">
        <CommonImage position="left" image="/images/entree_livres.webp" alt="Photo de l'entrée" />
        <h1>Pourquoi ce concept ?</h1>
        <p>
          Durant des phases de stress intense, j’ai cherché un moyen d’apaiser mon mental. <br>
          J’ai alors découvert l’ASMR qui reproduit parfois ces « papouilles ». Le cerveau a l’impression de ressentir
          la sensation de bien-être que
          cela procure. J’ai eu envie d’aller plus loin, et de le proposer de manière réelle afin d’aider des personnes
          qui ont besoin d’un instant de repos et qu’on prenne soin d’eux.
          <br>
          Quant à l’Oracle Gé, il m’accompagne depuis près de 15 ans. Au fil des années, j’ai appris à apprécier la
          richesse de ses symboles et la justesse des réflexions qu’il peut faire émerger.

          C’est un Oracle que je trouve particulièrement pertinent pour éclairer les situations et prendre du recul, et
          que j’ai naturellement choisi comme support pour vous accompagner lors de ces séances.
        </p>
      </div>
      <div class="card">
        <CommonImage position="left" image="/images/question-mark.webp" alt="Photo de l'entrée" />
        <h1>Dois-je avoir une question précise pour faire un tirage de cartes ?</h1>
        <p>
          La séance s'adapte, que ce soit pour des questions personnelles, des choix à faire, une situation qui vous
          préoccupe, vos relations, vos projets ou simplement pour y voir plus clair. <br>
          Plusieurs questions/sujets peuvent être abordés au cours des 45 minutes.<br>
        </p>
      </div>
      <div class="card">
        <CommonImage position="left" image="/images/oracle-square.webp" alt="Photo de l'entrée" />
        <h1>Est-ce que les cartes vont me donner une réponse précise ?</h1>
        <p>
          Les cartes ne prédisent pas votre avenir : elles offrent un support pour éclairer une situation, faire émerger
          des pistes de réflexion et parfois dégrossir ce qui vous semble confus. Vous restez libre de vos choix et de
          votre chemin. <br>
          Mais, les cartes peuvent apporter des réponses étonnamment claires. Elles permettent notamment de mettre en
          lumière certains éléments d’une situation, de faire ressortir des aspects auxquels vous n’aviez pas pensé ou
          de mieux comprendre ce qui vous questionne.
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

.card h2 {
  font-weight: 900;

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
  .grid_wrapper_impair {
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