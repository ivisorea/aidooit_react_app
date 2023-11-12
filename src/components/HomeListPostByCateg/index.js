import {  HomePostCard } from '../HomePostCard'
import { List, ListItem } from './styles'
import { Search } from '../Search'
import { useParams } from 'react-router-dom'
import { Spinner } from '../Spinner'
import { usePostByCategory } from '../../hooks/usePostByCategory'

export const HomeListPostByCateg = () => {
    const {CategoryId} = useParams();
    const { loading, postsByCategory } = usePostByCategory(CategoryId)
    
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


