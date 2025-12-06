<template>
  <div class="text-center">
    <div class="ornamental_deco_wrapper">
      <img class="ornamental_deco" src="@/assets/svg/papillon.svg" alt="">

    </div>
    <h1 class="title">Déroulement d'une séance</h1>

    <div ref="motionRef">

      <!-- Accueil -->
      <div class="img_wrapper">
        <Motion :style="style">
          <img class="procedure_img" src="/images/chalet2.JPG" alt="">
        </Motion>
      </div>
      <h2 class="subtitle">
        Accueil tout en douceur. <br>
      </h2>
      <p class="subtitle_para">
        Vous arrivez, on respire, on se pose. Je vous explique le déroulement en toute simplicité.
      </p>

      <!-- Installation -->
      <div ref="motionRef" class="img_wrapper-right">
        <Motion :style="style">
          <img class="procedure_img-right" src="/images/salle-de-massage3.JPG" alt="">
        </Motion>
      </div>
      <h2 class="subtitle-right">
        Installation confortable.
      </h2>
      <p class="subtitle_para-right">
        Vous êtes installée habillé, dans une position confortable, sur la table de soin.
        La séance est non verbale, pour vous laisser plonger dans vos sensations.
      </p>
    </div>

    <!-- Modelage -->
    <div ref="motionRef" class="img_wrapper">
      <Motion :style="style">
        <img class="procedure_img" src="/images/outils.JPG" alt="">
      </Motion>
    </div>
    <h2 class="subtitle">
      Modelage énergétique & scratching
    </h2>
    <p class="subtitle_para">
      À l’aide des doigts ou d’accessoires (pinceaux, peigne, baguette), je réalise un toucher léger, non musculaire.
      Zones travaillées : tête, épaules, dos, bras.
      L’objectif : stimuler les terminaisons nerveuses superficielles pour un relâchement profond.
    </p>

  </div>
</template>

<script lang="ts" setup>
import { Motion, useScroll, useTransform } from 'motion-v';
const motionRef = ref<HTMLElement | null>(null);
const { scrollYProgress } = useScroll({
  target: motionRef,
});

const translateYValue = useTransform(
  scrollYProgress,
  [0, 1],
  ['-32px', '-8px'],
  { clamp: false }
)
const style = {
  translateY: translateYValue
};
</script>

<style scoped>
.img_wrapper,
.img_wrapper-right {
  width: 200px;
  height: 150px;
  object-position: center;
  border-radius: 10px;
  background-color: var(--clr-brown);
  margin: 2rem;
}

.img_wrapper-right {
  margin: 2rem 2rem 2rem auto;
}

.procedure_img,
.procedure_img-right {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  transform: translate3d(-2rem, 0, 0);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.procedure_img-right {
  transform: translate3d(2rem, 0, 0);
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
  font-family: var(--font-serif);
  color: var(--clr-black);
  font-size: 2rem;
  font-weight: 800;
  margin: 2rem 1rem 4rem;
}

.subtitle,
.subtitle-right,
.subtitle_para,
.subtitle_para-right {
  font-family: var(--font-serif);
  color: var(--clr-black);
  text-align: right;
  padding-right: 1rem;
}

.subtitle,
.subtitle-right {
  font-weight: 800;
  font-size: 1.25rem;
}

.subtitle-right,
.subtitle_para-right {
  text-align: left;
  padding-left: 1rem;
}

.subtitle_para {
  font-family: var(--font-sans);
}
</style>