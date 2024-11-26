<template>
  <div>
    <p>Count: {{ appStore.count }}</p>
    <button @click="appStore.increment">Increment</button>
    <button @click="appStore.decrement">Decrement</button>
    <div v-for="item in 1000"
         :key="item">{{ item }}</div>
  </div>

</template>

<script setup>
import { useAppStore } from '~/store/app'
const appStore = useAppStore()
const foo = useFoo(2)
</script>

<style>
</style>