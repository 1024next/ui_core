import axios from 'axios'
const requests = axios.create({
    baseURL: '', // 替换为你的API地址
  })
  // 请求拦截器
  requests.interceptors.request.use(config => {
    // 在请求发送之前做一些处理，比如添加认证头

    console.log(useToken.getToken());
    
    config.headers.Authorization ="Bearer " + useToken.getToken()
    return config
  }, error => {
    // 处理请求错误
    return Promise.reject(error)
  })
  
  // 响应拦截器
  requests.interceptors.response.use(response => {
    // 处理响应数据
    console.log(response);
    if(response.data.code !== 200){
      alert(response.data.message)
    }else{
      return response.data
    }
  
  }, error => {
    // 
    alert(error)
    if (error.response && error.response.status === 401) {
      // 处理未授权错误，比如重定向到登录页面
    }
    return Promise.reject(error)
})

export default requests