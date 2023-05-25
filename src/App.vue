<template>
  <div class="layout">
    <div class="layout__content">
      <AppLayout>
        <RouterView />
      </AppLayout>
    </div>
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.layout__content {
  flex: 1;
}

.visible {
  display: block;
  color: red;
  border: 1px solid red;
}
</style>
