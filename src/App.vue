<script setup lang="ts">
import { watch } from "vue";
import { RouterView } from "vue-router";
import NavigationTabs from "@/components/NavigationTabs.vue";
import { TStops } from "@/types/stops";
import { useFetch } from "@/composables/useFetch";
import { useStore } from "@/store";

const { data, error, loading } = useFetch<TStops>(
  "http://localhost:3000/stops", // In real aplication this should be added to .env file
  2000
);

const store = useStore();

watch(data, (value) => {
  if (value) {
    store.dispatch("processStops", value);
  }
});
</script>

<template>
  <main class="container py-3 py-md-5">
    <h1 class="fs-4 fw-semibold">Timetable</h1>
    <NavigationTabs class="mt-2 mt-md-4 mb-3" />
    <p v-if="loading">loading</p>
    <p v-else-if="error">error</p>
    <RouterView v-else />
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
