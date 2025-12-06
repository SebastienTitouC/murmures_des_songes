<template>
  <Motion :style="style">
    <div ref="motionRef" class="img-wrap" :class="{ 'img-wrap-right': position == 'right' }">
      <img :src="image" :alt="alt" width="120px" height="120px" >
    </div>
  </Motion>
</template>

<script lang="ts" setup>
import { Motion, useScroll, useTransform } from 'motion-v';
const motionRef = ref<HTMLElement | null>(null);

defineProps<{
  position: 'right' | 'left',
  image: string,
  alt: string
}>()

const translateYValue = useTransform(
  useScroll({ target: motionRef, }).scrollYProgress,
  [0, 1],
  ['-20px', '0px'],
  { clamp: false }
)
const style = { translateY: translateYValue }

/* Scroll */
function getProgress() {
  const rect = motionRef.value?.getBoundingClientRect();
  if (!rect) return 0;
  const windowHeight = window.innerHeight;

  const progress = 1 - (rect.bottom / (rect.height + windowHeight));

  return Math.min(1, Math.max(0, progress));
}

const handleScroll = () => {
  if (motionRef.value) {
    motionRef.value.style.setProperty('--distance', (getProgress() * 45) + 10 + '%')

  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
}
)
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
.img-wrap {
  --border: 3px;
  --color1: #372316;
  --color2: #EAA643;
  --color3: #F4F4F8;
  --from: 40deg;
  --distance: 10%;

  height: 120px;
  width: 120px;

  position: relative;
  padding: 10px;
  transition: all 3s ease;
}

.img-wrap.visible {
  --distance: 45%;
}

.img-wrap-right {
  --from: 130deg;
}

.img-wrap::after {
  content: '';
  border-radius: 999px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: conic-gradient(from var(--from),
      var(--color1),
      var(--color2),
      var(--color3) var(--distance),
      transparent var(--distance));
  -webkit-mask: radial-gradient(farthest-side,
      transparent calc(100% - var(--border)),
      #fff calc(100% - var(--border) + 1px));
  mask: radial-gradient(farthest-side,
      transparent calc(100% - var(--border)),
      #fff calc(100% - var(--border) + 1px));

}

img {
  border-radius: 999px;
  display: block;
  width: 100px;
  height: 100px;

}


@media (min-width: 475px) {
  /* Mobile */
}

@media (min-width: 640px) {
  /* Mobile large */
}

@media (min-width: 768px) {

  /* Tablette */
  .img-wrap {
    width: 160px;
    height: 160px;
  }

  img {
    border-radius: 999px;
    display: block;
    width: 140px;
    height: 140px;

  }
}

@media (min-width: 1024px) {
  /* Desktop */
}

@media (min-width: 1280px) {
  /* Desktop large */
}

@media (min-width: 1536px) {
  /* Desktop xl */
}
</style>