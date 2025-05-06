<template>
  <q-layout view="hH Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <app-logo />
        <q-space />
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      :mini-to=50
      :breakpoint="640"
      @mouseover="toggleMiniState(false)"
      @mouseout="toggleMiniState(true)"
    >
      <q-list>
        <q-item-label header> Essential Links</q-item-label>
        <essential-link v-for="item in data" :key="item.title" :link-data="item"></essential-link>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import AppLogo from 'components/AppLogo.vue';
import type { EssentialLinkProps } from 'src/types/navigationTypes';

const linksList: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  // Add remaining links
];

const leftDrawerOpen = ref(false);
const miniState = ref(true);
const data = ref(linksList);

// Toggle Drawer visibility
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

// Toggle the mini state on hover
function toggleMiniState(state: boolean) {
  miniState.value = state;
}
</script>
