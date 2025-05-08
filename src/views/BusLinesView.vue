<script setup lang="ts">
import { ref, computed } from "vue";
import BusLines from "@/components/BusLines.vue";
import { IStopState, useStore } from "@/store";
import BusStops from "@/components/BusStops.vue";
import TimeTable from "@/components/TimeTable.vue";

export type TSelectedLine = null | number;

const store = useStore();

const lines = computed(() => store.state.lines);

const selectedLine = ref<TSelectedLine>(null);
const selectedStop = ref<string | null>(null);
const timeTable = ref<IStopState[]>([]);

function selectLine(line: number) {
  selectedLine.value = line;
  selectedStop.value = null;
  timeTable.value = store.state.timeTable[line].stops;
}

function selectStop(stop: string) {
  selectedStop.value = stop;
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
      <div class="col-12 col-md-6 p-0 pe-md-3">
        <BusStops
          :selectedLine="selectedLine"
          class="box"
          @selectStop="selectStop"
          :selectedStop="selectedStop"
        />
      </div>
      <div class="col-12 col-md-6 p-0 ps-md-3">
        <TimeTable
          :selectedLine="selectedLine"
          class="box"
          :selectedStop="selectedStop"
          :timeTable="timeTable"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  height: 444px;
}
</style>
