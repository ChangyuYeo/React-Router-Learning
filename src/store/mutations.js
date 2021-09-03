export default {
	SET_BOOKS(state, books) {
		state.books = books
	},
	SET_BOOK(state, book) {
		state.book = book
	},
	RESET_BOOKS(state) {
		state.books = []
		state.book = []
		state.message = '결과가 없습니다. 도서의 정보를 검색해 주세요!'
	},
	CHANGE_LOADING(state, loading) {
		state.loading = loading
	},
	SET_MESSAGE(state, message) {
		state.message = message
	}
}
