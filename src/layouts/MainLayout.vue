<template>
  <q-layout view="hhh Lpr fff">
    <q-header>
      <header-menu />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :mini="miniState"
      :mini-to="50"
      :breakpoint="640"
      style="padding-left: 16px; padding-right: 46px"
    >
      <NavigationMenu :groups="navigationGroups" />
    </q-drawer>

    <q-page-container class="q-pa-md-lg">
      <router-view class="q-pa-md-lg" />
    </q-page-container>

    <q-footer >
      <q-toolbar class="bg-grey-3 text-blue-9" inset>
        <q-btn
          flat
          dense
          icon="link"
          href="https://github.com/midorlo/quasar-playaround"
          target="_blank"
          >Github Repo
        </q-btn>
        <q-btn
          flat
          dense
          icon="link"
          href="https://midorlo.github.io/quasar-playaround/#/"
          target="_blank"
          >Github Page
        </q-btn>
        <q-btn
          flat
          dense
          icon="link"
          href="https://quasar.dev/layout/grid/introduction-to-flexbox"
          target="_blank"
          >Quasar Docs
        </q-btn>
        made with ♥️ by midorlo
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeaderMenu from 'components/HeaderMenu.vue';
import NavigationMenu from 'src/components/NavigationMenu.vue';
import { navigationGroups } from 'src/data/navigationData';

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
