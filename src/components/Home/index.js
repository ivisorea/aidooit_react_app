import React from 'react'
import { HomeListPostByCateg } from '../HomeListPostByCateg'
import { ListOfCategories } from '../ListOfCategories'

// import PostList from '../PostList'

import './Home.css'

const Home = ({categories, posts, postsByCategory, isLoading, loading}) => {
    return (
        <main>
            <ListOfCategories categories={categories} isLoading={isLoading}/>
            {/* <PostList posts={posts}/> */}
            <HomeListPostByCateg postsByCategory={postsByCategory} loading={loading}/>
            
        </main>
    )
}

export default Home
