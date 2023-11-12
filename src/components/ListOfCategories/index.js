import React from 'react'
import { Category } from '../Category'
import { StyledSpinner, List, ListItem } from './styles'
import spinner from './Aidooit.png'
import { useCategoryData } from '../../hooks/useCategotyData'

export const ListOfCategories = () => {
    const {  categories, isLoading } = useCategoryData();

    return (
        <>
            <List>
                {
                    isLoading ?
                    <StyledSpinner src={spinner} alt=""/>
                    :
                    categories.map((category) => 
                <ListItem key={category._id}>
                        <Category {...category}/>
                </ListItem>
                )}
            </List>
            
        </>
        
    )
}


