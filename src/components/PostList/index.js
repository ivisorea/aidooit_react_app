import React from 'react'
import { PostCard } from '../PostCard'

const PostList = ({posts}) => {
    return (
        <div>
           <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <PostCard {...post} />
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default PostList
