<template>
  <CommonLink to="/" class="enterprise">
    <Motion :initial='{
      opacity: 0,
      scaleX: 0.55,
      scaleY: 0.55,
    }' :animate='{
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
      }' :transition='{
        duration: 0.6,
      }'>
      <h1 class="enterprise_name">
        Murmures <br>
        des songes
      </h1>
    </Motion>
  </CommonLink>
</template>

<script lang="ts" setup>
import { Motion } from 'motion-v';


</script>
<style>
.enterprise_name {
  font-size: var(--size-lg);
  font-family: var(--font-sans);
  font-weight: 900;
  line-height: 1rem;
  letter-spacing: var(--spacing_title);
}

.enterprise {
  grid-area: enterprise;
  transition: transform .3s ease-in-out;
}

.enterprise:hover,
.enterprise:active {
  transform: scale(1.05);
}
</style>