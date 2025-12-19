<template>
  <CommonLink to="/" class="enterprise" @click.prevent="scrollToTop">
    <Motion :initial='{
      opacity: 0,
      scaleX: 0.55,
      scaleY: 0.55,
    }' :animate='{
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
    }' :transition='{
      duration: 0.6,
    }'>
      <h1 class="enterprise_name">
        Murmures <br>
        des songes
      </h1>
    </Motion>
    <svg 
      v-show="model" class="home_button" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path
          d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </g>
    </svg>
  </CommonLink>
</template>

<script lang="ts" setup>
import { Motion } from 'motion-v';

const model = defineModel<boolean>()


const scrollToTop = () => {
  model.value = false
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.enterprise_name {
  font-size: var(--size-lg);
  font-family: var(--font-sans);
  font-weight: 900;
  line-height: 1rem;
  letter-spacing: var(--spacing_title);
}

.enterprise {
  grid-area: enterprise;
  transition: transform .3s ease-in-out;
  position: relative;
}

.home_button {
  position: absolute;
  bottom: calc(-24px - 10px);
  left: calc(50% - 12px);
}

.enterprise:hover,
.enterprise:active {
  transform: scale(1.05);
}


@media (min-width: 475px) {
  /* Mobile */
}

@media (min-width: 640px) {
  /* Mobile large */
}

@media (min-width: 768px) {

  /* Tablette */
  .enterprise_name {
    font-size: var(--size-xl);
  }
}

@media (min-width: 1024px) {

  /* Desktop */
  .enterprise_name {
    font-size: var(--size-2xl);
    line-height: 1.25rem;
  }
}

@media (min-width: 1280px) {

  /* Desktop large */
  .enterprise_name {
    font-size: var(--size-3xl);
    line-height: 1.25rem;
  }
}

@media (min-width: 1536px) {

  /* Desktop xl */
}
</style>