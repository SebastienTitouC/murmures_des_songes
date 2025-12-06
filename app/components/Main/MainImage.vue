<template>
  <div ref="img__container" class="image_wrapper">
    <span class="image_frame" :style="{ transform: `scale(${currentScale}) translateY(${currentY}px)` }" />
  </div>
</template>

<script lang="ts" setup>
// Définition de l'amplitude de l'effet
const MIN_SCALE = 0.9;
const MAX_SCALE = 1.0;
const MAX_Y_TRANSLATION = 40; // Décalage max en pixels pour le parallax

const img__container = ref<HTMLElement | null>(null);
const currentScale = ref(MIN_SCALE)

const currentY = ref(0);

let animationFrameId: number | null = null;

const handleScroll = () => {
  if (!img__container.value) return;

  const rect = img__container.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Définir la zone de déclenchement (début de l'écran à 20% du haut)
  const startPoint = viewportHeight * 0.9;
  const endPoint = viewportHeight * 0.1;

  // 1. Calculer la progression (0 à 1)
  let progress = (startPoint - rect.top) / (startPoint - endPoint);
  progress = Math.min(1, Math.max(0, progress)); // Clamper entre 0 et 1

  // 2. Calculer le SCALE (0.8 -> 1.0)
  const newScale = MIN_SCALE + (progress * (MAX_SCALE - MIN_SCALE));
  currentScale.value = newScale;

  // 3. Calculer le TRANSLATEY (50px -> 0px) pour l'effet parallax
  // Quand progress = 0 (début) -> newY = 50
  // Quand progress = 1 (fin) -> newY = 0
  const newY = MAX_Y_TRANSLATION - (1 - progress) * MAX_Y_TRANSLATION;
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
  margin-bottom: 30px;
  /* = MAX_Y_TRANSLATION */
}

.image_frame {
  position: relative;
  width: calc(100vw - 8rem);
  max-width: 300px;
  height: calc((100vw - 8rem) * 1.2);
  max-height: 360px;
  background-image: url("/images/marion.webp");
  background-size: cover;
  background-position: top;
  border-radius: 1rem;
}

.image_frame::after {
  content: '';
  position: absolute;
  top: 2%;
  bottom: 2%;
  left: 2%;
  right: 2%;
  border: 1px solid var(--clr-ghost);
  border-radius: inherit;
}


@media (min-width: 475px) {
  /* Mobile */
}

@media (min-width: 640px) {

  /* Mobile large */
  .image_frame {
    max-width: 240px;
    max-height: 300px;
  }
}

@media (min-width: 768px) {
  /* Tablette */
}

@media (min-width: 1024px) {

  /* Desktop */
  .image_frame {
    max-height: 360px;
  }
}

@media (min-width: 1280px) {
  /* Desktop large */
}

@media (min-width: 1536px) {
  /* Desktop xl */
}
</style>