import React from 'react'
import { ListOfCategories } from '../ListOfCategories'
import { Footer } from '../Footer'



import './Home.css'

const Home = ({categories, posts, postsByCategory, isLoading, loading}) => {
    return (
        <>
            <ListOfCategories categories={categories} isLoading={isLoading}/>
            <Footer/>
        </>
    )
}

export default Home
