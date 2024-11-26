import { defineStore } from 'pinia'
import { useRouter } from '#app'
const router = useRouter()
export const useUserStore = defineStore('user',()=>{
	const userInfo = ref({
        token:useToken.getToken()
    })
    const setUserInfo = (payload)=>{
        userInfo.value = {...payload}
    }
	const logOut = ()=>{
		setUserInfo({})
		localStorage.removeItem('token')
        router.push('/')
	}
    const userLogin = async (payload)=>{
        const {data} = await useApi.userLogin(payload)
      
        useToken.setToken(data.token)
        await getUserInfo(data.token)
        return data
    }
    const getUserInfo = (userToken)=>{
        useApi.getUserProfile().then(res=>{
            console.log(res);
        })
       setUserInfo({
        username:'Admin',
		token:userToken,
        isLogin:true,
      })
    }
	return { userInfo,setUserInfo,getUserInfo,logOut,userLogin}
})