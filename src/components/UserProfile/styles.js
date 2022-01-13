import styled from "styled-components";

export const UserSummaryWrapper = styled.div`
    background: #684595,
    
    
`;

export const UserPhoto = styled.div`
    background: #684595,
    border: 5px solid #f4ba15;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    display: flex;
    
    position: relative;
    overflow: hidden;
    &:hover {
        background: #f4ba15;
        color: #684595;
    }
`;

export const UserPhotoIcon = styled.i`
    color: #f4ba15;
    ${'' /* aligncenter: center;
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */}
`;


