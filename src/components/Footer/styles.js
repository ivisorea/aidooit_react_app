import styled from "styled-components";

export const FooterCont = styled.div`
   align-items: center;
    padding: 5rem 1rem 1rem 1rem;
    display: flex;
    width: 100%;
    justify-content: space-between;

`;


export const SocialMediaIcon = styled.i`
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    color: #f4ba15;
    font-size: 1.5rem;
    margin: 0.5rem;
    cursor: pointer;
    &:hover {
        color: #fff;
    }
`;


export const IconLink = styled.a`
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    color: #f4ba15;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    margin: 0.5rem;
    padding:0.5rem;
    &:hover {
        color: #fff;
    }
`;

export const CopyRight = styled.p`
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    color: #f4ba15;
    font-size: 1rem;
    font-weight: bold;
    margin: 0.5rem;
    padding:0.5rem;
    &:hover {
        color: #fff;
    }
`;
