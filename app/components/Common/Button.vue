<template>
  <div :class="{'right': position=='right', 'left': position=='left', 'center': position=='center'}">
    <button class="main_button">
      <a :href="to">
        {{ message }}
      </a>
    </button>

  </div>
</template>

<script lang="ts" setup>
defineProps<{
  message: string,
  to: string,
  position: 'left'|'right'|'center'|'none'
}>()
</script>

<style scoped>
.main_button {
  background-color: var(--clr-chair);
  padding: 1rem 1.25rem;
  font-family: 'Playfair Serif', sans-serif;
  font-weight: 600;
  letter-spacing: .025rem;
  border-radius: 4px;
}

.main_button:hover,
.main_button:focus,
.main_button:active {
  transform: scale(1.05);
}

.right {
  text-align: right;
  margin-right: 1rem;
}
.left {
  text-align: left;
  margin-left: 1rem;
}
.center {
  text-align: center;
  margin: auto;
}
</style>