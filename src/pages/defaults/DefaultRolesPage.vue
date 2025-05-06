<template>
  <q-page class="q-pa-md items-center justify-evenly">

    <div class="text-h6 text-secondary">Data</div>
    <q-card flat bordered>
      <q-scroll-area
        class="q-pa-md"
        style="height: 96px; background: rgba(136,136,136,0.56); color: aliceblue">
      {{ roles }}
      </q-scroll-area>
    </q-card>

  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import type { Role } from 'src/types/authTypes';

export default defineComponent({
  name: 'DefaultRolesPage',
  components: {},
  props: {},
  emits: [],

  setup() {
    const roles = ref<Role[]>([]);

    onMounted(async () => {});

    return {
      roles,
    };
  },
});
</script>
