<script setup lang="ts">
import BusLines from "@/components/BusLines.vue";
import { stops } from "@/api/stops";
</script>

<template>
  <BusLines heading="Select Bus Line" :stops="stops" />
</template>
