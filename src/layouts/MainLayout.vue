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
      style="padding-left: 16px"
    >
      <q-card class="custom-card">
        <q-card-section>
          <q-list class="q-pa-none">
            <menu-item-entry
              v-for="item in menuItems"
              :key="item.title"
              :menu-item="item"
              class="q-pl-xl"
            ></menu-item-entry>
          </q-list>
        </q-card-section>
      </q-card>
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
const miniState = ref(false);
</script>
<style scoped>
.custom-card {
  background: transparent;
  box-shadow:
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 -2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
}
</style>
