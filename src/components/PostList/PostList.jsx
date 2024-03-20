import React from 'react'
import PostItem from '../PostItem/PostItem';
import style from './PostList.module.scss';

function PostList({postsProps}) {

    return (
        <div className={style.posts}>
            {postsProps.map((post) => (
                <PostItem post={post} key={post.id} />
            ))}
        </div>
    )

}

export default PostList
