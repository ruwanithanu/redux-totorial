import { createSlice } from "@reduxjs/toolkit";

 export const initialState = {
    loading: false,
    hasErrors: false,
    posts: []
}


const postsSlice = createSlice({
    name: 'posts',  // A name, used in action types
    initialState: initialState, // The initial state for the reducer
    reducers: { // An object of "case reducers". Key names will be used to generate actions
        getPosts:(state) => {
            state.loading = true
        },
        getPostsSuccess: (state, { payload }) => {
            state.loading =  false
            state.posts =  payload
            state.hasErrors =  false
        },
        getPostsFailure: (state) => {
            state.loading =  false
            state.hasErrors = true
        }

    }
})

export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions

export const postsSelector = (state) => state.posts

export default postsSlice.reducer

export function fetchPosts() {
    return async (dispatch) => {
        dispatch(getPosts())
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            dispatch(getPostsSuccess(data))
        }catch(error) {
            dispatch(getPostsFailure())
        }
    }   
}

