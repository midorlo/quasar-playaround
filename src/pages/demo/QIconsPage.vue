<template>
  <q-page class="q-pa-md">
    <div
      class="icon-grid"
      ref="iconGrid"
      @scroll="handleScroll"
      style="height: 80vh; overflow-y: auto"
    >
      <q-btn
        v-for="(icon, index) in visibleIcons"
        :key="index"
        :icon="icon"
        label=" "
        class="q-mx-xs q-mb-xs"
        style="width: 100px; height: 100px; font-size: 32px; text-align: center"
        flat
        color="primary"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Dynamische Listen von Material Icons und Font Awesome Icons
// Diese Listen beinhalten nun eine große Sammlung von Icons
const materialIcons = [
  'home',
  'account_circle',
  'settings',
  'info',
  'star',
  'search',
  'menu',
  'apps',
  'favorite',
  'help',
  'alarm',
  'notifications',
  'lock',
  'exit_to_app',
  'chat',
  'attach_file',
  'delete',
  'archive',
  'camera_alt',
  'camera',
  'photo_camera',
  'edit',
  'add',
  'remove',
  'done',
  'check_circle',
  'cancel',
  'remove_circle',
  'thumb_up',
  'thumb_down',
  'cloud',
  'location_on',
  'access_alarm',
  'warning',
  'error',
  'call',
  'message',
  'email',
  'wifi',
  'bluetooth',
  'gps_fixed',
  'battery_full',
  'volume_up',
  'volume_off',
  'brightness_7',
  'brightness_2',
  'clear_all',
  'shopping_cart',
  'calendar_today',
];

// Font Awesome Icons (nur einige zur Illustration)
const fontAwesomeIcons = [
  'fas fa-home',
  'fas fa-search',
  'fas fa-cogs',
  'fas fa-info-circle',
  'fas fa-star',
  'fas fa-envelope',
  'fas fa-phone',
  'fas fa-camera',
  'fas fa-bell',
  'fas fa-trash',
  'fas fa-edit',
  'fas fa-add',
  'fas fa-check',
  'fas fa-times',
  'fas fa-cloud',
  'fas fa-wifi',
  'fas fa-user',
];

// Vollständige Icons-Liste zusammenstellen
const allIcons = ref([...materialIcons, ...fontAwesomeIcons]);

// Store für die sichtbaren Icons
const visibleIcons = ref<string[]>([]);

// Funktion zum Lazy-Loading basierend auf dem Scrollen
const handleScroll = () => {
  const grid = document.querySelector('.icon-grid');
  const scrollTop = grid ? grid.scrollTop : 0;

  const iconsPerPage = 200; // Anzahl der Icons pro Seite
  const startIndex = Math.floor(scrollTop / 100); // Index basierend auf dem Scroll-Offset
  const endIndex = startIndex + iconsPerPage;

  visibleIcons.value = allIcons.value.slice(startIndex, endIndex);
};

// Initialisierung der Icons
onMounted(() => {
  handleScroll();
});
</script>

<style scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  justify-items: center;
}
</style>
