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
        <menu-item-entry
          v-for="item in menuItems"
          :key="item.title"
          :menu-item="item"
        ></menu-item-entry>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeaderMenu from 'components/HeaderMenu.vue';
import { navigationMenuItemsData } from 'src/data/navigationData';
import MenuItemEntry from 'components/navigation/MenuItemEntry.vue';

const menuItems = navigationMenuItemsData;
const leftDrawerOpen = ref(false);
const miniState = ref(true);

function toggleMiniState(state: boolean) {
  miniState.value = state;
}
</script>
