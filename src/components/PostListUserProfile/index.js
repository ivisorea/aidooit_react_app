import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { PostCard } from '../PostCardUserProfile'
import { Spinner } from '../Spinner'

const PostList = ({posts}) => {
    const {authorId} = useParams()
    const [postsByAuthor, setPostsByAuthor] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            const getPostsByAuthor = async () => {
                const response = await axios.get(`https://aidooit-app.herokuapp.com/post/author/${authorId}`);
                setPostsByAuthor(response.data);
            };
            getPostsByAuthor();
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }, [authorId]);

    return (
        <>
            {
                loading ?
                <Spinner/>
                :
                <ul>
                    {postsByAuthor.map(post => (
                        <li key={post.id}>
                            <PostCard {...post} />
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}

export default PostList
