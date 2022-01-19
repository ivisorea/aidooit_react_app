import styled from "styled-components";

export const Image = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    width: 90%;
    height: 90%;
    overflow: hidden;
    object-fit: cover;
    display: block;
`;

export const Title = styled.h5`
    font-size: 1rem;
    font-weight: bold;
    width: 90%;
    
    color: #684595;
    margin: 0;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    :hover {
        cursor: pointer;
        opacity: 0.7;
`;



