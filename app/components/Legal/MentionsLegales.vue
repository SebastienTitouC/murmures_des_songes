<template>
  <div class="mentions">
    <h1>Mentions légales</h1>
    <p>Dernière mise à jour : 12/12/2025</p>

    <h2>Propriétaire du site</h2>

    <div class="info">
      <p>Nom ou raison sociale</p>
      <p>Aux murmures des songes</p>
      <p>Adresse du siège social</p>
      <p>TODO</p>
      <p>Numéro de téléphone</p>
      <p><a href="tel:+33634247461">0634247461</a></p>
      <p>Adresse e-mail</p>
      <p><a href="mailto:TODO">TODO</a></p>
      <p>Forme juridique</p>
      <p>Association</p>
    </div>

    <h2>Editeur du site</h2>

    <div class="info">
      <p>Nom ou raison sociale</p>
      <p>STC</p>
      <p>Adresse du siège social</p>
      <p><a href="https://www.google.com/maps?q=127+Bis+Chem.+de+la+Peyrette,+31170+Tournefeuille" target="_blank">
          127B chemin de la peyrette, <br> 31170 Tournefeuille
        </a></p>
      <p>Numéro de téléphone</p>
      <p><a href="tel:+33658004127">0658004127</a></p>
      <p>Adresse e-mail</p>
      <p><a href="mailto:contact@creation-web-tournefeuille.fr">contact@creation-web-tournefeuille.fr</a></p>
      <p>Forme juridique</p>
      <p>Entrepreneur individuel</p>
      <p>SIREN</p>
      <p>938 040 359</p>
      <p>SIRET</p>
      <p>938 040 359 00011</p>
    </div>


    <h2>Hébergeur du site</h2>
    <div class="info">
      <p>Nom ou raison sociale</p>
      <p>o2switch</p>
      <p>Adresse</p>
      <p>Chemin des Pardiaux, <br> 63000 Clermont-Ferrand</p>
      <p>Numéro de téléphone</p>
      <p>0444446040</p>

    </div>

    <h2>Propriété intellectuelle</h2>
    <p class="ta">
      Le contenu de ce site, y compris les textes, images, graphiques, logos et icônes, est la propriété de "Aux murmures des songes", de STC ou de tiers ayant autorisé STC à les utiliser. <br>
      Toute reproduction, distribution, modification ou utilisation de ces éléments sans autorisation préalable est
      strictement interdite.
    </p>

    <h2>Droit applicable</h2>
    <p class="ta">Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de
      résolution amiable, les tribunaux français seront seuls compétents.</p>

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.mentions {
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

.info {
  display: grid;
  grid-template-columns: minmax(0, 40%) minmax(0, 60%);
  gap: 1rem;
  margin: 1rem 0;
}


.info p:nth-child(odd) {
  color: var(--clr-strong);
  font-weight: bold;
}

a:hover {
  color: var(--clr-strong);
}

@media (min-width: 475px) {
  .mentions {
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