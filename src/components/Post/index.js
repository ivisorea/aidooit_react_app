import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spinner } from '../Spinner'
import { Img } from '../PostCardUserProfile/styles'
import { ContainerPost } from './style'


export const Post = () => {
    const {PostId} = useParams()
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        try {
            const getPost = async () => {
                const response = await 
                    axios.get(`https://aidooit-app.herokuapp.com/post/${PostId}`);
                setPost(response.data);
            };
            getPost();
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }, [PostId]);

    return (
        <>
            {
                loading ?
                <Spinner/>
                :
                <ContainerPost>
                    <h1>{post.title}</h1>
                    <Img src={post.image} alt=""/>
                    <p>{post.body}</p>
                    <p>{post.date}</p>
                </ContainerPost>
            }
        </>
        
    )
}



