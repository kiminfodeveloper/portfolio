import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          select_skill: "Select a skill",
          skill_details_prompt: "Click on one of the skills to see more details.",
          skill_experience_prefix: "Experience in ",
          skill_experience_suffix: " with a focus on modern and responsive web development.",
          view_projects: "View Projects",
          experience: "Experience",
          education: "Education",
          period: "Period",
          description: "Description",
          course: "Course",
          content: "Content",
          completion: "Completion",
          home: "Home",
          role_frontend: "Frontend Developer",
          role_instructor: "IT Instructor",
          frontend_desc: "Development of modern and responsive interfaces using React and Styled Components.",
          instructor_desc: "Teaching programming and web development classes to beginner students.",
          course_web: "Complete Web Development",
          course_content: "HTML, CSS, JavaScript, Bootstrap, ReactJS",
          hero_title: "React Skill Showcase",
          hero_subtitle: "A High-Performance, Interactive Portfolio developed with React.js",
          built_with: "Built with React & Styled Components",
          footer_text: "This project serves as a demonstration of technical skills in React ecosystem."
        }
      },
      pt: {
        translation: {
          select_skill: "Selecione uma habilidade",
          skill_details_prompt: "Clique em uma das habilidades para ver mais detalhes.",
          skill_experience_prefix: "Experiência em ",
          skill_experience_suffix: " com foco em desenvolvimento web moderno e responsivo.",
          view_projects: "Ver Projetos",
          experience: "Experiência",
          education: "Formação",
          period: "Período",
          description: "Descrição",
          course: "Curso",
          content: "Conteúdo",
          completion: "Conclusão",
          home: "Início",
          role_frontend: "Desenvolvedor Frontend",
          role_instructor: "Instrutor de Informática",
          frontend_desc: "Desenvolvimento de interfaces modernas e responsivas utilizando React e Styled Components.",
          instructor_desc: "Ministração de aulas de programação e desenvolvimento web para alunos iniciantes.",
          course_web: "Desenvolvimento Web Completo",
          course_content: "HTML, CSS, JavaScript, Bootstrap, ReactJS",
          hero_title: "Demonstração React",
          hero_subtitle: "Um Portfólio Interativo de Alta Performance desenvolvido com React.js",
          built_with: "Desenvolvido com React & Styled Components",
          footer_text: "Este projeto serve como uma demonstração de habilidades técnicas no ecossistema React."
        }
      }
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
