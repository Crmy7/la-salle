<template>
  <section class="band" aria-hidden="true">
    <div class="band__track" data-marquee>
      <div class="band__group">
        <template v-for="mot in mots" :key="mot">
          <span>{{ mot }}</span><i>◆</i>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const mots = ['Musculation', 'Cross Training', 'Cours collectifs', 'Squash', 'Kids & Ados', 'Stronger Everyday']
</script>
