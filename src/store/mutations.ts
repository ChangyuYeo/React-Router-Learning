import { BookItem } from '@/api/types'
import { RootState } from './state'

enum MutationTypes {
	SET_BOOKS = 'SET_BOOKS',
	SET_BOOK = 'SET_BOOK',
	RESET_BOOKS = 'RESET_BOOKS',
	CHANGE_LOADING = 'CHANGE_LOADING',
	SET_MESSAGE = 'SET_MESSAGE'
}

const mutations = {
	[MutationTypes.SET_BOOKS](state: RootState, books: BookItem[]) {
		state.books = books
	},
	[MutationTypes.SET_BOOK](state: RootState, book: BookItem[]) {
		state.book = book
	},
	[MutationTypes.RESET_BOOKS](state: RootState) {
		state.books = []
		state.book = []
		state.message = '결과가 없습니다. 도서의 정보를 검색해 주세요!'
	},
	[MutationTypes.CHANGE_LOADING](state: RootState, loading: boolean) {
		state.loading = loading
	},
	[MutationTypes.SET_MESSAGE](state: RootState, message: string) {
		state.message = message
	}
}

export { MutationTypes, mutations }
