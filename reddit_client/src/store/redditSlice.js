import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getSubredditPosts, getPostComments } from '../api/reddit';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: '/r/pics/',
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
        getPostSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFailed(state) {
            state.error = true;
            state.isLoading = false;
        },

        setSearchTerm(state, action) {
          state.searchTerm = action.payload;
        },

        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },

        toggleShowingComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
        },
        startGetComments(state, action) {
            // do not fetch if hidden
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
            if (!state.posts[action.payload].showingComments) {
                return;
            }
            state.posts[action.payload].loadingComments = true;
            state.posts[action.payload].error = false
        },
        getCommetsSuccess(state, action) {
            state.posts[action.payload.index].loadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        getCommentsFailed(state, action) {
            state.posts[action.payload].loadingComments = false;
            state.posts[action.payload].error = true;
        },
    }
});

export const {
    setPost,
    startGetPosts,
    getPostSuccess,
    getPostsFailed,
    setSearchTerm,
    setSelectedSubreddit,
    toggleShowingComments,
    startGetComments,
    getCommetsSuccess,
    getCommentsFailed,
} = redditSlice.actions;

export default redditSlice.reducer;

// Redux thunk to retrive posts
export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(startGetPosts());
        const posts = await getSubredditPosts(subreddit)

        // We are adding showingComments and comments as additional fields to handle showing them when the user wants to. 
        // We need to do this because we need to call another API endpoint to get the comments for each post.
        const postWithMetaData = posts.map((post) => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false,
        }));
        dispatch(getPostSuccess(postWithMetaData));
        
    } catch (error) {
        dispatch(getPostsFailed());
    }
}

export const fetchComments = (index, permalink) => async (dispatch) => {
    try {
        dispatch(startGetComments(index));
        const comments = await getPostComments(permalink);
        dispatch(getCommetsSuccess({index, comments}))
    }catch (error) {
        dispatch(getCommentsFailed(index))
    }
};

//Selectors
const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm

export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if (searchTerm !== "") {
            return posts.filter((post) => {
                post.title.toLowerCase().includes(searchTerm.toLowerCase());
            })
        }
        return posts;
    }
)