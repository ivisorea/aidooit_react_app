import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import { PostCardUserProfile } from '../PostCardUserProfile'
import { Spinner } from '../Spinner'
import { useAuth } from '../../context/AuthContext'
import ShowMoreText from "react-show-more-text";
import { Img, PostWrapper, DescWrapper, Title, Button, Card, BtnContainer, BtnPost, IconLikes } from './styles';
import { Parser } from 'html-to-react'
import { Link } from 'react-router-dom';

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

    const deletePost = async (id) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
        try {
             await axios.delete(`http://localhost:4000/post/${id}`, {
                headers: { Authorization: localStorage.getItem('token') }
            });
            setPostsByAuthor(postsByAuthor.filter(post => post._id !== id));
        }
        catch (error) {
            console.log(error);
        }
    }
            
          

        
    }



    return (
        <>
            {
                loading ?
                <Spinner/>
                :
                <ul>
                    {postsByAuthor.map(post => (
                        <li key={post._id}>
                        <Card>
                               
                                    {/* <PostWrapper> */}
                                        <Link to={`/detail/${post._id}`}>
                                        <PostWrapper>
                                            <Img src={post.image} alt=""/>
                                            <DescWrapper>
                                                <Title>{post.title}</Title>
                                                <ShowMoreText
                                                    lines={5}
                                                    anchorClass=""  
                                                    expanded={false}
                                                    width={1000}
                                                    >
                                                    {Parser().parse(post.body)}

                                                </ShowMoreText>
                                                
                                            </DescWrapper>
                                        </PostWrapper>
                                        
                                        </Link>
                                        <BtnContainer>
                                            <Button>
                                                <i class="fas fa-heart" style={{color: '#ff0000b5'}}></i>
                                                {post.likes} 10
                                            </Button>
                                            

                                            <div>
                                            <BtnPost onClick={() => deletePost(post._id)}>
                                                <i class="far fa-trash-alt"></i>
                                            </BtnPost>
                                            
                                            <BtnPost>
                                                <i class="far fa-edit"></i>
                                            </BtnPost>
                                            </div>
                                        </BtnContainer>
                                    {/* </PostWrapper> */}
                            
                                
                            </Card>
                            
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}


