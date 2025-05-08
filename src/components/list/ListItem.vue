<script setup lang="ts">
import { HTMLAttributes } from "vue";

defineProps<{
  isSelected?: boolean;
  role?: HTMLAttributes["role"];
}>();
</script>

<template>
  <li
    class="list-group-item p-3"
    :class="{
      selected: isSelected,
      'list-group-item-action': role === 'option',
    }"
    :role="role || 'text'"
    :aria-selected="isSelected"
    tabindex="0"
  >
    <slot />
  </li>
</template>

<style scoped lang="scss">
.list-group-item {
  color: $grey;

  &.selected {
    color: var(--bs-primary);
  }
}
</style>
