<template>
  <q-item clickable tag="a" target="_blank" :href="routeName">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from 'src/types/navigationTypes';

withDefaults(defineProps<NavigationMenuItem>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>
