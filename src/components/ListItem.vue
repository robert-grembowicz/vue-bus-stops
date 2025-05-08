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
    :class="{ active: isSelected, 'list-group-item-action': role === 'option' }"
    :role="role || 'text'"
    :aria-selected="isSelected"
    tabindex="0"
  >
    <slot />
  </li>
</template>
