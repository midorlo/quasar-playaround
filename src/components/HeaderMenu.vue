<template>
  <div class="q-pa-md">
    <q-toolbar class="header-toolbar q-pl-xl">
      <!-- Logo links -->
      <q-btn flat dense round icon="menu" aria-label="Menu" />
      <img src="assets/logos/onlydev-logo.png" alt="logo" class="logo" />

      <!-- Suchleiste zentriert -->
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
        style="width: 40%"
      />

      <!-- Benachrichtigungs- und Kontosymbole rechts -->
      <q-btn flat icon="notifications" class="icon-style" ripple />
      <q-btn flat icon="account_circle" class="icon-style" ripple />
    </q-toolbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchInput = ref('');
</script>

<style scoped>
/* Logo */
.logo {
  max-height: 48px;
  padding-left: 16px;
}

/* Container der Suchleiste */
.search-container {
  border-radius: 16px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
  mix-blend-mode: multiply;
  width: 100%;
}

/* Flexbox-Layout für Toolbar */
.header-toolbar {
  display: flex;
  justify-content: space-between; /* Elemente verteilen sich von links nach rechts */
  align-items: center;
  padding: 0; /* Keine Margins */
  min-width: 0;
  background-color: transparent; /* Transparenter Hintergrund */
}

/* Die Button-Größen und Icons anpassen */
.icon-style {
  font-size: 20px;
}

/* Maximale Breite für kleine Bildschirme */
@media (max-width: 768px) {
  .search-container {
    width: 60%; /* Suchleiste wird breiter auf mobilen Geräten */
  }

  .logo {
    max-height: 40px;
  }
}
</style>
