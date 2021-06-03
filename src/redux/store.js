import { configureStore } from '@reduxjs/toolkit'
import { blogSlice } from '../redux/blogSlice'

export default configureStore({
    reducer: {
        blogs: blogSlice,
    }
})