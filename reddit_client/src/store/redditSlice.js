import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getSubredditPosts, getPostComments } from '../api/reddit';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubredit: '/r/pics/',
}

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState: initialState,
    reducers: {
        setPost(state, action) {
            state.posts = action.payload;
        },
        startGetPosts(state) {
            state.error = false;
            state.isLoading = true;
        },
        getPostSuccess(state) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFailed(state) {
            state.error = true;
            state.isLoading;
        }
        
    }
});

export const {
    setPost,
    startGetPosts,
    getPostSuccess,
    getPostsFailed,
}

export default redditSlice.reducer;

// Redux thunk to retrive posts
const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(startGetPosts());
        const posts = await getSubredditPosts(subreddit)
        
    } catch (error) {
        dispatch(getPostsFailed());
    }
}