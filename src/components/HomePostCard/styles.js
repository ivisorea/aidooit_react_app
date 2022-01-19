import styled from "styled-components";

export const Image = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    display: block;
    :hover {
        cursor: pointer;
        opacity: 0.7;
`;

export const ImgFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h5`
    font-size: 1rem;
    font-weight: bold;
    color: #684595;
    margin: 0;
    :hover {
        cursor: pointer;
        opacity: 0.7;
`;

export const Button = styled.button`
   
`;