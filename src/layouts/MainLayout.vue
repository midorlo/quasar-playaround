<template>
  <q-layout view="hhh Lpr lFf">
    <q-header>
        <header-menu />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      :mini-to="50"
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
import type { EssentialLinkProps } from 'src/types/navigationTypes';
import HeaderMenu from 'components/HeaderMenu.vue';

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

function toggleMiniState(state: boolean) {
  miniState.value = state;
}
</script>
