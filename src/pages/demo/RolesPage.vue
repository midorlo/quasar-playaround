<template>
  <q-page class="q-pa-md q-gutter-md items-center">
    <role-card v-for="role in roles" :key="role.id" :role="role"/>

    <div class="text-h6 text-secondary">Data</div>
    <q-card flat bordered>
      <q-scroll-area
        class="q-pa-md"
        style="height: 96px; background: rgba(136, 136, 136, 0.56); color: aliceblue"
      >
        {{ roles }}
      </q-scroll-area>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { rolesData } from 'src/data/authData';
import RoleCard from 'components/RoleCard.vue';
import type { Role } from 'src/types/authTypes';

export default defineComponent({
  name: 'DefaultRolesPage',
  components: {
    RoleCard,
  },
  setup() {
    const roles = ref<Role[]>([]);

    onMounted(() => {
      roles.value = rolesData;
    });

    return {
      roles,
    };
  },
});
</script>
