<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <h1 class="fs-4 fw-semibold">Timetable</h1>
  <RouterView />
</template>

<style lang="scss">
$dark: #1a1a1a;
$primary: #1952e1;
$primary-dark: #2e3e6e;
$grey: #9a9da4;
$grey-dark: #33373c;

body {
  background: #f3f4f9;
  font-family: Inter, sans-serif;
  padding: 2.5rem 2rem;
  min-height: 100dvh;

  h1 {
    margin-bottom: 1.5rem;
    line-height: 2rem;
    color: $dark;
  }
}
</style>
