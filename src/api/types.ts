interface BookData {
	documents: BookItem[]
	meta: { is_end: boolean; pageable_count: number; total_count: number }
}

interface BookItem {
	authors: string[]
	contents: string
	datetime: string
	isbn: string
	price: number
	publisher: string
	sale_price: number
	status: string
	thumbnail: string
	title: string
	translators: string[]
	url: string
}

interface BookParams {
	query: string
	target: string
	size: number
}

export { BookData, BookItem, BookParams }
