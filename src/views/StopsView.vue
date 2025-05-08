<script setup lang="ts">
import { ref, onMounted } from "vue";
import ContentBox from "@/components/ContentBox.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import { TStopsState, useStore } from "@/store";
import ListWrapper from "@/components/list/ListWrapper.vue";
import ListItem from "@/components/list/ListItem.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import { useSortedStops } from "@/composables/useSortedStops";

const searchQuery = ref("");
const store = useStore();
const rawStops = ref<TStopsState>([]);

const { toggleSort, filteredStops } = useSortedStops(rawStops, searchQuery);

onMounted(() => {
  rawStops.value = store.state.stops;
});
</script>

<template>
  <ContentBox>
    <div class="p-4">
      <div class="input-group shadow-sm">
        <input
          v-model="searchQuery"
          type="search"
          class="form-control rounded"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-icon"
        />
        <SearchIcon class="icon" />
      </div>
    </div>
    <SectionHeader subheading="Bus Stops"
      ><button
        class="border-0 bg-transparent"
        @click="toggleSort"
        title="Toggle sort order"
      >
        <ArrowIcon /></button
    ></SectionHeader>
    <ListWrapper label="Bus stops table">
      <ListItem v-for="{ stop, order } in filteredStops" :key="stop + order">
        {{ stop }} ({{ order }})
      </ListItem>
    </ListWrapper>
  </ContentBox>
</template>

<style scoped>
.input-group {
  width: 100%;
  max-width: 288px;
}
.icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
