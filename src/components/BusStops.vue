<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { TSelectedLine } from "@/views/BusLinesView.vue";
import { useStore, TStopsState } from "@/store";
import ContentBox from "./ContentBox.vue";
import ArrowIcon from "./icons/ArrowIcon.vue";
import SectionHeader from "./SectionHeader.vue";
import ListItem from "./ListItem.vue";

const props = defineProps<{
  selectedLine: TSelectedLine;
  selectedStop: string | null;
}>();

const store = useStore();
const rawStops = ref<TStopsState>([]);
const sortByOrder = ref(false);

const toggleSort = () => {
  sortByOrder.value = !sortByOrder.value;
};

const filteredStops = computed(() => {
  return [...rawStops.value].sort((a, b) => {
    if (sortByOrder.value) {
      return a.order - b.order;
    }
    return a.stop.localeCompare(b.stop);
  });
});

const loadStops = async (line: number) => {
  rawStops.value = await store.dispatch("getStopsByLine", line);
};

onMounted(() => {
  const { selectedLine } = props;
  selectedLine && loadStops(selectedLine);
});

watch(
  () => props.selectedLine,
  (newVal) => {
    newVal && loadStops(newVal);
  }
);
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
        <button
          class="border-0 bg-transparent"
          @click="toggleSort"
          title="Toggle sort order"
        >
          <ArrowIcon />
        </button>
      </SectionHeader>
      <ul
        class="list-group list-group-flush"
        role="listbox"
        aria-label="Bus stops list"
      >
        <ListItem
          v-for="{ stop, order } in filteredStops"
          :key="stop + order"
          :is-selected="selectedStop === stop"
          @click="$emit('selectStop', stop)"
          @keydown.enter.space="$emit('selectStop', stop)"
        >
          {{ stop }} ({{ order }})
        </ListItem>
      </ul>
    </template>
  </ContentBox>
</template>

<style scoped lang="scss">
.list-group {
  max-height: 333px;
  overflow: scroll;
}

.list-group-item {
  cursor: pointer;
  color: $grey;

  &.active {
    background: $lightgrey;
    color: $grey;
    border-color: $lightgrey;
  }
}
</style>
