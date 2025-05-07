<template>
  <div class="col-grow">
    <q-input
      class="search-container transparent-input"
      rounded
      dense
      outlined
      clearable
      standout
      :model-value="searchInput"
      type="text"
    ></q-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchInput = ref();
</script>

<style scoped>

.transparent-input {
  background-color: transparent; /* Input transparent machen */
  border: none; /* Rahmen entfernen */
  box-shadow: none; /* Schatten des Inputs entfernen */
  padding: 0; /* Padding anpassen, um es auf das äußere Container-Div anzuwenden */
}
</style>
