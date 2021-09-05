import axios, { AxiosPromise } from 'axios'
import { BookItem, BookParams } from './types'

function fetchBookList({
	query,
	target,
	size
}: BookParams): AxiosPromise<BookItem[]> {
	return axios.get('https://dapi.kakao.com/v3/search/book?target=title', {
		headers: {
			Authorization: `KakaoAK ${process.env.VUE_APP_API_KEY}`
		},
		params: { query, target, size }
	})
}

function fetchBookInfo(query: string): AxiosPromise<BookItem[]> {
	return axios.get('https://dapi.kakao.com/v3/search/book?target=title', {
		headers: {
			Authorization: `KakaoAK ${process.env.VUE_APP_API_KEY}`
		},
		params: { query }
	})
}

export { fetchBookList, fetchBookInfo }
