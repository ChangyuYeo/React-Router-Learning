import axios from 'axios'

function fetchBookList({ query, target, size }) {
	return axios.get('https://dapi.kakao.com/v3/search/book?target=title', {
		headers: {
			Authorization: `KakaoAK f62dc4a336cf50285fbf9e56b5be622e`
		},
		params: { query, target, size }
	})
}

export { fetchBookList }
