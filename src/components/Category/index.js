import React from 'react'
import { Image, Title } from './styles'
import { Link } from 'react-router-dom'


export const Category = ({name, image}) => {
    return (
        <>
            <Link to={`/category/${name}`}>
                <Image className="card-img-top" src={image} alt=""/>   
                <Title className="card-title">{name}</Title>
            </Link>
        </>
        
    )
}


