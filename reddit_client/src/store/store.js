//import { createStore, combineReducers } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import postsReducer from './postsSlice.js'
import subredditReducer from './subredditsSlice'

export default configureStore({
    reducer: combineReducers({
        posts: postsReducer,
        subreddit: subredditReducer,
    })
});




