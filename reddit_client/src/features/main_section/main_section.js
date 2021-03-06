import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import {selectPosts} from '../../store/postsSlice'

import Post from '../Post/Post'

import {
  fetchPosts,
  selectFilteredPosts,
  setSearchTerm,
  fetchComments,
} from '../../store/redditSlice';


const Main_Section = () => {
    //const posts = useSelector(selectPosts);
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
      const getComments = (permalink) => {
        dispatch(fetchComments(index, permalink));
      }

      return getComments;
    }

    if (error) {
      return (
        <div className="error">
          <h2>Failed to Load Post</h2>
          <button
            type="button"
            onClick={() => dispatch(fetchPosts(selectedSubreddit))}
          >
            Try Again
          </button>
        </div>
      )
    }

    if (posts.length === 0) {
      return (
        <div className="error">
          <h2>No posts matching "{searchTerm}"</h2>
          <button 
            type="button"
            onClick={() => dispatch(setSearchTerm(""))}
          >
            Go Home
          </button>
        </div>
      )
    }
    

    return (
        <div className="posts-container">
          {
            posts.map((post, index) => (
            <Post 
              key={post.id}
              post={post}
              onToggleComments={onToggleComments(index)}
            />
              
            ))
          }
        </div>
    )
}

export default Main_Section;