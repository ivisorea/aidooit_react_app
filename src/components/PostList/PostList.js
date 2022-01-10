import React from 'react'

const PostList = ({postsByCategory}) => {
    return (
        <div>
           <ul>
                {postsByCategory.map(post => (
                    <li className="list-group-item" key={post.id}>
                        <img src={post.image} alt=""/>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default PostList
