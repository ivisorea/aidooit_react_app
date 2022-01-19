import React from 'react'
import ShowMoreText from "react-show-more-text";
import { Img, PostWrapper, DescWrapper, Title, Button, Card, BtnContainer } from './styles';
import { Parser } from 'html-to-react'
import {TextBtn } from '../Toolbar/styles';


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
                            {Parser().parse(body)}

                        </ShowMoreText>
                        
                        <Button>
                            <i class="far fa-heart"></i>
                            {likes} Likes
                        </Button>

                    </DescWrapper>
                    
                 { /* <BtnContainer> 
                        <Button className="btn">
                        <TextBtn>EDIT</TextBtn> 
                        </Button>
                     </BtnContainer>

                    <BtnContainer>
                        <Button className="btn">
                        <TextBtn>DELETE</TextBtn> 
                        </Button>
                    </BtnContainer> 
                 */}  
                </PostWrapper>
            </a>


        </Card>
    )
}

