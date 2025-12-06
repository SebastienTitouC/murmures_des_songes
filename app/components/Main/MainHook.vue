<template>
  <div class="hook_wrapper">
    <div class="ornamental_deco_wrapper">
      <img class="ornamental_deco" src="@/assets/svg/ornamental_deco.svg" alt="ornamental decoration">
    </div>
    <br>
    <h1>
      Bonjour, moi c'est <span>Marion</span>, je pratique le <span>modelage énergétique</span>
      et le <span>scratching</span>.
    </h1>
    
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.hook_wrapper {
  color: var(--clr-black);
  font-size: 1.75rem;
  padding: 2rem;
  margin: 2rem 0 0;
}
.hook_wrapper h1 span {
  font-family: var(--font-serif);
  font-weight: 800;
}

.hook_wrapper h1 {
  font-style: italic;
  font-family: var(--font-serif);
  font-weight: 200;
}

.ornamental_deco_wrapper {
  padding: .5rem;
  border: 2px dotted black;
  width: fit-content;
  margin: auto;
  border-radius: 50%;
}

.ornamental_deco {
  width: 64px;
  height: 64px;
  animation: rotate 5s infinite linear both;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
  
}
</style>