import axios from 'axios'

function fetchBookList({ query, target, size }) {
	return axios.get('https://dapi.kakao.com/v3/search/book?target=title', {
		headers: {
			Authorization: `KakaoAK ${process.env.VUE_APP_API_KEY}`
		},
		params: { query, target, size }
	})
}

function fetchBookInfo(query) {
	return axios.get('https://dapi.kakao.com/v3/search/book?target=title', {
		headers: {
			Authorization: `KakaoAK ${process.env.VUE_APP_API_KEY}`
		},
		params: { query }
	})
}

export { fetchBookList, fetchBookInfo }
