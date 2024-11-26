export const useToken = {
    getToken:()=>{return  localStorage.getItem('token')},
    setToken:(token)=>{return  localStorage.setItem('token',token)},
    removeToken:()=>{return  localStorage.removeItem('token')},
}