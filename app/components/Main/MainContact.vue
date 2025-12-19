<template>
  <div class="last_content_wrapper">
    <CommonOrnament :svg="bulleSVG" alt="Ornement - Bulle" />
    <CommonText>
      <h1>
        <b>N'hésitez pas</b> à m'écrire pour prendre rendez-vous. 
        Il vous suffit d'indiquer votre <b>prénom</b> et vos <b>disponibilités</b>.
      </h1>
    </CommonText>

    <CommonSend  class="m-auto"/>
  </div>
</template>

<script lang="ts" setup>
import bulleSVG from '@/assets/svg/bulle.svg'
</script>

<style>

</style>