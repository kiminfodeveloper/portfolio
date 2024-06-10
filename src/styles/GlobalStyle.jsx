import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --main-color: #4F92F7;
        --primary-text-color: #fff;
        --secondary-text-color: #000;
        --secondary-color: #784FF7;
        --tertiary-color: #000;
        --quaternary-color: #4F5DF7;
        --quinary-color: #AF4FF7;
        --senary-color: #2E3EFA;
    }
    /* Cor da barra de rolagem */
    ::-webkit-scrollbar {
        width: 5px; /* Largura da barra de rolagem */
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--senary-color); /* Cor do indicador da barra de rolagem */
        border-radius: 1rem;
    }

    ::-webkit-scrollbar-track {
        background: var(--quaternary-color); /* Cor do fundo da barra de rolagem */
    }
`;
