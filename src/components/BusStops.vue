<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { TSelectedLine } from "@/views/BusLinesView.vue";
import { useStore, TStopsState } from "@/store";
import ContentBox from "./ContentBox.vue";
import ArrowIcon from "./icons/ArrowIcon.vue";
import SectionHeader from "./SectionHeader.vue";
import ListItem from "./list/ListItem.vue";
import ListWrapper from "./list/ListWrapper.vue";
import { useSortedStops } from "@/composables/useSortedStops";

const props = defineProps<{
  selectedLine: TSelectedLine;
  selectedStop: string | null;
}>();

const store = useStore();
const rawStops = ref<TStopsState>([]);

const { toggleSort, filteredStops } = useSortedStops(rawStops);

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
      <ListWrapper label="Bus stops table" :max-height="333">
        <ListItem
          v-for="{ stop, order } in filteredStops"
          :key="stop + order"
          :is-selected="selectedStop === stop"
          role="option"
          @click="$emit('selectStop', stop)"
          @keydown.enter.space="$emit('selectStop', stop)"
        >
          {{ stop }} ({{ order }})
        </ListItem>
      </ListWrapper>
    </template>
  </ContentBox>
</template>

<style scoped lang="scss">
.list-group-item {
  cursor: pointer;
}
</style>
