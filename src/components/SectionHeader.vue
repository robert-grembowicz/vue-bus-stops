<script setup lang="ts">
import SectionHeading from "./SectionHeading.vue";

defineProps<{
  heading?: string;
  subheading: string;
}>();
</script>
<template>
  <div class="p-4 container">
    <SectionHeading class="mb-4" v-if="heading">{{ heading }}</SectionHeading>
    <h3 class="subheader m-0">
      {{ subheading }}
      <slot />
    </h3>
  </div>
</template>

<style scoped>
.container {
  border-bottom: 1px solid #e2e4ea;
}

.subheader {
  font-size: 0.8rem;
}
</style>
