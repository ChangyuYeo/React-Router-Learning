import { fetchBookList, fetchBookInfo } from '@/api'

export default {
	async searchBooks({ commit }, books) {
		const { data } = await fetchBookList(books)
		commit('SET_BOOKS', data.documents)
	},
	async searchBookInfo({ commit }, book) {
		try {
			const { data } = await fetchBookInfo(book)
			commit('SET_BOOK', data.documents)
		} catch (error) {
			console.error(error)
		}
	}
}
