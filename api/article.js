import requests from './request'

function createPost(data) {
	return  requests.post('/api/article/create',data)
}
function getPost(params) {
	return  requests.get('/api/article',{params})
}

export default {
	createPost,
	getPost
}