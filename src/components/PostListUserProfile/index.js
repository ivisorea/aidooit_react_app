import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { PostCardUserProfile } from '../PostCardUserProfile'
import { Spinner } from '../Spinner'
import { useAuth } from '../../context/AuthContext'

export const PostListUserProfile = ({posts}) => {
    const { user } = useAuth();
    const [postsByAuthor, setPostsByAuthor] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            const getPostsByAuthor = async () => {
                const response = await axios.get(`https://aidooit-app.herokuapp.com/post/author/${user._id}`);
                setPostsByAuthor(response.data);
            };
            getPostsByAuthor();
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }, [user._id]);

    return (
        <>
            {
                loading ?
                <Spinner/>
                :
                <ul>
                    {postsByAuthor.map(post => (
                        <li key={post._id}>
                            <PostCardUserProfile {...post} />
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}


