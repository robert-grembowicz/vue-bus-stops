<script setup lang="ts">
defineProps<{
  isSelected: boolean;
}>();
</script>

<template>
  <li
    class="list-group-item list-group-item-action p-3"
    :class="{ active: isSelected }"
    role="option"
    :aria-selected="isSelected"
    tabindex="0"
  >
    <slot />
  </li>
</template>
