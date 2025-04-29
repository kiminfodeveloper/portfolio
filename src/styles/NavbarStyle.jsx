import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const GradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const NavbarContainer = styled.nav`
    display: flex;
    background-color: var(--senary-color);
    width: 100%;
    height: 90px;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--spacing-md);
    position: relative;

    @media (max-width: 768px) {
        height: 70px;
        padding: 0 var(--spacing-sm);
    }
`;

export const LogoImage = styled.img`
    padding: 0.7rem;
    width: 100px;

    @media (max-width: 768px) {
        width: 80px;
        padding: 0.5rem;
    }
`;

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);

    @media (max-width: 768px) {
        display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        flex-direction: column;
        background-color: var(--senary-color);
        padding: var(--spacing-sm);
        gap: var(--spacing-sm);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
`;

export const StyledLink = styled(Link)`
    width: 100px;
    height: 40px;
    display: flex;
    border-radius: 1rem;
    align-items: center;
    justify-content: center;
    background: linear-gradient(45deg, #784ff7, #4fc7f7);
    background-size: 200% 200%;
    text-decoration: none;
    color: var(--primary-color);
    font-size: 1rem;
    margin-right: 1rem;
    gap: 0.3rem;
    animation: ${GradientAnimation} 2s ease infinite;
    transition: 0.5s;

    @media (max-width: 768px) {
        width: 100%;
        height: 35px;
        margin-right: 0;
        font-size: 0.9rem;
    }

    &:hover {
        filter: drop-shadow(0 0 0.7rem #fff);
        background-color: var(--quaternary-color);
    }
`;

export const MenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: var(--primary-text-color);
    font-size: 1.5rem;
    cursor: pointer;
    padding: var(--spacing-xs);

    @media (max-width: 768px) {
        display: block;
    }
`;
