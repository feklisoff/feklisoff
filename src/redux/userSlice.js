import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isSignedIn: false,
        userData: null,
        searchInput: '',
        blogData: [
            {date: '06/02/2021', title: 'first title',
            description: 'first description',
             body: 'first body', author: 'me', tags: [], 
             imgUrl: 'https://www.sciencekids.co.nz/images/pictures/math/number1.jpg'},
            {date: '06/02/2021', title: 'second title',
            description: 'second description',
             body: 'second body', author: 'me', tags: ['wild'],
             imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1200px-NYCS-bull-trans-2.svg.png'},
            {date: '06/02/2021', title: 'third title',
            description: 'third description',
             body: 'third body', author: 'me', tags: ['crazy','fun'],
             imgUrl: 'https://cdn.pixabay.com/photo/2015/04/04/19/13/three-706895_640.jpg'}
        ]
    },
    reducers: {
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload
        },
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setInput: (state, action) => {
            state.searchInput = action.payload
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload
        },
    },
})


export const { 
    setSignedIn, 
    setUserData, 
    setInput, 
    setBlogData } = userSlice.actions

export const selectSignedIn = (state) => state.user.isSignedIn
export const selectUserData = (state) => state.user.userData
export const selectUserInput = (state) => state.user.searchInput
export const selectBlogData = (state) => state.user.blogData

export default userSlice.reducer