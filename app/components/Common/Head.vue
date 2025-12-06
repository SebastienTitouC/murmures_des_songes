<template>
  <div class="wrapper" :style="{ backgroundImage: `url(${props.bgImage})` }">
    <div class="filter"></div>
    <div class="head">
      <Motion :initial='{ opacity: 0, y: "80px" }' :animate='{ opacity: 1, y: "0%", }'
        :transition='{ duration: 0.6, delay: 0.075 }'>
        <h1>
          {{ mainTitle }}
        </h1>
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
          {{ description }}
        </h2>

      </Motion>
      <Motion v-if="withButton" :initial='{
        opacity: 0,
        y: "120px",
      }' :animate='{
        opacity: 1,
        y: "0%",
      }' :transition='{
        duration: 0.6,
        delay: 0.075
      }'>
        <CommonSend class="button" />
      </Motion>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { Motion } from 'motion-v';

const props = defineProps<{
  mainTitle: string,
  description: string,
  withButton: boolean,
  bgImage: string

}>();
</script>

<style scoped>
.wrapper {
  width: min(100vw, 1440px);
  min-height: 660px;
  height: min(90vh, 850px);
  margin: auto;
  background-image: linear-gradient(var(--clr-white), var(--clr-chair));
  background-position: 50% 25%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 3;
  background-color: var(--clr-ghost);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

.filter {
  position: absolute;
  left: 0;
  right: 0;
  width: min(100vw, 1440px);
  min-height: 660px;
  height: min(90vh, 850px);
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
  font-weight: 900;
  text-shadow:0 1px 0 #101010;
}

.head h2 {
  font-family: var(--font-sans);
  font-size: var(--size-xl);
  font-weight: 900;
  color: var(--clr-white);
  max-width: 420px;
  text-shadow:0 1px 0 #101010;

}

@media (min-width: 475px) {

  /* Mobile */
  .head h1 {
    font-size: var(--size-6xl);
  }

  .head h2 {
    font-size: var(--size-2xl);
  }
}

@media (min-width: 640px) {
  /* Mobile large */
}

@media (min-width: 768px) {
  /* Tablette */
}

@media (min-width: 1024px) {
  /* Desktop */
}

@media (min-width: 1280px) {

  /* Desktop large */
  .wrapper {
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  .filter {
    border-radius: .25rem;
  }
}

@media (min-width: 1536px) {}
</style>