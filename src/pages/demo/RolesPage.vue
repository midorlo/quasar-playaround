<template>
  <q-page class="q-pa-md q-gutter-md items-center">
    <q-title text="Roles" pageTitle />

    <q-title text="Data" content-title />
    <q-card flat bordered>
      <q-scroll-area
        class="q-pa-md"
        style="height: 96px; background: rgba(136, 136, 136, 0.56); color: aliceblue"
      >
        {{ roles }}
      </q-scroll-area>
    </q-card>
    <q-title text="Cards" content-title />
    <role-card v-for="role in roles" :key="role.id" :role="role" />


  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { rolesData } from 'src/data/authData';
import RoleCard from 'components/RoleCard.vue';
import type { Role } from 'src/types/authTypes';
import QTitle from 'components/QTitle.vue';

export default defineComponent({
  name: 'DefaultRolesPage',
  components: {
    QTitle,
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
