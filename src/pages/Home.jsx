import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [selectedSkill, setSelectedSkill] = useState(null);
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

  const statusInfo = selectedSkill ? {
    title: selectedSkill.name,
    description: `${t('skill_experience_prefix')}${selectedSkill.name}${t('skill_experience_suffix')}`,
    percentage: selectedSkill.percentage,
  } : {
    title: t('select_skill'),
    description: t('skill_details_prompt'),
    percentage: 0,
  };

  const experiences = [
    {
      company: "Giga Byte",
      position: t('role_frontend'),
      period: "2022 - Present", 
      description: t('frontend_desc'),
    },
    {
      company: "Microlins",
      position: t('role_instructor'),
      period: "2021 - 2022",
      description: t('instructor_desc'),
    },
  ];

  return (
    <MainContainer>
      <HomeContent>
        <ProfileSection>
          <ContainerImage>
            <ImageProfile src={profileImage} alt="Profile" />
          </ContainerImage>
          <ContainerName>
            <NameText>{t('hero_title')}</NameText>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              {t('hero_subtitle')}
            </p>
            <SkillsGrid>
              {skills.map((skill) => (
                <ButtonProfile
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
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
            {t('view_projects')}
          </LinkProject>
        </StatusSection>
      </HomeContent>

      <ExperienceSection>
        <ContainerExpProf>
          <TitleExpSkills>
            <FaCode /> {t('experience')}
          </TitleExpSkills>
          {experiences.map((exp, index) => (
            <DetailsEvent key={index}>
              <summary>{exp.company}</summary>
              <ContainerExpSkillsDescription>
                <PositionJob>{exp.position}</PositionJob>
                <p>
                  <span>{t('period')}:</span> {exp.period}
                </p>
                <p>
                  <span>{t('description')}:</span> {exp.description}
                </p>
              </ContainerExpSkillsDescription>
            </DetailsEvent>
          ))}
        </ContainerExpProf>

        <ContainerExpProf>
          <TitleExpSkills>
            <FaBriefcase /> {t('education')}
          </TitleExpSkills>
          <DetailsEvent>
            <summary>Udemy</summary>
            <ContainerExpSkillsDescription>
              <p>
                <span>{t('course')}:</span> {t('course_web')}
              </p>
              <p>
                <span>{t('content')}:</span> {t('course_content')}
              </p>
              <p>
                <span>{t('completion')}:</span> 2023
              </p>
            </ContainerExpSkillsDescription>
          </DetailsEvent>
        </ContainerExpProf>
      </ExperienceSection>
    </MainContainer>
  );
};

export default Home;
