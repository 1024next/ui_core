import { defineStore } from 'pinia'

export const useAppStore = defineStore('app',()=>{
	const count = ref(0)
	const doubleCount = computed(() => count.value * 2)
	const  increment = ()=> {
	  count.value++
	}
	const  decrement = ()=> {
	  count.value--
	}
	return { count, doubleCount, increment,decrement }
})