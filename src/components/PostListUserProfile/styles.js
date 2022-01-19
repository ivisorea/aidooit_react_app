import styled from "styled-components";

export const Card = styled.div`
    background-color: #fff;
    border-radius: 20px;
    border-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    
    display: flex;
    flex-direction: column;
    margin: 8rem 8rem -4rem 8rem;
    padding: 1rem;
`;

export const PostWrapper = styled.div`
    display: flex;
   
    width: 100%;
`;

export const Img = styled.img`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    object-fit: cover;
    top: 0;
    width: 10rem;
    height: 10rem;
    max-height: 10rem;
    min-height: 10rem;
    max-width: 10rem;
    min-width: 10rem;
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
    display: flex;
    margin-left:14%;
    justify-content: space-between;
`;

export const BtnPost = styled.button`
    padding: 0.5rem;
    
    border: none;
    background-color: transparent;
    color: #684595;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    align-items: center;
    :hover {
        opacity: 0.7;
    }
`;
