import React from 'react'
import { ListOfCategories } from '../ListOfCategories'
import { Footer } from '../Footer'
import './Home.css'
import { Search } from '../Search'

const Home = ({categories, posts, isLoading }) => {
    return (
        <>
            

            <div class="grid-container">
                <div class="search">search
            <Search posts={posts} categories={categories}/>
            <ListOfCategories categories={categories} isLoading={isLoading}/>
                </div>
            </div>
        </>
    )
}

export default Home
