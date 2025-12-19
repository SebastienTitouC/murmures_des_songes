<template>
  <div v-show="model" class="menu_wrapper" :class='{ "open": model }'>
    <CommonSend class="button" :class='{ "appear": model }' />
    <ul class="link_wrapper" :class='{ "appear": model }'>
      <NuxtLink to="/a-propos" @click="onClick">
        <li class="link_card">

          <div class="link_img_wrapper">
            <img class="link_img object-top" src="/images/marion.webp" alt="Photo de Marion" width="120px" height="120px" >
          </div>

          <div class="flex flex-col justify-center gap-1 py-2">
            <div class="small_title">
              <h1 class="link_title">
                Qui suis je ?
              </h1>
              <svg class="arrow" viewBox="0 0 20 18" fill="none">
                <path d="M0 9H18" stroke-width="2"></path>
                <path d="M10 1L18 9L10 17" stroke-width="2"></path>
              </svg>
            </div>
            <p class="link_description">
              Rencontrez mon univers, découvrez mon histoire.
            </p>
          </div>
        </li>
      </NuxtLink>

      <NuxtLink to="/services" @click="onClick">
        <li class="link_card">
          <div class="link_img_wrapper">
            <img class="link_img" src="/images/massage.webp" alt="Scratching" width="120px" height="120px" >
          </div>
          <div class="flex flex-col justify-center gap-1 py-2">
            <div class="small_title">
              <h1 class="link_title">
                La séance
              </h1>
              <svg class="arrow" viewBox="0 0 20 18" fill="none">
                <path d="M0 9H18" stroke-width="2"></path>
                <path d="M10 1L18 9L10 17" stroke-width="2"></path>
              </svg>
            </div>
            <p class="link_description">
              Une évasion sensorielle pour apaiser le corps et l'esprit.
            </p>
          </div>
        </li>
      </NuxtLink>

      <NuxtLink to="/plus-d-informations" @click="onClick">
        <li class="link_card">
          <div class="link_img_wrapper">
            <img class="link_img object-bottom" src="/images/bureau.webp" alt="Photo du bureau" width="120px" height="120px" >
          </div>
          <div class="flex flex-col justify-center gap-1 py-2">
            <div class="small_title">
              <h1 class="link_title">
                Plus d'infos
              </h1>
              <svg class="arrow" viewBox="0 0 20 18" fill="none">
                <path d="M0 9H18" stroke-width="2"></path>
                <path d="M10 1L18 9L10 17" stroke-width="2"></path>
              </svg>
            </div>
            <p class="link_description">
              Toutes les réponses à vos questions se trouvent ici.
            </p>
          </div>
        </li>
      </NuxtLink>
    </ul>

    <div class="flex justify-center items-end gap-1 text-(--clr-chair) opacity-0 mb-8" :class='{ "appear": model }'>
      <img class="size-6" src="@/assets/svg/location.svg" alt="Location icon" width="24px" height="24px" >
      <h2 class="font-bold">
        Situé à Goutevernisse
      </h2>
    </div>
  </div>
</template>

<script lang="ts" setup>

const model = defineModel<boolean>()

const onClick = () => {
	model.value = false
}


</script>

<style scoped>
.menu-open {
  background-color: var(--clr-menu);
  color: var(--clr-black);
}

.menu_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: calc(82px + 3rem);
  gap: 3rem;
  position: fixed;
  overflow-y:scroll;
  top: 0;
  left: 0;
  z-index: 900;
  width: 100vw;
  height: 0vh;
  background-color: var(--clr-menu);
  transition: width .6s;
}

.menu_wrapper.open {
  animation: openMenu .4s cubic-bezier(0, .40, .45, .99) forwards;
}

@keyframes openMenu {
  to {
    height: 100vh;

  }
}

.appear {
  animation: appearEl .3s cubic-bezier(1, 0, 0, .99) .05s forwards;
}

@keyframes appearEl {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.link_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0rem;
  padding: 0 1rem;
}

.button {
  color: var(--clr-ghost);
}

.link_wrapper,
.button {
  opacity: 0;
  transform: scale(0.9);
}

.link_card {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  width: min(100%, 500px);

  padding: 0 1.5rem 1rem;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.link_img {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: .5rem;
  object-fit: cover;
  position: relative;
  filter: saturate(1.25);
}

.link_img_wrapper {
  position: relative;
  max-width: 120px;
}

.link_img_wrapper:after {
  content: '';
  position: absolute;
  top: 2%;
  bottom: 2%;
  left: 2%;
  right: 2%;
  border: 1px solid var(--clr-white);
  border-radius: 8px;
}

.small_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  stroke: var(--clr-black);
  width: 1em;
}

.link_title {
  font-family: var(--font-serif);
  font-size: var(--size-base);
  font-weight: 900;

  color: var(--clr-bg-black);
  opacity: .9;
}

.link_description {
  font-size: var(--size-xs);
  text-align: left;
  font-weight: 800;
  line-height: 1.125rem;
  font-family: var(--font-sans);
  max-width: 290px;
}

@media (min-width: 475px) {
    /* Mobile */
}

@media (min-width: 640px) {
    /* Mobile large */
}

@media (min-width: 768px) {
    /* Tablette */
    
.link_title {
  font-size: var(--size-xl);
}

.link_description {
  font-size: var(--size-base);
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