import { ref } from "vue";
import axios from "axios";

export function useFetch<T>(url: string, minDelay = 1000) {
  const data = ref<T | null>(null);
  const error = ref<unknown>(null);
  const loading = ref(true);

  const startTime = Date.now();

  axios
    .get(url)
    .then((response) => {
      data.value = response.data;
    })
    .catch((err) => {
      error.value = err;
    })
    .finally(async () => {
      const elapsed = Date.now() - startTime;
      const remainingDelay = minDelay - elapsed;

      if (remainingDelay > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingDelay));
      }

      loading.value = false;
    });

  return {
    data,
    error,
    loading,
  };
}
