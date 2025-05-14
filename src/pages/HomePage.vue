<template>
  <q-page class="q-pa-md">
    <q-title text="Midorlo's Quasar Page" section-title />
    <div class="text-body1">
      Random things that I create while learning Quasar and Vue 3.
    </div>
    <q-separator spaced></q-separator>
    <q-title text="README.md" element-title />
    <q-markdown sanitize file="markdown/README.md" class="shadow-22" height="400px" />
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
