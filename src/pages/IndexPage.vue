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

</style>
