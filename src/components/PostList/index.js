import React from 'react'
import { PostCard } from '../PostCard'

const PostList = ({postsByCategory}) => {
    return (
        <div>
           <ul>
                {postsByCategory.map(post => (
                    <li key={post.id}>
                        <PostCard {...post} />
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default PostList
