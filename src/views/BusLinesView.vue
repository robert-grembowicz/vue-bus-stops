<script setup lang="ts">
import { ref, computed } from "vue";
import BusLines from "@/components/BusLines.vue";
import { useStore } from "@/store";

export type TSelectedLine = null | number;

const store = useStore();
const lines = computed(() => store.state.lines);

const selectedLine = ref<TSelectedLine>(null);

function selectLine(line: number) {
  selectedLine.value = line;
}
</script>

<template>
  <BusLines
    heading="Select Bus Line"
    :lines="lines"
    :selectedLine="selectedLine"
    @selectLine="selectLine"
  />
</template>
