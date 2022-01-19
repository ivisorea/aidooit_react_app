import styled from "styled-components";

export const Img = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    border-radius: 5px;
`;

export const ContainerPost = styled.div`
    margin: 6rem 4rem;
    padding: 1rem;
    font-size: 1.2rem;
    background-color: #fff;
    border-radius: 20px;
    border-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem 0;
    color: #684595;
    
`;

export const Body = styled.p`
    font-size: 1.2rem;
    margin: 0.8rem 0;
`;

export const ListItem = styled.li`
    decoration: none;
    padding: 0.5rem;
    ${'' /* list-style: none; */}
`;

export const MaterialList = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    margin: 2rem 0 0.5rem 0;
    ;
`;