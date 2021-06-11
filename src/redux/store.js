import { configureStore } from '@reduxjs/toolkit'
import { blogSlice } from '../redux/blogSlice'
import { userSlice } from '../redux/userSlice'
import { bookSlice } from './bookSlice'


export default configureStore({
    reducer: {
        blogs: blogSlice.reducer,
        user: userSlice.reducer,
        books: bookSlice.reducer
    }
})