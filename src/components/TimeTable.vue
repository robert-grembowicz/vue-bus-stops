<script setup lang="ts">
import { computed } from "vue";
import { TSelectedLine } from "@/views/BusLinesView.vue";
import ContentBox from "./ContentBox.vue";
import SectionHeader from "./SectionHeader.vue";
import { watch } from "vue";
import { IStopState, useStore } from "@/store";
import ListItem from "./ListItem.vue";
import { ref } from "vue";
import { sortTime } from "@/helpers/sortTime";

const props = defineProps<{
  selectedLine: TSelectedLine;
  selectedStop: string | null;
  timeTable: IStopState[];
}>();

const defaultText = computed(() => {
  const type = !props.selectedLine ? "line" : "stop";
  return `Please select the bus ${type} first`;
});

const timeTable = ref<IStopState[]>([]);
const lineTimeTable = ref<IStopState["times"]>([]);
const store = useStore();

watch(
  () => props.selectedLine,
  (newVal) => {
    if (!newVal) return;
    console.log("newVal", newVal);
    console.log(" store.state.timeTable", store.state.timeTable);
    timeTable.value = store.state.timeTable[newVal].stops;
  }
);

watch(
  () => props.selectedStop,
  (stopName) => {
    if (!stopName) return;
    console.log("timeTable.value", timeTable.value);
    const filteredTimeTable = timeTable.value?.filter(
      (item) => item.name === stopName
    );
    if (filteredTimeTable.length !== 1) return;
    lineTimeTable.value = filteredTimeTable[0]?.times;
  }
);

const sortedLineTimeTable = computed(() => sortTime(lineTimeTable.value));
</script>

<template>
  <ContentBox
    :with-border="!selectedStop"
    :default-text="!selectedStop && defaultText"
  >
    <SectionHeader :heading="`Bus stop: ${selectedStop}`" subheading="Time" />
    <ul
      class="list-group list-group-flush"
      role="listbox"
      aria-label="Bus stops list"
    >
      <ListItem v-for="(time, index) in sortedLineTimeTable" :key="index">
        {{ time }}
      </ListItem>
    </ul>
  </ContentBox>
</template>

<style scoped lang="scss">
.list-group {
  max-height: 333px;
  overflow: scroll;
}

.list-group-item {
  color: $grey;

  &.active {
    background: $lightgrey;
    color: $grey;
    border-color: $lightgrey;
  }
}
</style>
