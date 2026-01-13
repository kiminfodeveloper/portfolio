import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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

export const MainContainer = styled.main`
  min-height: 100vh;
  padding: 2rem;
  background: radial-gradient(circle at center, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  color: var(--primary-text-color);
  animation: ${FadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ProfileSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const NeonPulse = keyframes`
  0% { box-shadow: 0 0 10px var(--main-color); }
  50% { box-shadow: 0 0 25px var(--main-color), 0 0 50px var(--secondary-color); }
  100% { box-shadow: 0 0 10px var(--main-color); }
`;

export const ContainerImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--main-color);
  animation: ${NeonPulse} 3s infinite;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: var(--secondary-color);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

export const ImageProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const LinkedinButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #0077b5;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
  white-space: nowrap;

  &:hover {
    background: #006399;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const GithubButton = styled(LinkedinButton)`
  background: #333;

  &:hover {
    background: #24292e;
  }
`;

export const ContainerName = styled.div`
  text-align: center;
  width: 100%;
`;

export const NameText = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, var(--main-color), var(--secondary-color));
  background-size: 200% 200%;
  animation: ${GradientAnimation} 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.8rem;
  width: 100%;
  max-width: 600px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
`;

export const ButtonProfile = styled.button`
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
  }
`;

export const StatusSection = styled.section`
  flex: 1;
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const MouseLight = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, var(--main-color) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
`;

export const TittleStatus = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--main-color);

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const DescriptionStatus = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

export const ProgressFill = styled.div`
  width: ${props => props.$percentage}%;
  height: 100%;
  background: linear-gradient(90deg, var(--main-color), var(--secondary-color));
  border-radius: 4px;
  transition: width 0.5s ease;
`;

export const LinkProject = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: var(--main-color);
  color: #1a1a1a;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ExperienceSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ContainerExpProf = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const TitleExpSkills = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--main-color);

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

export const DetailsEvent = styled.details`
  margin-bottom: 1.5rem;
  cursor: pointer;

  summary {
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    margin-bottom: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;

    summary {
      font-size: 1rem;
      padding: 0.8rem;
    }
  }
`;

export const ContainerExpSkillsDescription = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;

  p {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    word-break: break-word;

    span {
      color: var(--main-color);
      font-weight: 600;
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

export const PositionJob = styled.h4`
  font-size: 1.1rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
`;
