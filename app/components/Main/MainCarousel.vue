<template>
  <div class="carousel_wrapper">
    <UMarquee pause-on-hover class="marquee py-2 -mx-8 sm:-mx-12 lg:-mx-16 [--duration:40s]
       before:from-[#F4F4F8]  after:from-[#F4F4F8]">
      <Motion 
        v-for="(img, index) in images" :key="index" :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)'
      }" :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)'
      }" :transition="{
          duration: 0.6,
          delay: index * 0.1
        }">
        <img 
          :src="img" 
          :alt="`Image carousel ${index + 1}`"
          width="234px" 
          height="234px" 
          class="carousel_img rounded-lg aspect-square object-cover"
          :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'">
      </Motion>
    </UMarquee>
  </div>
</template>

<script lang="ts" setup>
import { Motion } from 'motion-v';

const images = [
  '/images/chalet.webp',
  '/images/bureau.webp',
  '/images/entree.webp',
  '/images/chalet2.webp',
  '/images/salle-de-massage.webp',
]
</script>

<style>
.carousel_wrapper {
  overflow: hidden;
  margin: 2rem 0 2rem;
}

.carousel_img:hover {
  transform: scale(1.05);
}
</style>