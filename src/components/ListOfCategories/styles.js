import styled from "styled-components";

export const List = styled.ul`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    
`;

export const ListItem = styled.li`
    padding: 0.5rem;
    flex-grow: 1;
    height: 40vh;
    :hover {
        cursor: pointer;
        opacity: 0.7;
`;

export const StyledSpinner = styled.img`
  animation: rotate 2s linear infinite;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
  
  
  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

    
