<template>
  <header>
    <div class="header_wrapper header_underline" :class="{ 'open': isMenuOpen, 'scrolled': menuComeback }">
      <header-logo :is-menu-open="isMenuOpen" />
      <header-menu @change="onChange" />
    </div>
    <header-open :is-menu-open="isMenuOpen" />
  </header>
</template>

<script lang="ts" setup>
const isMenuOpen = ref(false)
const menuComeback = ref(false)
const route = useRoute()
const onChange = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  if (window.scrollY > window.innerHeight * 0.8) {
    menuComeback.value = true
  } else {
    menuComeback.value = false
  }
}

onMounted(() => {
  if (route.path === '/rgpd' || route.path === '/mentions-legales') {
    menuComeback.value = true
  }
  else {
    if (window.scrollY > window.innerHeight * 0.8) {
      menuComeback.value = true
    }
    window.addEventListener('scroll', handleScroll)

  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style>
.header_wrapper {
  position: fixed;
  backdrop-filter: blur(6px);
  color: var(--clr-white);
  top: 0;
  font-family: var(--font-sans);
  text-align: center;
  width: 100%;

  z-index: 1000;
  border-radius: 0 0 16px 16px;

  display: grid;
  grid-template-areas: ". enterprise menu";
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 82px;
  align-items: center;
  justify-content: center;
}

.scrolled {
  background-image: linear-gradient(var(--clr-ghost) 55%, #ffffffA0);

  color: var(--clr-black);
}

.header_underline::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 1px;
  background-color: var(--clr-black);
  transition: width .3s ease-in;
  opacity: 0;
}

.header_underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0%;
  height: 1px;
  background-color: var(--clr-black);
  transition: width .3s ease-in;
  opacity: 0;
}

.header_underline.open::before,
.header_underline.open::after {
  width: 40%;
  opacity: 1;
}

.header_wrapper.open {
  color: var(--clr-black);
  background-image: none;
}


@media (min-width: 475px) {

  /* Mobile */
  .header_wrapper {
    padding: 0 2rem;
  }
}

@media (min-width: 640px) {
  /* Mobile large */

  .header_wrapper {
    padding: 0 3rem;
  }
}

@media (min-width: 768px) {

  /* Tablette */
  .header_wrapper {
    padding: 0 4rem;
  }
}

@media (min-width: 1024px) {
  /* Desktop */

  .header_wrapper {
    padding: 0 5rem;
  }
}

@media (min-width: 1280px) {

  /* Desktop large */
  /* .header_wrapper {
    padding: 0 6rem;
  } */
  .header_wrapper {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1280px;
    border-radius: 1rem;
  }
}

@media (min-width: 1536px) {

  /* Desktop xl */
  /* .header_wrapper {
    grid-template-columns: repeat(3, 420px);
  } */
}
</style>