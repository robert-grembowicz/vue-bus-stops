<script setup lang="ts">
import { ROUTES } from "@/consts/routes";

const tabs = [
  { path: ROUTES.home, label: "Bus Lines" },
  { path: ROUTES.stops, label: "Stops" },
];
</script>

<template>
  <ul class="nav nav-tabs border-0 rounded">
    <li v-for="tab in tabs" :key="tab.path" class="nav-item">
      <RouterLink
        :to="tab.path"
        class="nav-link px-4"
        :class="{ active: $route.path === tab.path }"
      >
        {{ tab.label }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.nav-tabs {
  background: var(--bs-white);

  .nav-link {
    position: relative;
    display: flex;
    align-items: center;
    border: none;
    color: var(--bs-grey);
    transition: color $transition;
    height: 4rem;

    &:hover {
      color: var(--bs-dark);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--bs-primary);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform $transition;
    }

    &.active {
      color: var(--bs-dark);
      background-color: transparent;
      font-weight: 500;

      &::after {
        transform: scaleX(1);
      }
    }
  }
}
</style>
