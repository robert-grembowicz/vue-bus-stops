<script setup lang="ts">
import BusLines from "@/components/BusLines.vue";
import { computed } from "vue";
import { useStore } from "@/store";

const store = useStore();
const lines = computed(() => store.state.lines);
</script>

<template>
  <BusLines heading="Select Bus Line" :lines="lines" />
</template>
