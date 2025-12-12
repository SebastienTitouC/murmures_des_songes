<template>
  <div class="last_content_wrapper">
    <CommonOrnament :svg="rabbitSVG" alt="Ornement - Lapin" />

    <div class="text">
      <h1 class="common_title mt-4">Indications utiles </h1>
  
      <div class="p-4">
        <p>
          Paiement en espèce, par virement, par Paypal ou Wero.
        </p>
        <br>
        <p>
          Pratiques non médicales, non thérapeutiques, ni sexuelles
        </p>
        <br>
        <p>
          Prise de rendez-vous uniquement par message. Indiquez votre prénom ainsi que vos disponibilités.
        </p>

      <div class="mt-8">
        <CommonSend class="m-auto" />
      </div>
      </div>
  
      <div class="mt-8">
        <CommonSend class="m-auto" />
      </div>

    </div>


  </div>
</template>

<script lang="ts" setup>
import rabbitSVG from '@/assets/svg/lapin.svg'
</script>

<style scoped>

.text {
  padding: 0 1rem;

}
.title {
  text-align: center;
  font-size: 2rem;
  font-family: var(--font-serif);
  font-weight: 800;
  margin: 2rem 1rem0;
}
</style>