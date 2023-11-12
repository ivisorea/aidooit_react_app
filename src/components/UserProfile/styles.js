import styled from "styled-components";

export const UserSummaryWrapper = styled.div`
    background: #684595,
    
    
`;

export const UserPhoto = styled.div`
    background: #684595,
    border: 5px solid #FFC233;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    display: flex;
    
    position: relative;
    overflow: hidden;
    &:hover {
        background: #FFC233;
        color: #684595;
    }
`;

export const UserPhotoImg = styled.img`
    border: 5px solid #FFC233;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    display: flex;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    left: -4px;
    top: -4px;
    `;

export const UserPhotoIcon = styled.i`
    color: #FFC233;
    ${'' /* aligncenter: center;
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */}
`;


