<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore, useCounterStoreBis } from './stores/counter';

const counterStore = useCounterStore()
const counterStoreBis = useCounterStoreBis()

// const { name, count, doubleCount } = counterStore
const { name, count, doubleCount } = storeToRefs(counterStore)
const { increment } = counterStore

const { name: nameBis, count: countBis, doubleCount: doubleCountBis } = storeToRefs(counterStoreBis)
const { increment: incrementBis } = counterStoreBis

</script>

<template>
  <div>
    name: {{ name }} - count: {{ count }} - double: {{ doubleCount }}
          <button @click="increment">increment</button>
  </div>
  <div>
    name: {{ nameBis }} - count: {{ countBis }} - double: {{ doubleCountBis }}
          <button @click="incrementBis">increment</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
