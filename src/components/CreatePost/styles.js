import styled from "styled-components";

export const FormContainer = styled.div`
    margin: 2rem auto;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #fff;
    border-radius: 20px;
    `;


export const Button = styled.button`
    background: #f4ba15;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    margin: 1rem 1rem;
    cursor: pointer;
    text-align: center
    transition: all 0.3s ease-in-out;
    &:hover {
        background: #684595;
        color: #f4ba15;
    }
`;

export const EditorForm = styled.form`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 5rem;
`;

export const ImageContainer = styled.div`
    ${'' /* background-image: url(https://app-aidooit-cloud.s3.eu-central-1.amazonaws.com/file-1642347424258-287115022.png); */}
    background-size: cover;
    background-position: center;
    width: 100%;
    
    min-width: 10rem;
    max-width: 15rem;
    min-height: 10rem;
    max-height: 15rem;
    border-radius: 5px;
    margin-bottom: 1rem;

`;

export const Image = styled.img`
    width: 100%;
    max-width: 15rem;
   
    border-radius: 5px;
    margin: 1rem 0;
    object-fit: cover;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
        
    }
    `;

export const HiddenLabel = styled.label`
    display: none;
`;

export const ContainerInput = styled.div`
    display: flex;
    alignItems: center;
    justify-content: center;

`;

export const InputProduct = styled.input`
    margin: 0.5rem 0.25rem 0.25rem 0;
    width:30%;
    `;

export const InputUrl = styled.input`
    margin: 0.5rem 0 0.25rem 0;
    width:70%;
    `;
export const DeleteIcon = styled.button`
  
    `;

export const DeleteInput = styled.i`
    margin: 1rem  0.5rem 0.5rem 0.5rem,
    font-size: 1.2rem, 
    color: #f4ba15
    `;

