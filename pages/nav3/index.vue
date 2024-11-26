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
    <button @click="loadData">Load Data</button>
    <div v-for="item in 100"
         :key="item">{{ item }}</div>
  </div>
</template>
  
  <script setup>

import { useAppStore } from '~/store/app'
import { ref } from 'vue'
const appStore = useAppStore()
const foo = useFoo()
const data = ref(0)
onMounted(async () => {
  console.log(useApi);
  try {
    data.value = await useApi.getPost({
      page:1,
      limit:10
    }) // 调用封装的 API 函数
    console.log( data.value );
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})


const setTheme = (theme) => {
  localStorage.setItem('theme', theme)
  useTheme(theme)
}


const loadData = async () => {
  useLoading.show()
  try {
    // 模拟异步操作
    await new Promise(resolve => setTimeout(resolve, 2000))
  } finally {
    useLoading.hide()
  }
}
  </script>
  
  
  <style>
</style>