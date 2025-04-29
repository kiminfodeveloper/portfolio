import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaCode, FaBriefcase } from "react-icons/fa";
import {
  MainContainer,
  HomeContent,
  ProfileSection,
  ContainerImage,
  ImageProfile,
  SocialButtons,
  LinkedinButton,
  GithubButton,
  ContainerName,
  NameText,
  SkillsGrid,
  ButtonProfile,
  StatusSection,
  MouseLight,
  TittleStatus,
  DescriptionStatus,
  ProgressBar,
  ProgressFill,
  LinkProject,
  ExperienceSection,
  ContainerExpProf,
  TitleExpSkills,
  DetailsEvent,
  ContainerExpSkillsDescription,
  PositionJob,
} from "../styles/HomeStyle";
import profileImage from "../assets/kevyn.jpeg";

const Home = () => {
  const [statusInfo, setStatusInfo] = useState({
    title: "Selecione uma habilidade",
    description: "Clique em uma das habilidades para ver mais detalhes",
    percentage: 0,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMouseLight, setShowMouseLight] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setShowMouseLight(true);
  const handleMouseLeave = () => setShowMouseLight(false);

  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 75 },
    { name: "Sass", percentage: 70 },
    { name: "Styled", percentage: 75 },
    { name: "Figma", percentage: 65 },
  ];

  const experiences = [
    {
      company: "Giga Byte",
      position: "Desenvolvedor Frontend",
      period: "2022 - Presente",
      description: "Desenvolvimento de interfaces modernas e responsivas utilizando React e Styled Components.",
    },
    {
      company: "Microlins",
      position: "Instrutor de Informática",
      period: "2021 - 2022",
      description: "Ministração de aulas de programação e desenvolvimento web para alunos iniciantes.",
    },
  ];

  const handleSkillClick = (skill) => {
    setStatusInfo({
      title: skill.name,
      description: `Experiência em ${skill.name} com foco em desenvolvimento web moderno e responsivo.`,
      percentage: skill.percentage,
    });
  };

  return (
    <MainContainer>
      <HomeContent>
        <ProfileSection>
          <ContainerImage>
            <ImageProfile src={profileImage} alt="Profile" />
          </ContainerImage>
          <ContainerName>
            <NameText>Seu Nome</NameText>
            <SkillsGrid>
              {skills.map((skill) => (
                <ButtonProfile
                  key={skill.name}
                  onClick={() => handleSkillClick(skill)}
                >
                  {skill.name}
                </ButtonProfile>
              ))}
            </SkillsGrid>
          </ContainerName>
          <SocialButtons>
            <LinkedinButton
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </LinkedinButton>
            <GithubButton
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </GithubButton>
          </SocialButtons>
        </ProfileSection>

        <StatusSection
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MouseLight
            show={showMouseLight}
            x={mousePosition.x}
            y={mousePosition.y}
          />
          <TittleStatus>{statusInfo.title}</TittleStatus>
          <DescriptionStatus>{statusInfo.description}</DescriptionStatus>
          <ProgressBar>
            <ProgressFill $percentage={statusInfo.percentage} />
          </ProgressBar>
          <LinkProject href="#" target="_blank" rel="noopener noreferrer">
            Ver Projetos
          </LinkProject>
        </StatusSection>
      </HomeContent>

      <ExperienceSection>
        <ContainerExpProf>
          <TitleExpSkills>
            <FaCode /> Experiência
          </TitleExpSkills>
          {experiences.map((exp, index) => (
            <DetailsEvent key={index}>
              <summary>{exp.company}</summary>
              <ContainerExpSkillsDescription>
                <PositionJob>{exp.position}</PositionJob>
                <p>
                  <span>Período:</span> {exp.period}
                </p>
                <p>
                  <span>Descrição:</span> {exp.description}
                </p>
              </ContainerExpSkillsDescription>
            </DetailsEvent>
          ))}
        </ContainerExpProf>

        <ContainerExpProf>
          <TitleExpSkills>
            <FaBriefcase /> Formação
          </TitleExpSkills>
          <DetailsEvent>
            <summary>Udemy</summary>
            <ContainerExpSkillsDescription>
              <p>
                <span>Curso:</span> Desenvolvimento Web Completo
              </p>
              <p>
                <span>Conteúdo:</span> HTML, CSS, JavaScript, Bootstrap, ReactJS
              </p>
              <p>
                <span>Conclusão:</span> 2023
              </p>
            </ContainerExpSkillsDescription>
          </DetailsEvent>
        </ContainerExpProf>
      </ExperienceSection>
    </MainContainer>
  );
};

export default Home;
