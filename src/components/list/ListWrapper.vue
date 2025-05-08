<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";

const props = defineProps<{
  label: string;
  maxHeight?: number;
  isFlexible?: boolean;
}>();

const wrapperRef = ref<HTMLElement | null>(null);
const dynamicHeight = ref<string>("auto");

const getMainBottomPadding = (): number => {
  const main = document.querySelector("main");
  if (!main) return 30;

  const style = getComputedStyle(main);
  const padding = style.paddingBottom || "30px";

  const numeric = parseInt(padding, 10);
  return isNaN(numeric) ? 30 : numeric;
};

const calculateDynamicHeight = () => {
  if (!props.isFlexible || !wrapperRef.value) return;

  const offsetTop = wrapperRef.value.getBoundingClientRect().top;
  const bottomPadding = getMainBottomPadding();
  const availableHeight = window.innerHeight - offsetTop - bottomPadding;

  dynamicHeight.value = `${Math.max(availableHeight, 100)}px`;
};

const handleResize = () => {
  calculateDynamicHeight();
};

onMounted(() => {
  nextTick(() => {
    calculateDynamicHeight();
    window.addEventListener("resize", handleResize);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

watch(() => props.isFlexible, calculateDynamicHeight);
</script>

<template>
  <div
    class="wrapper"
    ref="wrapperRef"
    :style="{
      maxHeight: isFlexible
        ? dynamicHeight
        : props.maxHeight
        ? `${props.maxHeight}px`
        : undefined,
    }"
  >
    <ul class="list-group list-group-flush" role="listbox" :aria-label="label">
      <slot />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  overflow: auto;
}
</style>
