import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogs: [
        {date: '06/02/2021', title: 'first title',
         body: 'first body', author: 'me', tags: []},
        {date: '06/02/2021', title: 'second title',
         body: 'second body', author: 'me', tags: ['wild']},
        {date: '06/02/2021', title: 'third title',
         body: 'third body', author: 'me', tags: ['crazy','fun']}
    ]
}
export const blogSlice = createSlice({
    name: 'blog posts',
    initialState: initialState.blogs,
    reducers: {
        addBlog: (state, action) => {
            const newBlog = {
                date: Date.now(),
                title: action.payload.title,
                body: action.payload.body,
                author: action.payload.author,
                tags: action.payload.tags
            }
            state.push(newBlog)
        },
        addTag: (state, action) => {
            const index = state.findIndex(
                (blog) => blog.title === action.payload.title)
            state[index].tags = [ ...state.blogs.tags, action.payload.tags]
        },
    },
})

export const { addBlog, addTag } = blogSlice.actions

export default blogSlice.reducer