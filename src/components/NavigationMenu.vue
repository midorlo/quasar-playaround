<template>
  <q-scroll-area class="fit">
    <q-list bordered padding class="rounded-borders">
      <template v-for="group in groups" :key="group.id">
        <q-expansion-item
          expand-separator
          class="tw-accordion-group"
          default-opened
          :label="group.title"
          :caption="group.caption"
          :icon="group.icon"
          dense
          expand-icon="expand_more"
          header-class="tw-accordion-header"
          content-class="tw-accordion-content"
        >
          <!-- Rekursive Darstellung von Unter-Gruppen -->
          <NavigationMenu v-if="group.groups && group.groups.length" :groups="group.groups" />

          <!-- Seiteneinträge -->
          <q-list padding dense>
            <q-item
              v-for="page in group.pages"
              :key="page.id"
              class="tw-nav-item"
              clickable
              :to="normalizePath(page.routePath)"
              exact
              :class="{ 'tw-nav-item-active': route.path === normalizePath(page.routePath) }"
            >
              <q-item-section avatar>
                <q-icon :name="page.icon || 'chevron_right'" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ page.title }}</q-item-label>
                <q-item-label caption v-if="page.caption">{{ page.caption }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </template>
    </q-list>
  </q-scroll-area>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
import {
  QList,
  QScrollArea,
  QExpansionItem,
  QItem,
  QItemSection,
  QItemLabel,
  QIcon
} from 'quasar';
import type { NavigationGroup } from 'src/types/navigationTypes';

defineOptions({ name: 'NavigationMenu' });

// aktuelle Route
const route = useRoute();

// Pfad normalisieren (führt immer zu absolutem Pfad)
const normalizePath = (path: string): string => path.startsWith('/') ? path : '/' + path;

defineProps<{ groups: NavigationGroup[] }>();
</script>

<style scoped>
/* Tailwind-ähnliche Styles */
.tw-accordion-group {
  background-color: #f9fafb;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
}
.tw-accordion-header {
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: #1f2937;
}
.tw-accordion-header:hover {
  background-color: #e5e7eb;
}
.tw-accordion-content {
  padding: 0.5rem 1rem;
  background-color: #ffffff;
}
.tw-nav-item {
  margin: 0.25rem 0;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}
.tw-nav-item:hover {
  background-color: #f3f4f6;
}

/* Hervorhebung der aktiven Seite */
.tw-nav-item-active {
  background-color: #3b82f6;
  color: #ffffff !important;
}
.tw-nav-item-active q-icon {
  color: #ffffff;
}
.tw-nav-item-active .q-item-label {
  color: #ffffff;
}
</style>
