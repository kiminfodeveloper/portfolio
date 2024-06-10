import styled, { keyframes } from "styled-components";

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

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const HomeContent = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #4f5df78a;
    margin-top: 1rem;
    padding-bottom: 1rem;
`;

export const ContainerImage = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(45deg, #784ff7, #4fc7f7);
    background-size: 200% 200%;
    transition: 1s;
    animation: ${GradientAnimation} 4s ease infinite;
`;

export const ImageProfile = styled.img`
    width: 175px;
    border-radius: 50%;
`;

export const LinkedinButton = styled.a`
    text-decoration: none;
    color: var(--primary-text-color);
    gap: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    width: 150px;
    height: 35px;
    background-color: var(--senary-color);
    margin-top: 24%;
    cursor: pointer;
    position: absolute;

    &:hover {
        background-color: #0a66c2;
    }
`;
export const GithubButton = styled.a`
    text-decoration: none;
    color: var(--primary-text-color);
    gap: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    width: 150px;
    height: 35px;
    background-color: var(--tertiary-color);
    margin-top: 18%;
    cursor: pointer;
    position: absolute;
    &:hover {
        background-color: #0d1117;
    }
`;

export const ContainerName = styled.div`
    margin: 1rem;
`;

export const NameText = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    background-image: linear-gradient(45deg, #784ff7, #4fc7f7);
    background-size: 200% 200%;
    height: 3rem;
    width: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.7rem;
`;

export const ContainerButtons = styled.div`
    display: flex;
    gap: 1rem;
`;
export const ButtonProfile = styled.button`
    text-transform: uppercase;
    width: 150px;
    margin-top: 1rem;
    height: 2.5rem;
    font-size: 0.7rem;
    font-weight: bold;
    color: var(--primary-text-color);
    border-radius: 0.7rem;
    background-image: linear-gradient(45deg, #784ff7, #4fc7f7);
    background-size: 200% 200%;
    border: 1px solid var(--primary-text-color);
    animation: ${GradientAnimation} 4s ease infinite;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
        filter: drop-shadow(0 0 0.7rem #fff);
    }
`;

// Estiliza o mouse
export const MouseLight = styled.div`
    opacity: 0;
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #2e3efa8f;
    border-radius: 50%;
    filter: blur(30px) drop-shadow(0 0 5px #2e3efa);

    pointer-events: none;
    display: ${(props) => (props.show ? "block" : "none")};
    /* Definindo a posição com base nas coordenadas passadas */
    left: ${(props) => props.x - 25}px;
    top: ${(props) => props.y - 25}px;
    transition: left 0.1s ease, top 0.1s ease; /* Efeito de transição suave */
    &:hover {
        filter: drop-shadow(0 0 20px #2e3efa); /* Ajuste conforme necessário */
    }
`;

export const ContainerStatus = styled.div`
    position: relative;
    cursor: none;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 500px;
    height: 350px;
    border-radius: 1rem;
    padding: 2rem;
    gap: 1rem;
    color: var(--secondary-text-color);
    background-color: #ffffffbd;
    transition: filter 0.3s; /* Adicionamos uma transição para suavizar o efeito */
    &:hover ${MouseLight} {
        display: block;
        opacity: 1;
    }
`;

export const TittleStatus = styled.h4`
    font-size: 2rem;
    color: var(--main-color);
    text-shadow: 2px 2px 3px #000;
`;

export const DescriptionStatus = styled.p`
    font-size: 1.2rem;
    height: 100px;
`;

export const ProgressBar = styled.div`
    width: 100%;
    background-color: #ddd;
    height: 20px;
    border-radius: 10px;
    margin-top: 10px;
`;

export const ProgressFill = styled.div`
    background-image: linear-gradient(30deg, #70ffba, #28b263);
    background-size: 200% 200%;
    height: 100%;
    border-radius: 10px;
    animation: ${GradientAnimation} 4s ease infinite;
    width: ${({ $percentage }) =>
        $percentage}%; // Usando $percentage em vez de percentage
`;

export const LinkProject = styled.a`
    text-decoration: none;
    color: white;
    width: 150px;
    height: 40px;
    display: flex;
    border-radius: 1rem;
    align-items: center;
    justify-content: center;
    background: linear-gradient(45deg, #784ff7, #4fc7f7);
    background-size: 200% 200%;
    text-decoration: none;
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
export const ContainerExpSkills = styled.div`
    display: flex;
    margin: 1rem;
    gap: 2rem;
`;

export const ContainerExpProf = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 1rem;
    border-radius: 1rem;
    gap: 0.5rem;
    background-color: #4f5df78a;
`;

export const TitleExpSkills = styled.h4`
    display: flex;
    gap: 0.5rem;
    font-size: 1.5rem;
`;

export const DetailsEvent = styled.details`
    list-style: none;
    width: 100%;
    & > summary {
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        font-size: 1rem;
        font-weight: bold;
        width: 100%;
        height: 30px;
        border-radius: 1rem;
        background-image: linear-gradient(45deg, #784ff7, #4fc7f7);
        background-size: 200% 200%;
        animation: ${GradientAnimation} 4s ease infinite;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
            filter: drop-shadow(0 0 0.7rem #fff);
        }
    }
`;

export const ContainerExpSkillsDescription = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    gap: 1rem;
    font-size: 1rem;
    margin-left: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    width: 90%;
    color: var(--secondary-text-color);
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    background-color: #ffffffbd;
    & > p {
        & > span {
            font-weight: bold;
        }
    }
`;

export const PositionJob = styled.p`
    font-weight: bold;
`;
