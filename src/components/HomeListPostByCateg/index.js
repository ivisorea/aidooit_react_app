import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {  HomePostCard } from '../HomePostCard'
import { List, ListItem } from './styles'
import { Search } from '../Search'
import { useParams } from 'react-router-dom'
import { Spinner } from '../Spinner'
import { Search } from '../Search'

export const HomeListPostByCateg = () => {
    const {CategoryId} = useParams();
    const [postsByCategory, setPostsByCategory] = useState([]);
    const [loading, setLoading] = useState(false);

    //GET POSTS BY CATEGORY
      useEffect(() => {
        setLoading(true);
        try {
            const getPostsByCategory = async () => {
                const response = await axios.get(`https://aidooit-app.herokuapp.com/post/category/${CategoryId}`);
                setPostsByCategory(response.data);
            };
            getPostsByCategory();
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }, [CategoryId]);
    
    
    return (
        <>
            <Search/>
            <List>

                {
                    loading ?
                    <Spinner/>
                    :
                    postsByCategory.map((post) => 
                        <ListItem key={post._id}>
                            <HomePostCard {...post}
                                />
                        </ListItem>
                )}
            </List>
            
        </>
        
    )
}


