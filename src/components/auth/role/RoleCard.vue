<template>
  <q-card v-bind="$attrs">
    <q-card-section class="row">
      <div class="column text-h4 text-secondary text-center q-pa-sm">{{ item.id }}</div>
      <div class="column">
        <div class="row text-h7 text-secondary">{{ item.title }}</div>
        <div class="row text-caption text-secondary">{{ item.description }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import type { PropType } from 'vue';
import type { Role } from 'src/types/authTypes';

export default defineComponent({
  name: 'RoleCard',
  props: {
    role: {
      type: Object as PropType<Role>,
      required: true,
    },
  },
  inheritAttrs: true,
  setup(props) {
    const item = reactive(props.role);

    return {
      item,
    };
  },
});
</script>
