//import { createStore, combineReducers } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

//import postsReducer from './postsSlice.js'

import redditReducer from './redditSlice.js'
import subredditsReducer from './subredditsSlice.js'

export default configureStore({
    reducer: combineReducers({
        //posts: postsReducer,
        reddit: redditReducer,
        subreddits: subredditsReducer,
    })
});




