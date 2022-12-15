<script lang="ts" setup>
import { useGoogleApi } from '~~/utils/useGoogleApi';
/** store */
const counterStore = useCalendarStore()
const googleApi = useGoogleApi()
/**
 * increment実行
 */
function increment() {
  counterStore.increment()
}
/**
 * storeの状態をリセット
 */
function reset() {
  counterStore.$reset()
}
</script>

<template>
  <div>
    <div>
      <button @click="increment()">increment</button>
      <button @click="reset()">reset</button>
    </div>
    <div>count: {{ counterStore.count }}</div>
    <div>double: {{ counterStore.double }}</div>
    <v-btn @click="googleApi.getToken">getToken</v-btn>
    <v-btn @click="googleApi.getEvents">getToken</v-btn>
  </div>
</template>