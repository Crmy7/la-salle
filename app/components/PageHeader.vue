<template>
  <header class="phead" :class="{ 'phead--compact': compact }">
    <div class="phead__media">
      <img :src="image" :alt="imageAlt" data-parallax-img >
    </div>
    <div class="phead__veil" />
    <div class="container phead__inner">
      <h1 class="phead__title" data-title-reveal>{{ title }}</h1>
      <p v-if="intro" class="phead__intro" data-reveal-lines>{{ intro }}</p>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  intro?: string
  image: string
  imageAlt: string
  /** Titre long : échelle réduite, sinon le mot le plus long déborde */
  compact?: boolean
}>()
</script>
