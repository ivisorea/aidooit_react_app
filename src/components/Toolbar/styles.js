import styled from "styled-components";

export const Button = styled.button`
    background: #FFC233;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    margin: 0.1rem 1rem;
    cursor: pointer;
    text-align: center
    transition: all 0.3s ease-in-out;
    &:hover {
        background: #684595;
        color: #FFC233;
    }
`;

export const TextBtn = styled.p`
    padding: 0 8px;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    `;

export const MenuIcon = styled.i`
    color: #FFC233;
    font-size: 1.5rem;
    `;