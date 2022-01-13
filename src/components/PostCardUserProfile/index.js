import React from 'react'
import ShowMoreText from "react-show-more-text";
import { Img, PostWrapper, DescWrapper, Title, Button, Card } from './styles';

export const PostCardUserProfile = ({_id, image, title, body, likes}) => {
    return (
        <Card>
            <a href={`/detail/${_id}`}>
                <PostWrapper>
                    <Img src={image} alt=""/>
                    <DescWrapper>
                        <Title>{title}</Title>
                        <ShowMoreText
                            lines={4}
                            anchorClass=""  
                            expanded={false}
                            width={500}
                            >
                            <p>{body}</p>

                        </ShowMoreText>
                        <Button>
                            <i class="far fa-heart"></i>
                            {likes} Likes
                        </Button>
                    </DescWrapper>
                </PostWrapper>
            </a>
        </Card>
    )
}


