import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {selectPosts} from '../../store/postsSlice'

import Post from '../Post/Post'


const Main_Section = () => {
    const posts = useSelector(selectPosts);
    const dipatch = useDispatch();
    

    return (
        <div className="posts-container">
          {
            posts.map((post) => (
            <Post 
              key={post.id}
              post={post}
            />
              
            ))
          }
        </div>
    )
}

export default Main_Section;