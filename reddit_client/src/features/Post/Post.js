import React from 'react';

import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage,
  } from 'react-icons/ti';



import Avatar from '../avatar/avatar.js'
import Comment from '../comment/comments'

import '../../css/Post.css'


const Post = (props) => {
    const { post, onToggleComments } = props;

    const renderComments = () => {
        if (post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
            )
        }
    }

    return (
        <article key={post.id}>
           <div className='post-wrapper'>
               <div className='post-container'>
                   <h3 className='post-title'>{post.title}</h3>
                   <div className='post-image-container'>
                       <img src={post.url} alt="" className="post-image" />
                   </div>
                   <div className="post-details">
                        <span className='author-details'>
                            <Avatar name={post.author} />
                            <span className='author-username'>{post.author}</span>
                        </span>
                        <span className="post-comments-container">
                            <button
                                type="button"
                                className={`icon-action-button ${
                                  post.showingComments && 'showing-comments'
                                }`}
                                onClick={() => onToggleComments(post.permalink)}
                                aria-label="Show comments"
                            >
                                <TiMessage className="icon-action" />
                            </button>
                        </span>
                        
                   </div>
                   {renderComments()}
               </div>
                
           </div>
        </article>
    )
}

export default Post;
