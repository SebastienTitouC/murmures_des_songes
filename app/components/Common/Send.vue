<template>
  <NuxtLink class="send_button" to="sms:+33634247461">
    <div class="svg-wrapper-1">
      <div class="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path fill="#000"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
          </path>
        </svg>
      </div>
    </div>
    <span>Réserver vos papouilles</span>
  </NuxtLink>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.send_button {
  font-family: var(--font-serif);
  font-weight: 600;
  letter-spacing: .025rem;
  border-radius: 4px;

  width: 180px;
  min-height: 40px;
  background: var(--clr-chair);

  padding: 0.7rem 1rem;
  padding-left: 1em;
  display: flex;
  align-items: center;
  border: none;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
}

.send_button span {
  display: block;
  margin-left: 0.5em;
  transition: all 0.3s ease-in-out;
  color: var(--clr-black);
}

.send_button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;

}

.send_button .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

.send_button:hover svg {
  transform: translateX(3.5em) rotate(45deg) scale(1.1);
}

.send_button:hover span {
  transform: translateX(7.5em);
}

.send_button:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}


</style>