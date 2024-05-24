import styled from "styled-components";

export const Button = styled.button`
    font-size: 16px;
    color: #171D1F;
    font-weight: 600;
    padding: 8px 16px;
    border: none;
    background-color: #DAFF7E;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`