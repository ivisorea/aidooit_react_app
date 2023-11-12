import React from 'react'
import { Image, Title, Button, ImgFooter } from './styles'
import { Link } from 'react-router-dom'


export const HomePostCard = ({title, image, _id, likes}) => {

    return (
        <>
            <Link to={`/detail/${_id}`}>
                <Image className="card-img-top" src={image} alt=""/>  
                <ImgFooter>
                    <Title className="card-title">{title}</Title>
                    <Button>
                        <i class="far fa-heart"></i>
                        {likes} Likes
                    </Button>
                </ImgFooter> 
                
            </Link>

          
        </>
        
    )
}


