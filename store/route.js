import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useRouteStore = defineStore('route',()=>{
	const redirectRoute = ref('')
    const setRedirectRoute  = (route)=>{
        redirectRoute.value = route
    }

	return {redirectRoute,setRedirectRoute}
})