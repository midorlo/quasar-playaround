<template>
  <q-item :icon="icon" :label="title" size="24" :to="route.path" outline rounded>
    {{title}}
  </q-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { NavigationMenuItem } from 'src/types/navigationTypes';

const props = defineProps<{
  menuItem: NavigationMenuItem;
}>();

const { title, icon, route } = props.menuItem;
</script>

<style scoped></style>
