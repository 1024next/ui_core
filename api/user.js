import requests from './request'

async function userLogin(data) {
   	return  await requests.post('/api/auth/login',data)
}
async function getUserProfile() {
	return await requests.get('/api/auth/profile')// 使用 Axios 实例发送请求
	
}
export default {
	userLogin,
	getUserProfile
}