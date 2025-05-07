<script setup lang="ts">
import { computed } from "vue";
import ContentBox from "./ContentBox.vue";
import SectionHeading from "./SectionHeading.vue";
import { TStops } from "@/api/stops";

const props = defineProps<{
  heading: string;
  stops: TStops;
}>();

const sortedStops = computed(() =>
  [...props.stops].sort((a, b) => a.line - b.line)
);
</script>

<template>
  <ContentBox class="p-4">
    <SectionHeading>{{ props.heading }}</SectionHeading>
    <div class="d-flex gap-2 mt-4">
      <button
        v-for="stop in sortedStops"
        :key="stop.line"
        type="button"
        class="btn btn-primary"
      >
        {{ stop.line }}
      </button>
    </div>
  </ContentBox>
</template>
