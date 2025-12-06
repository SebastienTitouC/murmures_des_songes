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
          <NuxtLink to="/services">Services</NuxtLink>
        </li>
                <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
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

    <h1 class="title">Suivez nous</h1>
    <br>
    <div class="socials">
      <a 
        href="https://www.instagram.com/_fermettedes3_/" 
        target="_blank"
        aria-label="Instagram">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              fill="#ffffff"></path>
            <path
              d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
              fill="#ffffff"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
              fill="#ffffff"></path>
          </g>
        </svg>
      </a>
      <a 
        href="https://www.facebook.com/p/La-fermette-des-3-nouveau-compte-61571593081763/" 
        target="_blank"
        aria-label="Facebook">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
              fill="#ffffff"></path>
          </g>
        </svg>
      </a>
    </div>
    <br>
    <NuxtLink class="flex justify-center items-center" to="/contact">
      <button class="title contactBtn">Contactez nous</button>
    </NuxtLink>
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
      <p>2025, créé par STC. Tous droits réservés.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const toggleMenu = (id) => {
  const details = document.querySelector(`.menu__details_${id}`)
  const details_svg = document.querySelector(`.menu__details-svg_${id}`)
  details?.classList.toggle("open")
  details_svg?.classList.toggle("open")
}
</script>

<style scoped>
.footer {
  font-family: "Oxygen", monospace;
  letter-spacing: -.05rem;
  background-color: var(--clr-bg-footer);
  /* font-size: 1.25rem; */

  padding: 2rem;
  border-radius: 16px 16px 0 0;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #dedede;
  font-size: var(--size-xs);
  font-weight: 100;
  margin-bottom: 1.5rem;
}

.submenu {
  color: #ffffff7b;
}

.line {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.238);
  margin: 1rem 0;
}

.title {
  font-size: 1rem;
  
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
  color: #ffffff;
  list-style: none;
  padding: 0;
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
  color: var(--clr-black);
  background-color: white;
  padding: 1rem 1.2rem;
  border-radius: 48px;
}

.contactBtn:hover {
  background-color: black;
  color: white;

}
</style>