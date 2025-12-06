<template>
  <Motion :initial='{ opacity: 0, y: "140px", }' :animate='{ opacity: 1, y: "0%", }'
    :transition='{ duration: 0.6, delay: 0.1 }'>
    <div ref="img__container" class="image_wrapper">
      <img src="/images/marion.JPG" alt="TODO" width="80%" height="auto"
        :style="{ transform: `scale(${currentScale}) translateY(${currentY}px)` }">
    </div>
  </Motion>

</template>

<script lang="ts" setup>
import { Motion } from 'motion-v';

// Définition de l'amplitude de l'effet
const MIN_SCALE = 0.9;
const MAX_SCALE = 1.0;
const MAX_Y_TRANSLATION = 55; // Décalage max en pixels pour le parallax

const img__container = ref(null);
const currentScale = ref(MIN_SCALE)

const currentY = ref(0);

let animationFrameId = null;

const handleScroll = () => {
  if (!img__container.value) return;

  const rect = img__container.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Définir la zone de déclenchement (début de l'écran à 20% du haut)
  const startPoint = viewportHeight * 0.9;
  const endPoint = viewportHeight * 0.2;

  // 1. Calculer la progression (0 à 1)
  let progress = (startPoint - rect.top) / (startPoint - endPoint);
  progress = Math.min(1, Math.max(0, progress)); // Clamper entre 0 et 1

  // 2. Calculer le SCALE (0.8 -> 1.0)
  const newScale = MIN_SCALE + (progress * (MAX_SCALE - MIN_SCALE));
  currentScale.value = newScale;

  // 3. Calculer le TRANSLATEY (50px -> 0px) pour l'effet parallax
  // Quand progress = 0 (début) -> newY = 50
  // Quand progress = 1 (fin) -> newY = 0
  const newY = MAX_Y_TRANSLATION - (MAX_Y_TRANSLATION * (1 - progress));
  currentY.value = newY;

  // Lancer le prochain frame d'animation
  animationFrameId = requestAnimationFrame(handleScroll);
};

onMounted(() => {
  handleScroll();
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style>
.image_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 55px;
  /* = MAX_Y_TRANSLATION */
}

.image_wrapper img {
  border-radius: 1rem;
}
</style>