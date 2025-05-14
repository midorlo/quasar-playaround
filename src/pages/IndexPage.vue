<template>
  <q-page class="q-pa-md">
    <QMarkdown source="https://raw.githubusercontent.com/midorlo/quasar-playaround/refs/heads/master/README.md" />
    <q-card flat style="background: transparent">
      <q-card-section horizontal>
        <q-card-section>
          <q-card class="q-pa-md">
            <q-title text="Page Title" pageTitle />
            <q-title text="Section Title" section-title />
          </q-card>
        </q-card-section>
        <q-card-section>
          <q-card class="q-pa-md"></q-card>
        </q-card-section>
        <q-card-section>
          <q-card class="q-pa-md"></q-card>
        </q-card-section>
      </q-card-section>
    </q-card>
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
