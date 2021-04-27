import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        title: 'topic 1',
        icon: "1",
    },
    {
        id: 2,
        title: 'topic 2',
        icon: "2",
    }
]

export const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: initialState,
    reducers: {

    }
})

export const selectSubreddits = (state) => state.subreddits;

export default subredditsSlice.reducers;