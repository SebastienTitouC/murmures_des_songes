<template>
<NuxtLink class="send_button" to="sms:/0658004127/?body=Bonjour Marion,">
      <div class="svg-wrapper-1">
        <div class="svg-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
            </path>
          </svg>
        </div>
      </div>
      <span>Message</span>
    </NuxtLink>
</template>

<script lang="ts" setup>

</script>

<style scoped>

.send_button {
  font-family: 'Playfair Serif', sans-serif;
  font-weight: 600;
  letter-spacing: .025rem;
  border-radius: 4px;

  width: 140px;
  background: var(--clr-chair);

  padding: 0.7em 1em;
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
  color: inherit;
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
  transform: translateX(2.5em) rotate(45deg) scale(1.1);
}

.send_button:hover span {
  transform: translateX(6em);
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