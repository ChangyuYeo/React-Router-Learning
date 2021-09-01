import { fetchBookList } from '@/api'

export default {
	async searchBooks({ commit }, books) {
		const { data } = await fetchBookList(books)
		commit('SET_BOOKS', data.documents)
	}
}
