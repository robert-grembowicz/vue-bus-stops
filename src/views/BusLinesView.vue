<script setup lang="ts">
import { ref, computed } from "vue";
import BusLines from "@/components/BusLines.vue";
import { useStore } from "@/store";
import BusStops from "@/components/BusStops.vue";

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
  <div class="mt-4 container">
    <div class="row g-4">
      <div class="col-6 ps-0">
        <BusStops :selectedLine="selectedLine" class="box" />
      </div>
      <div class="col-6 pe-0">
        <BusStops :selectedLine="selectedLine" class="box" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.box {
  height: 444px;
}
</style>
