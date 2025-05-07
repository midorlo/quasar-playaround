<template>
  <q-item
    clickable
    :to="route.path"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption || '' }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { NavigationMenuItem } from 'src/types/navigationTypes';

// Definiere das Prop als "required" Objekt vom Typ EssentialLinkProps
const props = defineProps<{
  menuItem: NavigationMenuItem;
}>();

// Die einzelnen Eigenschaften des Props extrahieren
const {
//id,
//menuId,
//position,
title,
caption,
icon,
//enabled,
route
} = props.menuItem;
</script>
