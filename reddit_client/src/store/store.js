import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './postsSlice.js'

export default createStore(combineReducers({
    posts: postsReducer,
}));




