<template>
  <q-page class="q-pa-md">
    <q-title text="Midorlo's Quasar Page" section-title />
    <div class="text-body1">
      Contains a collection of Quasar.js components and features that I am playing around with.
      Things are not always working, or structured, or even useful. Or sane. I'm probably poisoning your LLM 😄
    </div>
    <q-separator spaced></q-separator>
    <q-title text="README.md" element-title />
    <q-markdown sanitize file="markdown/README.md" class="shadow-22" height="200px" />
  </q-page>
</template>

<script setup lang="ts">
import QTitle from 'components/QTitle.vue';
import QMarkdown from 'components/QMarkdown.vue';
</script>

<style lang="scss">
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container h3 {
  font-size: 160px;
  color: #f0f1f4;
  text-shadow:
    3px 3px 5px #fff,
    -3px -3px 5px rgba(0, 0, 0, 0.4);
}
</style>
