import { fetchBookList, fetchBookInfo } from '@/api'
import { BookParams } from '@/api/types'
import { ActionContext } from 'vuex'
import { MutationTypes } from './mutations'
import { RootState } from './state'

enum ActionTypes {
	FETCH_BOOKS = 'FETCH_BOOKS',
	FETCH_BOOK_INFO = 'FETCH_BOOK_INFO'
}

const actions = {
	async [ActionTypes.FETCH_BOOKS](
		{ state, commit }: ActionContext<RootState, RootState>,
		books: BookParams
	) {
		commit(MutationTypes.SET_BOOKS)
		if (state.loading) return
		commit(MutationTypes.CHANGE_LOADING, true)
		try {
			const { data } = await fetchBookList(books)
			if (data.documents.length === 0) {
				commit(
					MutationTypes.SET_MESSAGE,
					'해당 검색 결과의 내용을 찾을 수 없습니다.'
				)
			}
			commit(MutationTypes.SET_BOOKS, data.documents)
		} catch ({ message }) {
			console.error(message)
		} finally {
			commit(MutationTypes.CHANGE_LOADING, false)
		}
	},
	async [ActionTypes.FETCH_BOOK_INFO](
		{ state, commit }: ActionContext<RootState, RootState>,
		book: string
	) {
		commit(MutationTypes.RESET_BOOKS)
		if (state.loading) return
		commit(MutationTypes.CHANGE_LOADING, true)
		try {
			const { data } = await fetchBookInfo(book)
			commit(MutationTypes.SET_BOOK, data.documents)
		} catch ({ message }) {
			console.error(message)
		} finally {
			commit(MutationTypes.CHANGE_LOADING, false)
		}
	}
}

export { ActionTypes, actions }
