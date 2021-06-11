import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isPending: false,
    books: [{name: 'Tempest', id: 1, author: 'Will Shakespeare', rating: 4.5},
            {name: 'Animal Farm', id: 2, author: 'George Orwell', rating: 5},
            {name: 'Of Mice and Men', id: 3, author: 'John Steinbeck', rating: 4}],
    error: '',
    searchInput: ''

}

export const bookSlice = createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        },
        setBookStatus: (state, action) => {
            state.isPending = action.payload
        },
        setBookError: (state, action) => {
            state.error = action.payload
        },
        setBookSearch: (state, action) => {
            state.searchInput = action.payload
        }
    },
})

export const { 
    setBooks, 
    setBookStatus,
    setBookError,
    setBookSearch } = bookSlice.actions

export const selectBooks = (state) => state.books.books
export const selectBookStatus = (state) => state.books.isPending
export const selectBookError = (state) => state.books.error
export const selectBookSearch = (state) => state.books.searchInput

export default bookSlice.reducer