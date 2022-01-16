import React from 'react'
import { ListOfCategories } from '../ListOfCategories'
import { Footer } from '../Footer'
import './Home.css'
import { Search } from '../Search'

const Home = ({categories, posts, isLoading }) => {
    return (
        <>
        <Search posts={posts} categories={categories}/>
            <ListOfCategories categories={categories} isLoading={isLoading}/>
            <Footer/>
        </>
    )
}

export default Home
