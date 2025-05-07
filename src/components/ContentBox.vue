<script setup lang="ts">
const props = defineProps<{
  withBorder?: boolean;
  defaultText?: string | boolean;
}>();
</script>

<template>
  <div
    class="rounded bg-white"
    :class="{ bordered: props.withBorder, centered: props.defaultText }"
  >
    <p v-if="defaultText" class="text">{{ defaultText }}</p>
    <slot v-else />
  </div>
</template>

<style lang="scss">
.bordered {
  border: 2px dashed #ccc;
}

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  color: #63666e;
}
</style>
