import { ref, computed, toRefs, reactive } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { CounterState } from '../types';

export const useCounterStore = defineStore('counterStore', () => {
  const count = ref(0);
  const name = ref('Eduardo');
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});

// better option ?

export const useCounterStoreBis = defineStore('conterStoreBis', () => {
  const state: CounterState = reactive({
    name: 'Eduardo',
    count: 0,
    doubleCount: 0,
  })

  const increment = () => {
    state.count++;
    state.doubleCount = state.count * 2;
  };

  return { ...toRefs(state), increment };
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
  import.meta.hot.accept(acceptHMRUpdate(useCounterStoreBis, import.meta.hot));
}
