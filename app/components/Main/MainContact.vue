<template>
  <div class="contact_wrapper">
    <div class="ornamental_deco_wrapper">
      <img class="ornamental_deco" src="@/assets/svg/lapin.svg" alt="">
    </div>

    <h1 class="title">Informations utiles </h1>

    <p>Paiement en espèce, par virement, par Paypal ou Wero.
    </p>
    <p>
      Pratiques non médicales, non thérapeutiques, ni sexuelles
    </p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.contact_wrapper {
  margin: 4rem 0;
  color: var(--clr-black);
  padding: 0 1rem;
}


.ornamental_deco_wrapper {
  width: fit-content;
  margin: 4rem auto 0;
}

.ornamental_deco {
  width: 64px;
  height: 64px;
}

.title {
  text-align: center;
  font-size: 2rem;
  font-family: var(--font-serif);
  font-weight: 800;
  margin: 2rem 0;
}
</style>