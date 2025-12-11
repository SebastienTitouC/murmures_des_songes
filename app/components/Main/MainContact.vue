<template>
  <div class="contact_wrapper">
    <CommonOrnament :svg="rabbitSVG" alt="TODO" />

    <h1 class="common_title mt-4">Informations utiles </h1>

    <div class="p-4">
      <p>
        Paiement en espèce, par virement, par Paypal ou Wero.
      </p>
      <br>
      <p>
        Pratiques non médicales, non thérapeutiques, ni sexuelles
      </p>

    </div>

    <div class="mt-8" >
      <CommonSend class="m-auto" />

    </div>


  </div>
</template>

<script lang="ts" setup>
import rabbitSVG from '@/assets/svg/lapin.svg'
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