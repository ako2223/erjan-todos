import React from 'react';
import style from './PostItem.module.scss';

function PostItem({post}) {
    return (
        <div className={style.post}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
    )
}

export default PostItem
