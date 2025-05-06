<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationTabs from "@/components/NavigationTabs.vue";
</script>

<template>
  <main class="container py-3 py-md-5">
    <h1 class="fs-4 fw-semibold">Timetable</h1>
    <NavigationTabs class="mt-2 mt-md-4 mb-3" />
    <RouterView />
  </main>
</template>

<style lang="scss">
body {
  font-family: Inter, sans-serif;
  min-height: 100dvh;

  h1 {
    line-height: 2rem;
    color: var(--bs-dark);
  }
}
</style>
