import * as actions from '../actions/postsActions'

export const initState = {
    posts: [],
    loading: false,
    hasError: false,
}

export default function postsReducer(state = initState, action){
    switch(action.type){
        case actions.GET_POSTS:
            return { ...state, loading: true }
        case actions.GET_POSTS_SUCCESS:
            return { posts: action.payload, loading: false, hasError: false }
        case actions.GET_POSTS_FAILURE:
            return { ...state, loading: false, hasError: true}            
        default:
            return state
    }
}