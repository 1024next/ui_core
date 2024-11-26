import requests from './request'
async function upload(formData) {
	try {
	  const response = await requests.post('/api/upload',formData, {
			headers: {
			  'Content-Type': 'multipart/form-data',
			},
		  }
	  ) // 使用 Axios 实例发送请求
	  return response.data
	} catch (error) {
	  console.error('Error fetching data:', error)
	  throw error
	}
}


export default {
	upload
}