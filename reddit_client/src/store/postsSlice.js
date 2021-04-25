import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        title: 'Post 1',
        author: 'Bob'
    },
    {
        id: 2,
        title: 'Post 2',
        author: 'Rob'
    }
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {

    }
});

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;