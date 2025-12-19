<template>
  <div class="video_wrapper">
    <video class="video" muted="true" autoplay loop playsinline aria-label="Démonstration de la séance de massage">
      <source src="/massage.webm" type="video/webm">
      <source src="/massage.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.video_wrapper {
  min-width: 290px;
  width: calc(min(650px, 70vh) / 1.778);
  height: min(650px, 70vh);
  padding: 10px;
  margin: 1rem auto 2rem;
  position: relative;
  background-color: var(--clr-ghost);
  z-index: 5;
}

.video_wrapper::before,
.video_wrapper::after {
  content: '';
  position: absolute;
  width: 50%;
  height: 25%;
  --gap: -10px;
  z-index: 4;
}

.video_wrapper::after {
  top: var(--gap);
  left: var(--gap);
  border-top: 3px solid var(--clr-chair);
  border-left: 3px solid var(--clr-chair);
  border-radius: 30px 0 0 0;
  box-shadow: rgba(234, 166, 67, 0.15) -5px -5px 10px;

}

.video_wrapper::before {
  bottom: var(--gap);
  right: var(--gap);
  border-right: 3px solid var(--clr-chair);
  border-bottom: 3px solid var(--clr-chair);
  border-radius: 0 0 30px 0;
  box-shadow: rgba(234, 166, 67, 0.15) 5px 5px 10px;

}

.video {
  min-width: 290px;
  min-height: min(650px, 70vh);
  height: auto;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
</style>