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