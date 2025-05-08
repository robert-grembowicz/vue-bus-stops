<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <ul class="list-group list-group-flush" role="listbox" :aria-label="label">
    <slot />
  </ul>
</template>

<style scoped lang="scss">
.list-group {
  max-height: 333px;
  overflow: scroll;
}
</style>
