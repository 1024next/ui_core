<template>
  <div>

    <h1>Home Page</h1>
    <p>Count: {{ appStore.count }}</p>
    <button @click="appStore.increment">Increment</button>
    <button @click="appStore.decrement">Decrement</button>

    <p>{{ foo }}</p>

    <div>
      换肤
      <button @click="setTheme('light')">Light Theme</button>
      <button @click="setTheme('dark')">Dark Theme</button>

    </div>
    <div v-for="item in 100"
         :key="item">{{ item }}</div>
  </div>
</template>

<script setup>

import { useAppStore } from '~/store/app'
import { fetchData } from '~/api'
import { ref } from 'vue'

const currentTheme = ref(localStorage.getItem('theme') || 'light')
const appStore = useAppStore()
const foo = useFoo()
const data = ref(0)
onMounted(async () => {
  try {
    data.value = await fetchData() // 调用封装的 API 函数
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})


const setTheme = (theme) => {
  localStorage.setItem('theme', theme)
  useTheme(theme)
}
</script>


<style>
</style>