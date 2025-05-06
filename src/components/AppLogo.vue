<template>
  <div class="logo-box">
    <img
      src="https://cdn.quasar.dev/logo-v2/svg/logo.svg"
      alt="Website Logo"
      class="logo-image"
    />
    <span>Midorlo's Playground</span>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.logo-box {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #cccccc;
  border-radius: 999px;
  padding: 8px 16px;
}

.logo-image {
  height: 24px;
  margin-right: 8px;
}

.logo-box span {
  font-weight: 100;
  font-size: 1.2rem;
  color: #296c88;
  line-height: 1.2;
}
</style>
