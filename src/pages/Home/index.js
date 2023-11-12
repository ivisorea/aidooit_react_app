import React from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import './Home.css'
import { Search } from '../../components/Search'
import { usePostData } from '../../hooks/usePostData'

const Home = () => {
    const { posts } = usePostData();

    return (
        <>
            <div class="grid-container">
                <div class="search">search
            <Search posts={posts} />
            <ListOfCategories />
                </div>
            </div>
        </>
    )
}

export default Home
