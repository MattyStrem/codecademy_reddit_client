//import { createStore, combineReducers } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import postsReducer from './postsSlice.js'

export default configureStore({
    reducer: combineReducers({
        posts: postsReducer,
    })
});




