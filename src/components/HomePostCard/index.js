import React from 'react'
import { Image, Title, Button } from './styles'
import { Link } from 'react-router-dom'


export const HomePostCard = ({title, image, _id, likes}) => {
    return (
        <>
            <Link to={`/detail/${_id}`}>
                <Image className="card-img-top" src={image} alt=""/>   
                <Title className="card-title">{title}</Title>
                <Button>
                    <i class="far fa-heart"></i>
                    {likes} Likes
                </Button>
            </Link>
        </>
        
    )
}


