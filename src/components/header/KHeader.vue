<template>
  <q-header class="text-primary q-pa-md">
    <q-toolbar class="header-toolbar q-px-lg">
      <!-- Menü und Logo Bereich -->
      <div class="row items-center no-wrap">
        <q-btn flat dense round icon="menu" aria-label="Menu" />
        <q-img
          src="~/assets/logos/midorlos-playground-logo.png"
          :ratio="618 / 148"
          width="150px"
          class="cursor-pointer q-ml-sm"
          fetchpriority="high"
          alt="Logo"
        />
      </div>
      <q-space />
      <!-- Suchleiste -->
      <q-input
        v-model="searchInput"
        class="search-input q-mx-md"
        style="max-width: 300px"
        outlined
        dense
        clearable
        placeholder="Suchen..."
        type="search"
      >
        <template #prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <!-- Rechte Icons -->
      <div class="row items-center q-gutter-sm">
        <q-btn flat dense round icon="notifications" aria-label="Benachrichtigungen">
          <q-badge v-if="notificationCount" color="negative" floating>
            {{ notificationCount }}
          </q-badge>
        </q-btn>
        <q-btn flat dense round icon="account_circle" aria-label="Benutzerkonto">
          <q-menu>
            <q-list style="min-width: 200px">
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-icon name="person" />
                </q-item-section>
                <q-item-section>Profil</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-icon name="settings" />
                </q-item-section>
                <q-item-section>Einstellungen</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-icon name="logout" />
                </q-item-section>
                <q-item-section>Abmelden</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchInput = ref('');
const notificationCount = ref(2); // Beispielwert für Benachrichtigungen
</script>

<style lang="scss">
@import '../../css/app.scss';

.header-toolbar {
  height: $header-height;
  background: transparent;
  backdrop-filter: blur(10px);
}

.search-input {
  transition: max-width 0.3s ease;

  :deep(.q-field__control) {
    background: rgba(0, 0, 0, 0.03);
    border-radius: $button-border-radius;
  }

  &:focus-within {
    :deep(.q-field__control) {
      background: rgba(0, 0, 0, 0.05);
    }
  }
}

// Responsive Anpassungen
@media (max-width: 600px) {
  .search-input {
    max-width: 200px;
  }
}
</style>
