import React from 'react'
import { Image, Title } from './styles'
import { Link } from 'react-router-dom'


export const CardCategory = ({category}) => {
    return (
        <>
            <Link to={`/category/${category.name}`}>
                <Image className="card-img-top" src={category.image} alt=""/>   
                <Title className="card-title">{category.name}</Title>
            </Link>
        </>
        
    )
}


