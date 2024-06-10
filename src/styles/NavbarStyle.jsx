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
`;

export const LogoImage = styled.img`
    padding: 0.7rem;
    width: 100px;
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
    &:hover {
        filter: drop-shadow(0 0 0.7rem #fff);
        background-color: var(--quaternary-color);
    }
`;
