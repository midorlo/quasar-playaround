<template>
  <q-toolbar>
    <q-btn flat dense round icon="menu" aria-label="Menu"  />
    <q-avatar icon="home" rounded color="primary" text-color="white" />
    <q-space />
    <q-input
      v-model="searchInput"
      class="search-container"
      rounded
      dense
      outlined
      clearable
      standout
      type="text"
      style="width: 60%"
    />
    <q-toolbar class="header-container">
      <q-btn flat icon="notifications" class="icon-style" ripple />
      <q-btn flat icon="account_circle" class="icon-style" ripple />
    </q-toolbar>
  </q-toolbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchInput = ref('');
</script>

<style scoped>
.search-container {
  border-radius: 16px; /* Abgerundete Ecken für das Container-Div */
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
  mix-blend-mode: multiply;
}

.header-container {
  width: auto;
}

.q-toolbar {
  display: flex;
  justify-content: flex-end;
  padding: 0;
  min-width: 0;
}
</style>
