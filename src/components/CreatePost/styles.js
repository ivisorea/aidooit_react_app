import styled from "styled-components";

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