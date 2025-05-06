<template>
  <q-page class="q-pa-md">
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
import QTitle from 'components/general/QTitle.vue';
</script>

<style lang="scss">
.q-card {
  background: linear-gradient(to bottom right, #ffffff, #e5e5e5);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  mix-blend-mode: multiply;
}
</style>
