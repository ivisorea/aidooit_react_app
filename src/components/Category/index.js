import React from 'react'
import { Image, Title } from './styles'
import { Link } from 'react-router-dom'


export const Category = ({_id, name, image}) => {
    return (
        <>
       
            <Link to={`/category/${_id}`}>
                <Image className="card-img-top" src={image} alt=""/>   
                <Title className="card-title">{name}</Title>
            </Link>
      
            
        </>
        
    )
}


