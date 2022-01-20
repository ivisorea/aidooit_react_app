import React from 'react'
import ShowMoreText from "react-show-more-text";
import { Parser } from 'html-to-react'
import { Img, PostWrapper, DescWrapper, Title, Button, Card } from './styles';

export const PostCardUserProfile = ({_id, image, title, body, likes}, deletePost) => {
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
                            {Parser().parse(body)}

                        </ShowMoreText>
                        
                        <Button>
                            <i class="far fa-heart"></i>
                            {likes} Likes
                        </Button>
                        <button onClick={deletePost.bind(_id)}>
                            DELETE
                        </button>
                    </DescWrapper>
                    
                </PostWrapper>
                
            </a>
            
        </Card>
    )
}


