<template>
  <div class="wrapper">
    <div class="filter"></div>
    <div class="head">
      <Motion :initial='{ opacity: 0, y: "80px" }' :animate='{ opacity: 1, y: "0%", }'
        :transition='{ duration: 0.6, delay: 0.075 }'>
        <h1>Modelage énergétique</h1>
      </Motion>
      <Motion :initial='{
        opacity: 0,
        y: "100px",
      }' :animate='{
        opacity: 1,
        y: "0%",
      }' :transition='{
        duration: 0.6,
        delay: 0.075
      }'>
        <h2>
          Redécouvrez la sensation apaisante du lâcher-prise dans un chalet privé, loin du bruit du monde.
        </h2>

      </Motion>
      <Motion :initial='{
        opacity: 0,
        y: "120px",
      }' :animate='{
        opacity: 1,
        y: "0%",
      }' :transition='{
        duration: 0.6,
        delay: 0.075
      }'>
        <CommonButton message="Appelez-moi" to="tel:+33658004127" position="center" />
      </Motion>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { Motion } from 'motion-v';

</script>

<style>
.wrapper {
  width: min(100vw, 1000px);
  height: 90vh;

  margin: auto;
  background-image: url("/images/outils2.JPG");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 3;
}

.filter {
  position: absolute;
  width: min(100vw, 1000px);
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.5);
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
  gap: 4rem;
  margin-top: 82px;
  color: var(--clr-white);
  text-align: center;
  padding: 0 1rem;
}

.head h1 {
  font-family: var(--font-title);
  font-size: 3.5rem;
  line-height: 3.5rem;
  font-weight: 800;
}

.head h2 {
  font-family: var(--font-sans);
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--clr-white);
}
</style>