import React from 'react'
import { CardCategory } from '../CardCategory'

import './Home.css'

const Home = ({categories}) => {
    return (
        <main>
            
            {categories.map(category => (
                <CardCategory 
                    key={category.id} 
                    category={category}
                   
                    />
            ))}
        </main>
    )
}

export default Home
