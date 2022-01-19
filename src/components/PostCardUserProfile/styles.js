import styled from "styled-components";

export const Card = styled.div`
    background-color: transparent;
    
    
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    padding: 1rem;
`;

export const PostWrapper = styled.div`
    display: flex;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1%;
    overflow: hidden;
    width: 100%;
    position: relative;
    background-color: #fff;
`;

export const Img = styled.img`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    object-fit: cover;
    top: 0;
    width: 10rem;
`;

export const Title = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #684595;
   
`;

export const Body = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    color: #6D6B6B;
    
    display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
   
`;

export const DescWrapper = styled.div`
    padding: 0 2% 0 2%;
    width: 100%;
    color: #000;
   
`;

export const Button = styled.button`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`;

export const IconHeart = styled.i`
    color: #684595;
    font-size: 1.5rem;
    margin-right: 0.5rem;
`;

export const BtnContainer = styled.div`
margin-left: 0.5rem;
margin-right: 0.5rem;
position: relative;
margin-top: 10rem;
`;



  
