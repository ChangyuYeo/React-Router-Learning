import { BookItem } from '@/api/types'

interface RootState {
	books: BookItem[]
	book: BookItem[]
	loading: boolean
	message: string
}

const state: RootState = {
	books: [],
	book: [],
	loading: false,
	message: '결과가 없습니다. 도서의 정보를 검색해 주세요!'
}

export { state, RootState }
