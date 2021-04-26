import React from 'react';


const Post = (props) => {
    const { post }= props;

    return (
        <article key={post.id}>
           <div className='post-wrapper'>
               <div className='post-container'>
                   <h3 className='post-title'>{post.title}</h3>
                   <p className='post-author'>{post.author}</p>
               </div>
                
           </div>
        </article>
    )
}

export default Post;
