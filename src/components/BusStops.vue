<script setup lang="ts">
import ContentBox from "./ContentBox.vue";
import ArrowIcon from "./icons/ArrowIcon.vue";
import SectionHeader from "./SectionHeader.vue";
import { TSelectedLine } from "@/views/BusLinesView.vue";

defineProps<{
  selectedLine: TSelectedLine;
}>();
</script>

<template>
  <ContentBox
    :with-border="!selectedLine"
    :default-text="!selectedLine && `Please select the bus line first`"
  >
    <template v-if="selectedLine">
      <SectionHeader
        :heading="`Bus Line: ${selectedLine}`"
        subheading="Bus stops"
      >
        <ArrowIcon />
      </SectionHeader>
    </template>
  </ContentBox>
</template>
