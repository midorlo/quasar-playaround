<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
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
import type { EssentialLinkProps } from 'src/types/navigationTypes';

// Definiere das Prop als "required" Objekt vom Typ EssentialLinkProps
const props = defineProps<{
  linkData: EssentialLinkProps; // "linkData" ist das prop, das das Objekt enthält
}>();

// Die einzelnen Eigenschaften des Props extrahieren
const { title, caption, icon, link } = props.linkData;
</script>
