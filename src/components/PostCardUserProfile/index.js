import React from 'react'
import ShowMoreText from "react-show-more-text";
import { Img, PostWrapper, DescWrapper, Title, Button, Card, BtnContainer } from './styles';
import { Parser } from 'html-to-react'
import {TextBtn } from '../Toolbar/styles';
import axios from "axios";




export const PostCardUserProfile = ({_id, image, title, body, likes}) => {

  

    function handleDelete () {
       
        axios.delete((`https://aidooit-app.herokuapp.com/post/author/${_id}`)
        .then((res) => {console.log(res);
           
            
        }))
      }




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
                            width={900}
                            >
                            {Parser().parse(body)}

                        </ShowMoreText>
                        
                        <Button>
                            <i class="far fa-heart"></i>
                            {likes} Likes
                        </Button>

                    </DescWrapper>


                   
                 <BtnContainer> 
                        <button className="btn" /*onClick={editPost}*/>
                        <TextBtn>EDIT</TextBtn> 
                        </button>
                     </BtnContainer>


                    <BtnContainer>
                        <button className="btn" onClick={handleDelete}>
                        <TextBtn>DELETE</TextBtn> 
                        </button>
                    </BtnContainer> 






                    


                 
                </PostWrapper>

            </a>


        </Card>



    )
}

