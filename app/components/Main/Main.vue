<template>
  <div class="wrapper container">
    <div class="filter"></div>
    <div class="head">
      <h1>Modelage énergétique</h1>
      <h2>
        Redécouvrez la sensation apaisante du lâcher-prise dans un chalet privé, loin du bruit du monde.
      </h2>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.wrapper {
  width: 100vw;
  height: 100vh;
  background-image: url("/images/outils2.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 3;
}
.filter {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
}
.head {
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 1rem;
}
.head h1 {
  font-family: var(--font-serif);
  font-family: 'Alice';
  font-size: 3.5rem;
  font-weight: 400;
}
.head h2 {
  font-family: var(--font-sans);
  font-size: 1.5rem;
}
</style>