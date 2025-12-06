<template>
  <div class="rgpd">
    <h1>Politique de Confidentialité</h1>
    <p>Dernière mise à jour : 12/12/2025</p>
    <h2>Introduction</h2>
    <p class="ta">
      Dans le cadre de l'exploitation du site https://TODO.fr, je m’engage à protéger la vie privée de mes utilisateurs
      et à garantir la sécurité des données personnelles collectées. Cette politique de confidentialité précise quelles
      informations je collecte, comment je les utilise et quels sont vos droits concernant ces données.
    </p>


    <h2>Responsable du traitement</h2>
    <p class="ta">
      Le responsable du traitement des données personnelles est :
    </p>
    <br>
    <div class="info">
      <p>Nom ou raison sociale</p>
      <p>STC</p>
      <p>Adresse du siège social</p>
      <p><a href="https://www.google.com/maps?q=127+Bis+Chem.+de+la+Peyrette,+31170+Tournefeuille" target="_blank">
          127B chemin de la peyrette, 31170 Tournefeuille
        </a></p>
      <p>Adresse e-mail</p>
      <p><a href="mailto:contact@creation-web-tournefeuille.fr">contact@creation-web-tournefeuille.fr</a></p>
    </div>

    <h2>Données collectées et finalité du traitement</h2>
    <p class="ta">
      Aucune donnée collectée.
    </p>


    <h2>Cookies</h2>
    <p class="ta">
      Ce site n’utilise aucun cookie.
    </p>

    <h2>Vos droits</h2>

    <p class="ta">
      Le site actuel respecte le Règlement Général sur la Protection des Données (RGPD), vous disposez des droits
      d’accès, de rectification, d’opposition, de suppression et de portabilité de vos données personnelles, ainsi que
      du droit de limiter leur traitement, conformément aux dispositions du RGPD.
    </p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.rgpd {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 900px;
  margin: auto;
  margin-bottom: 8rem;
  border: 4px dotted var(--clr-legal);
  background-color: var(--clr-bg-legals);
  border-radius: 16px;
  padding: 0 .6rem 5rem;
}

h1 {
  text-transform: uppercase;
  text-align: center;
  margin: 2rem 1rem;
  text-shadow: 0 1px 8px #ccc8c880;
}

h2 {
  text-align: center;
  margin: 3rem 0 2rem;
  text-shadow: 0 1px 8px #ccc8c880;
  text-decoration-line: underline;
}

p {
  color: var(--clr-texte);
  /* overflow-wrap: break-word; */
  word-wrap: break-word;
}

.ta {
  text-align: center;
}

.tal {
  text-align: justify;
  padding-left: .6rem;
  max-width: 600px;
}

.info {
  display: grid;
  grid-template-columns: minmax(0, 40%) minmax(0, 60%);
  gap: 1rem;
  margin: 1rem 0;
}


.info p:nth-child(odd) {
  color: var(--clr-strong);
}

a:hover {
  color: var(--clr-strong2);
}

@media (min-width: 475px) {
  .rgpd {
    padding: 0 1.2rem 5rem;
  }
}

@media (min-width: 640px) {
  .info {
    grid-template-columns: 50% 50%;

  }

  p {
    max-width: 700px;
  }
}

@media (min-width: 768px) {}

@media (min-width: 1024px) {}

@media (min-width: 1280px) {}

@media (min-width: 1536px) {}
</style>