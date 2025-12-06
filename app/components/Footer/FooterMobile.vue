<template>
  <div class="footer">
    <button class="menu btn" @click="toggleMenu(1)">
      <h1 class="title">Menu</h1>
      <svg class="menu__details-svg_1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff"
        viewBox="0 0 256 256">
        <path
          d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z">
        </path>
      </svg>
    </button>
    <div class="submenu">
      <ul class="menu__details_1">
        <li>
          <NuxtLink to="/">Accueil</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/a-propos">Qui suis je ?</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services">La séance</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/plus-d-informations">Plus d'infos</NuxtLink>
        </li>
      </ul>
    </div>

    <div class="line"></div>

    <button class="menu btn" @click="toggleMenu(2)">
      <h1 class="title">Informations générales</h1>
      <svg class="menu__details-svg_2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff"
        viewBox="0 0 256 256">
        <path
          d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z">
        </path>
      </svg>
    </button>
    <div class="submenu">
      <ul class="menu__details_2">
        <li>
          <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/rgpd">Politique de Confidentialité</NuxtLink>
        </li>
      </ul>
    </div>

    <div class="line"></div>

    <br>
    <div class="flex justify-center items-end gap-1 ">
      <svg class="size-6" fill="#000" height="800px" width="800px" version="1.1" id="Layer_1"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.953 511.953"
        xml:space="preserve">
        <g transform="translate(-1)">
          <g>
            <g>
              <path d="M256.995,149.287c-11.776,0-21.333,9.579-21.333,21.333c0,11.755,9.557,21.333,21.333,21.333s21.333-9.579,21.333-21.333
				C278.328,158.865,268.771,149.287,256.995,149.287z" />
              <path d="M365.518,38.887C325.987,6.311,274.04-6.639,223.011,3.239C154.147,16.615,100.152,72.273,88.718,141.735
				c-6.784,41.003,0.725,81.216,21.696,116.267l8.704,14.528c27.861,46.443,56.64,94.485,79.701,143.893l38.848,83.221
				c3.499,7.509,11.029,12.309,19.328,12.309s15.829-4.8,19.328-12.309l34.965-74.923c23.317-49.984,52.096-98.688,79.957-145.792
				l12.971-22.016c15.339-26.091,23.445-55.936,23.445-86.293C427.662,119.484,405.006,71.463,365.518,38.887z M256.995,234.62
				c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64S292.28,234.62,256.995,234.62z" />
            </g>
          </g>
        </g>
      </svg>
      <h2 class="">
        Situé à Goutevernisse
      </h2>
    </div>

    <br>

    <div class="footer__copyright">
      <svg fill="#000" width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 367.467 367.467" xml:space="preserve">
        <g>
          <path d="M183.73,0.018C82.427,0.018,0,82.404,0,183.733c0,101.289,82.427,183.716,183.73,183.716
		c101.315,0,183.737-82.427,183.737-183.716C367.467,82.404,285.045,0.018,183.73,0.018z M183.73,326.518
		c-78.743,0-142.798-64.052-142.798-142.784c0-78.766,64.055-142.817,142.798-142.817c78.752,0,142.807,64.052,142.807,142.817
		C326.536,262.466,262.481,326.518,183.73,326.518z"></path>
          <path d="M244.036,217.014c-11.737,20.141-33.562,32.635-56.956,32.635c-36.329,0-65.921-29.585-65.921-65.915
		c0-36.36,29.592-65.955,65.921-65.955c23.395,0,45.219,12.54,56.956,32.641l1.517,2.627h44.28l-2.658-7.129
		c-7.705-20.413-21.225-37.769-39.122-50.157c-17.942-12.42-39.017-19.009-60.973-19.009c-58.981,0-106.946,48.006-106.946,106.982
		c0,58.98,47.965,106.941,106.946,106.941c21.956,0,43.03-6.567,60.973-19.006c17.897-12.391,31.417-29.741,39.122-50.154
		l2.658-7.133h-44.28L244.036,217.014z"></path>
        </g>
      </svg>
      <p>
        <NuxtLink to="https://creation-web-tournefeuille.fr">
          2025, créé par STC.
        </NuxtLink>
        Tous droits réservés.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const toggleMenu = (id: number) => {
  const details = document.querySelector(`.menu__details_${id}`)
  const details_svg = document.querySelector(`.menu__details-svg_${id}`)
  details?.classList.toggle("open")
  details_svg?.classList.toggle("open")
}
</script>

<style scoped>
.footer {
  letter-spacing: -.05rem;
  background-color: var(--clr-bg-footer);

  padding: 2rem;
  border-radius: 16px 16px 0 0;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-size: var(--size-xs);
  font-weight: 100;
  margin-bottom: 1.5rem;
}

.submenu {
  color: #000;
}

.line {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.238);
  margin: 1rem 0;
}

.title {
  font-family: var(--font-serif);
  font-size: var(--size-lg);
  color: var(--clr-black);
  font-weight: 900;

}

.btn {
  background-color: transparent;
  color: inherit;
  padding: 0;
  border-radius: 0;
  cursor: pointer;
  width: 100%;
  transition: .3s all;
}

.btn:hover {
  background-color: none;
  box-shadow: none;
}


.menu__details_1,
.menu__details_2 {
  display: none;
  flex-direction: column;
  gap: .6rem;
  color: var(--clr-black);
  font-family: var(--font-sans);
  list-style: none;
  padding: 0 0 0 .5rem;
  margin: 0;
  text-align: left;
  margin-bottom: 1rem;

  transition: all .3s;
}

.menu__details_1.open,
.menu__details_2.open {
  display: flex;
}

.menu__details-svg_1,
.menu__details-svg_1 {
  transition: all .5s;
}

.menu__details-svg_1.open,
.menu__details-svg_2.open {
  transform: rotate(180deg);
}

.socials {
  display: flex;
  gap: .8rem;
}

.footer__copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .6rem;
  font-size: .75rem;

  padding: 2rem 0 0 0;
}

.contactBtn {
  text-align: center;
  color: var(--clr-ghost);
  background-color: var(--clr-chair);

  font-weight: 600;
  padding: 1rem 1.2rem;
  border-radius: 48px;
}

.contactBtn:hover {
  background-color: black;
  color: white;

}
</style>