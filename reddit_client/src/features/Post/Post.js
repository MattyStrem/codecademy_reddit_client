import React from 'react';


const Post = (props) => {
    const post = props;

    return (
        <article key={post.id}>
           <div className='post-container'>
                <p>Bob</p>
           </div>
        </article>
    )
}

export default Post;
