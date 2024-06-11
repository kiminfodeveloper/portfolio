import React, { useEffect, useState } from "react";
import kevyn from "../assets/kevyn.jpeg";
import {
    ButtonProfile,
    ContainerButtons,
    ContainerExpProf,
    ContainerExpSkills,
    ContainerExpSkillsDescription,
    ContainerImage,
    ContainerName,
    ContainerStatus,
    DescriptionStatus,
    DetailsEvent,
    GithubButton,
    HomeContent,
    ImageProfile,
    LinkedinButton,
    LinkProject,
    MainContainer,
    MouseLight,
    NameText,
    PositionJob,
    ProgressBar,
    ProgressFill,
    TitleExpSkills,
    TittleStatus,
} from "../styles/HomeStyle";
import {
    FaBriefcase,
    FaGithub,
    FaGraduationCap,
    FaLinkedin,
} from "react-icons/fa";

const Home = () => {
    const [statusInfo, setStatusInfo] = useState({
        name: "Kevyn Melo",
        description: "23 Anos | Mogi das Cruzes | SP",
        percentage: "",
        link: "https://github.com/kiminfodeveloper",
    });

    const handleButtonClick = (name, description, percentage, link) => {
        setStatusInfo({
            name,
            description,
            percentage,
            link,
        });
    };

    // Componente pai que gerencia o estado
    const TextManager = () => {
        const [text, setText] = useState("");
        const [index, setIndex] = useState(0);
        const phrases = [
            "Kevyn Melo",
            "",
            "Frontend",
            "",
            "Programador",
            "",
            "Designer",
        ];

        useEffect(() => {
            const timeoutId = setTimeout(() => {
                setText((prevText) => {
                    if (prevText === phrases[index]) {
                        setTimeout(() => {
                            setText("");
                            setIndex(
                                (prevIndex) => (prevIndex + 1) % phrases.length
                            );
                        }, 180); // Espera 2 segundos antes de apagar o texto
                        return prevText;
                    } else if (prevText.length === 0) {
                        return phrases[index].slice(0, prevText.length + 1);
                    } else {
                        return phrases[index].slice(0, prevText.length + 1);
                    }
                });
            }, 100); // Muda a cada 0.5 segundos

            return () => clearTimeout(timeoutId);
        }, [text, index, phrases]);

        return <TextChanger text={text} />;
    };

    // Componente filho que apenas exibe o texto
    const TextChanger = ({ text }) => {
        return <NameText>{text}</NameText>;
    };

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Função para atualizar a posição do mouse
    const updateMousePosition = (ev) => {
        const containerRect = ev.currentTarget.getBoundingClientRect();
        const mouseX = ev.clientX - containerRect.left;
        const mouseY = ev.clientY - containerRect.top;
        setMousePosition({ x: mouseX, y: mouseY });
    };

    return (
        <MainContainer>
            <HomeContent>
                <ContainerImage>
                    <ImageProfile src={kevyn} />
                    <LinkedinButton
                        target="_blank"
                        href="https://www.linkedin.com/in/kevyn-melo-6b99b4176/"
                    >
                        Linkedin <FaLinkedin />
                    </LinkedinButton>
                    <GithubButton
                        target="_blank"
                        href="https://github.com/kiminfodeveloper"
                    >
                        Github <FaGithub />
                    </GithubButton>
                </ContainerImage>

                <ContainerName>
                    <TextManager />
                    <ContainerButtons>
                        <ButtonProfile
                            onClick={() =>
                                handleButtonClick(
                                    "HTML 5",
                                    "Estudo HTML5 desde 2018, comecei a atuar em projetos para ter experiência em 2019.",
                                    90,
                                    "https://github.com/kiminfodeveloper/portfolio_projeto"
                                )
                            }
                        >
                            HTML 5
                        </ButtonProfile>
                        <ButtonProfile
                            onClick={() =>
                                handleButtonClick(
                                    "CSS 3",
                                    "Sempre gostei de designer, então me adaptei muti fácil aos estilos do CSS.",
                                    90,
                                    "https://github.com/kiminfodeveloper/light-dark-mode"
                                )
                            }
                        >
                            CSS 3
                        </ButtonProfile>
                        <ButtonProfile
                            onClick={() =>
                                handleButtonClick(
                                    "JavaScript",
                                    "Atualmente tenho exercitado muito o desenvolvimento em Javascript.",
                                    80,
                                    "https://github.com/kiminfodeveloper/ToDo_JS"
                                )
                            }
                        >
                            JavaScript
                        </ButtonProfile>
                    </ContainerButtons>
                    <ContainerButtons>
                        <ButtonProfile
                            onClick={() =>
                                handleButtonClick(
                                    "React",
                                    "Trabalhei com desenvolvimento em React no ano de 2022, apenas React e CSS Modules.",
                                    70,
                                    "https://github.com/kiminfodeveloper/loja-de-carros-novo"
                                )
                            }
                        >
                            React
                        </ButtonProfile>
                        <ButtonProfile
                            onClick={() =>
                                handleButtonClick(
                                    "PHP",
                                    "Recentemente enfrentei um desafio em um projeto no qual precisei me adaptar ao PHP.",
                                    50,
                                    "https://quitefluency.com.br/database/form.html"
                                )
                            }
                        >
                            PHP
                        </ButtonProfile>
                        <ButtonProfile
                            onClick={() =>
                                handleButtonClick(
                                    "Bootstrap",
                                    "Sempre utilizei desde o começo, gosto muito da praticidade que oferece, simplificando meus projetos e encurtando o HTML e CSS puro.",
                                    90,
                                    "https://github.com/kiminfodeveloper/e-commerce"
                                )
                            }
                        >
                            Bootstrap
                        </ButtonProfile>
                    </ContainerButtons>
                    <ContainerButtons>
                        <ButtonProfile
                            onClick={() =>
                                handleButtonClick(
                                    "Sass",
                                    "Atuei em um sistema de login com Sass, foi uma experiência incrível.",
                                    60,
                                    "https://github.com/kiminfodeveloper"
                                )
                            }
                        >
                            Sass
                        </ButtonProfile>
                        <ButtonProfile
                            onClick={() =>
                                handleButtonClick(
                                    "StyledComponents",
                                    "Este site que você está acessando foi todo estilizado em Styled Components.",
                                    70,
                                    "https://github.com/kiminfodeveloper"
                                )
                            }
                        >
                            StyledComponents
                        </ButtonProfile>
                        <ButtonProfile
                            onClick={() =>
                                handleButtonClick(
                                    "VSCODE",
                                    "Uso o VSCODE para efetuar os códigos e um gitub normalmente para subir os projetos.",
                                    90,
                                    "https://github.com/kiminfodeveloper"
                                )
                            }
                        >
                            VSCODE
                        </ButtonProfile>
                    </ContainerButtons>
                    <ContainerButtons>
                        <ButtonProfile
                            onClick={() =>
                                handleButtonClick(
                                    "Figma",
                                    "Sigo a risca projetos do Figma para os clientes, e também faço a criação do zero de proejetos no Figma.",
                                    70,
                                    "https://github.com/kiminfodeveloper"
                                )
                            }
                        >
                            Figma
                        </ButtonProfile>
                        <ButtonProfile
                            onClick={() =>
                                handleButtonClick(
                                    "Axios",
                                    "Utilizo a lib axios para fazer requisições com API nos projetos em React.",
                                    45,
                                    "https://github.com/kiminfodeveloper"
                                )
                            }
                        >
                            Axios
                        </ButtonProfile>
                        <ButtonProfile
                            onClick={() =>
                                handleButtonClick(
                                    "MARKDOWN",
                                    "Sei estruturar o readme.md de um projeto, se for necessário para exemplificar o git para futuros desenvolvedores.",
                                    90,
                                    "https://github.com/kiminfodeveloper"
                                )
                            }
                        >
                            MARKDOWN
                        </ButtonProfile>
                    </ContainerButtons>
                </ContainerName>
                <ContainerStatus onMouseMove={updateMousePosition}>
                    <MouseLight x={mousePosition.x} y={mousePosition.y} />
                    <TittleStatus>{statusInfo.name}</TittleStatus>
                    <DescriptionStatus>
                        {statusInfo.description}
                    </DescriptionStatus>
                    <ProgressBar>
                        <ProgressFill $percentage={statusInfo.percentage} />{" "}
                    </ProgressBar>
                    <LinkProject target="_blank" href={statusInfo.link}>
                        PROJETO <FaGithub />
                    </LinkProject>
                </ContainerStatus>
            </HomeContent>
            <ContainerExpSkills>
                <ContainerExpProf>
                    <TitleExpSkills>
                        <FaBriefcase />
                        Experiência Profissional
                    </TitleExpSkills>
                    <DetailsEvent>
                        <summary>GIGA BYTE</summary>
                        <ContainerExpSkillsDescription>
                            <PositionJob>Instrutor</PositionJob>
                            <p>
                                <span>Empresa:</span> Giga Byte Cursos
                                Profissionalizantes
                            </p>
                            <p>
                                <span>Data:</span> 2018 à 2021
                            </p>
                            <p>
                                <span>Descrição:</span> Aulas de informática,
                                programação e desenvolvimento de games.
                            </p>
                        </ContainerExpSkillsDescription>
                    </DetailsEvent>
                    <DetailsEvent>
                        <summary>MICROLINS FERRAZ</summary>
                        <ContainerExpSkillsDescription>
                            <PositionJob>Instrutor Pleno</PositionJob>
                            <p>
                                <span>Empresa:</span> Microlins Ferraz
                            </p>
                            <p>
                                <span>Data:</span> 2021 à 2022
                            </p>
                            <p>
                                <span>Descrição:</span> Aulas de informática,
                                programação, edição de artes e desenvolvimento
                                de games.
                            </p>
                        </ContainerExpSkillsDescription>
                    </DetailsEvent>
                    <DetailsEvent>
                        <summary>NEWGO</summary>
                        <ContainerExpSkillsDescription>
                            <PositionJob>Estágio - Frontend</PositionJob>
                            <p>
                                <span>Empresa:</span> NewGo Tecnologia
                            </p>
                            <p>
                                <span>Data:</span> 6 meses
                            </p>
                            <p>
                                <span>Descrição:</span> Desenvolvimento de
                                aplicações com React, HTML5, CSS3, JavaScript,
                                Java, Sass, Styled-Components.
                            </p>
                        </ContainerExpSkillsDescription>
                    </DetailsEvent>
                    <DetailsEvent>
                        <summary>MICROLINS SUZANO</summary>
                        <ContainerExpSkillsDescription>
                            <PositionJob>Instrutor Pleno</PositionJob>
                            <p>
                                <span>Empresa:</span> Microlins Suzano
                            </p>
                            <p>
                                <span>Data:</span> 10 meses
                            </p>
                            <p>
                                <span>Descrição:</span> Aulas de informática,
                                programação, edição de artes e desenvolvimento
                                de games.
                            </p>
                        </ContainerExpSkillsDescription>
                    </DetailsEvent>
                    <DetailsEvent>
                        <summary>ENSINA MAIS TM</summary>
                        <ContainerExpSkillsDescription>
                            <PositionJob>Instrutor Sênior</PositionJob>
                            <p>
                                <span>Empresa:</span> Ensina Mais - Turminha da
                                Mônica
                            </p>
                            <p>
                                <span>Data:</span> Atual
                            </p>
                            <p>
                                <span>Descrição:</span> Aulas de Robótica,
                                ferramentas do grupo Maker.
                            </p>
                        </ContainerExpSkillsDescription>
                    </DetailsEvent>
                    <DetailsEvent>
                        <summary>KIM INFO TEC</summary>
                        <ContainerExpSkillsDescription>
                            <PositionJob>Desenvolvedor FullStack</PositionJob>
                            <p>
                                <span>Empresa:</span> KIM Info TEC
                            </p>
                            <p>
                                <span>Data:</span> Atual
                            </p>
                            <p>
                                <span>Descrição:</span> Desenvolvimento de
                                sites, lading pages, sistemas e artes de todos
                                os tipos.
                            </p>
                        </ContainerExpSkillsDescription>
                    </DetailsEvent>
                </ContainerExpProf>
                <ContainerExpProf>
                    <TitleExpSkills>
                        <FaGraduationCap />
                        Cursos Profisionalizantes
                    </TitleExpSkills>
                    <DetailsEvent>
                        <summary>HTML, CSS e JavaScript</summary>
                        <ContainerExpSkillsDescription>
                            <PositionJob>UDEMY</PositionJob>
                            <p>
                                <span>Curso:</span> HTML, CSS e JavaScript
                            </p>
                            <p>
                                <span>Data:</span> 2018
                            </p>
                            <p>
                                <span>Descrição:</span> Introdução a
                                desenvolvimento web.
                            </p>
                        </ContainerExpSkillsDescription>
                    </DetailsEvent>
                    <DetailsEvent>
                        <summary>BOOTSTRAP</summary>
                        <ContainerExpSkillsDescription>
                            <PositionJob>UDEMY</PositionJob>
                            <p>
                                <span>Curso:</span> Bootstrap
                            </p>
                            <p>
                                <span>Data:</span> 2020
                            </p>
                            <p>
                                <span>Descrição:</span> Utilizando o framework
                                Bootstrap com maestria.
                            </p>
                        </ContainerExpSkillsDescription>
                    </DetailsEvent>
                    <DetailsEvent>
                        <summary>JavaScript</summary>
                        <ContainerExpSkillsDescription>
                            <PositionJob>UDEMY</PositionJob>
                            <p>
                                <span>Curso:</span> JavaScript
                            </p>
                            <p>
                                <span>Data:</span> 2021
                            </p>
                            <p>
                                <span>Descrição:</span> Desenvolvimento Web com
                                JavaScript e introdução aos framework JS.
                            </p>
                        </ContainerExpSkillsDescription>
                    </DetailsEvent>
                    <DetailsEvent>
                        <summary>Photoshop</summary>
                        <ContainerExpSkillsDescription>
                            <PositionJob>UDEMY</PositionJob>
                            <p>
                                <span>Curso:</span> Adobe CC 2018
                            </p>
                            <p>
                                <span>Data:</span> 2018
                            </p>
                            <p>
                                <span>Descrição:</span> Maestria com Photoshop.
                            </p>
                        </ContainerExpSkillsDescription>
                    </DetailsEvent>
                    <DetailsEvent>
                        <summary>ReactJS</summary>
                        <ContainerExpSkillsDescription>
                            <PositionJob>UDEMY</PositionJob>
                            <p>
                                <span>Curso:</span> React JS
                            </p>
                            <p>
                                <span>Data:</span> 2023
                            </p>
                            <p>
                                <span>Descrição:</span> Utilização do React em
                                aplicações Webs, conhecimentos de useState,
                                useEffect entre outras funcionalidades do
                                ReactJS.
                            </p>
                        </ContainerExpSkillsDescription>
                    </DetailsEvent>
                    <DetailsEvent>
                        <summary>TypeScript</summary>
                        <ContainerExpSkillsDescription>
                            <PositionJob>UDEMY</PositionJob>
                            <p>
                                <span>Curso:</span> TypeScript
                            </p>
                            <p>
                                <span>Data:</span> 2024
                            </p>
                            <p>
                                <span>Descrição:</span> Aprendendo a utilizar o
                                TypeScript para projetos em React e tipagem de
                                dados.
                            </p>
                        </ContainerExpSkillsDescription>
                    </DetailsEvent>
                </ContainerExpProf>
            </ContainerExpSkills>
        </MainContainer>
    );
};

export default Home;
