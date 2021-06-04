import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogs: [
        {date: '06/02/2021', title: 'first title',
         body: 'first body', author: 'me', tags: [], 
         imgUrl: 'https://www.sciencekids.co.nz/images/pictures/math/number1.jpg'},
        {date: '06/02/2021', title: 'second title',
         body: 'second body', author: 'me', tags: ['wild'], 
         imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1200px-NYCS-bull-trans-2.svg.png'},
        {date: '06/02/2021', title: 'third title',
         body: 'third body', author: 'me', tags: ['crazy','fun'], 
         imgUrl: 'https://cdn.pixabay.com/photo/2015/04/04/19/13/three-706895_640.jpg'}
    ]
}
export const blogSlice = createSlice({
    name: 'blog_posts',
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