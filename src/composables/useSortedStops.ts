import { TStopsState } from "@/store";
import { ref, computed, Ref } from "vue";

// export type TStop = {
//   stop: string;
//   order: number;
//   line: string
// };

export function useSortedStops(
  rawStops: Ref<TStopsState>,
  searchQuery?: Ref<string>
) {
  const sortByOrder = ref(false);

  const toggleSort = () => {
    sortByOrder.value = !sortByOrder.value;
  };

  const filteredStops = computed(() => {
    const query = searchQuery?.value.toLowerCase();
    const stopsCopy = [...rawStops.value];

    const sorted = sortByOrder.value
      ? stopsCopy.sort((a, b) => a.order - b.order)
      : stopsCopy.sort((a, b) => a.stop.localeCompare(b.stop));

    if (!query) return sorted;

    return sorted.filter((s) => s.stop.toLowerCase().includes(query));
  });

  return {
    searchQuery,
    toggleSort,
    filteredStops,
  };
}
