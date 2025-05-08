<script setup lang="ts">
import { computed } from "vue";
import ContentBox from "./ContentBox.vue";
import SectionHeading from "./SectionHeading.vue";
import { IState } from "@/store";
import { TSelectedLine } from "@/views/BusLinesView.vue";

const props = defineProps<{
  heading: string;
  lines: IState["lines"];
  selectedLine: TSelectedLine;
}>();

const sortedLines = computed(() => [...props.lines].sort((a, b) => a - b));
</script>

<template>
  <ContentBox class="p-4">
    <SectionHeading>{{ props.heading }}</SectionHeading>
    <div class="d-flex gap-2 mt-4 flex-wrap">
      <button
        v-for="line in sortedLines"
        :key="line"
        type="button"
        class="btn btn-primary"
        :class="{ active: selectedLine === line }"
        @click="$emit('selectLine', line)"
      >
        {{ line }}
      </button>
    </div>
  </ContentBox>
</template>
