import { fetchBookList, fetchBookInfo } from '@/api'

export default {
	async searchBooks({ state, commit }, books) {
		commit('RESET_BOOKS')
		if (state.loading) return
		commit('CHANGE_LOADING', true)
		try {
			const { data } = await fetchBookList(books)
			if (data.documents.length === 0) {
				commit('SET_MESSAGE', '해당 검색 결과의 내용을 찾을 수 없습니다.')
			}
			commit('SET_BOOKS', data.documents)
		} catch (error) {
			console.error(error.message)
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
			console.error(error.message)
		} finally {
			commit('CHANGE_LOADING', false)
		}
	}
}
