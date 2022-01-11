import React from 'react'
import { Category } from '../Category'
import { List, ListItem } from './styles'

export const ListOfCategories = ({categories}) => {
    return (
        <>
            <List>
                {categories.map(category => 
                <ListItem key={category.id}>
                        <Category {...category}
                            />
                </ListItem>
                )}
            </List>
            
        </>
        
    )
}


