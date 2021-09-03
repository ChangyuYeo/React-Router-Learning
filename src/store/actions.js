import { fetchBookList, fetchBookInfo } from '@/api'

export default {
	async searchBooks({ state, commit }, books) {
		commit('RESET_BOOKS')
		if (state.loading) return
		commit('CHANGE_LOADING', true)
		try {
			const { data } = await fetchBookList(books)
			commit('SET_BOOKS', data.documents)
		} catch (error) {
			commit('SET_MESSAGE', '검색창에 빈칸 없이 입력해 주세요!')
		} finally {
			commit('CHANGE_LOADING', false)
		}
	},
	async searchBookInfo({ state, commit }, book) {
		commit('RESET_BOOKS')
		if (state.loading) return
		commit('CHANGE_LOADING', true)
		try {
			const { data } = await fetchBookInfo(book)
			commit('SET_BOOK', data.documents)
		} catch (error) {
			console.error(error)
		} finally {
			commit('CHANGE_LOADING', false)
		}
	}
}
