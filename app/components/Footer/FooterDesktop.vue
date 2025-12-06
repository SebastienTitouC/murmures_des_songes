<template>
  <div class="footer">

    <div class="menu">
      <nav>
        <ul>
          <li>
            <h1 class="title">Menu</h1>
            <nav class="subNav">
              <ul>
                <li>
                  <NuxtLink to="/">Accueil</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/a-propos">Qui je suis ?</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services">Services</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
              </ul>
            </nav>

          </li>
          <li>
            <h1 class="title">Informations générales</h1>
            <nav class="subNav">
              <ul>
                <li>
                  <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/rgpd">Politique de Confidentialité</NuxtLink>
                </li>
              </ul>
            </nav>
          </li>
          <li>
            <br>
            <br>
            <NuxtLink to="/contact">
              <button class="contactBtn">Contactez moi</button>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <div class="footer__copyright">
      <svg fill="black" width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg"
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

</script>

<style scoped>
.footer {
  font-family: "Oxygen", monospace;
  letter-spacing: -.05rem;
  background-color: var(--clr-bg-footer);
  color: black;

  font-weight: 600;
  padding: 2rem;
  padding-top: 6rem;
  border-radius: 16px;
}

.menu ul {
  display: flex;
  justify-content: space-around;
  align-items: start;
  list-style: none;
}

.title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.subNav {
  position: relative;
}

.subNav::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background-color: #accb9a;
}

.subNav ul {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  gap: 1rem;
  padding-left: 32px;
  color: #ffffff;
  font-size: 1rem;
}

.footer__copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: .9rem;

  padding: 2rem 0 0 0;
}

.contactBtn {
  background-color: white;
  padding: 1rem 1.2rem;
  border-radius: 48px;
}

.contactBtn:hover {
  background-color: black;
  color: white;

}
</style>