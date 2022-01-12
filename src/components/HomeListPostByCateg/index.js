import React from 'react'
import {  HomePostCard } from '../HomePostCard'
import { StyledSpinner, List, ListItem } from './styles'
import spinner from './Aidooit.png'
import { useParams } from 'react-router-dom'

export const HomeListPostByCateg = ({postsByCategory, loading}) => {
    const params = useParams();
    return (
        <>
            <List>
                {
                    loading ?
                    <StyledSpinner src={spinner} alt=""/>
                    :
                    postsByCategory.map(post => 
                    parseInt(post._id) === parseInt(params._id) && (
                        <ListItem key={post._id}>
                            <HomePostCard {...post}
                                />
                        </ListItem>
                    )
                )}
            </List>
            
        </>
        
    )
}


