
import { useUserStore } from '~/store/user'
const userStore = useUserStore()
export const useUserState = ()=> {
    const token = localStorage.getItem('token') 
    if(token){
        userStore.getUserInfo()
    }
    return {token}
}