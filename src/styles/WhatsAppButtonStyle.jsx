import styled, { keyframes } from "styled-components";
const gradientAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
`;

export const Wrapper = styled.div`
    z-index: 9999;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #4f92f7, #32cd32);
    background-size: 200% 200%;
    animation: ${gradientAnimation} 1s ease infinite alternate;
`;

export const LinkWhatsApp = styled.a`
    padding-top: 7px;
    font-size: 2rem;
    text-decoration: none;
    color: var(--primary-text-color);
`;
