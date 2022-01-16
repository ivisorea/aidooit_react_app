import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spinner } from '../Spinner'
import { Img } from '../PostCardUserProfile/styles'
import { ContainerPost, Title } from './style'
import { Parser } from 'html-to-react'



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
                    <div className='row'>
                        <div className='col-md-4'>
                            <Img src={post.image} alt="Post Image"/>
                        </div>
                        <div className='col-md-8 p-4'>
                            <Title>{post.title}</Title>
                        </div>
                    </div>
                    
                    <div>
                    {Parser().parse(post.body)}
                    </div>
                    {/* <p>{post.date}</p> */}
                </ContainerPost>
            }
        </>
        
    )
}



