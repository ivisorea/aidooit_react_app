import React from 'react'
import { ListOfCategories } from '../ListOfCategories'

import PostList from '../PostList'

import './Home.css'

const Home = ({categories, postsByCategory}) => {
    return (
        <main>
            <ListOfCategories categories={categories}/>
            <PostList postsByCategory={postsByCategory}/>
            
        </main>
    )
}

export default Home
