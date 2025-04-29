import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        /* Cores principais */
        --main-color: #4F92F7;
        --primary-text-color: #fff;
        --secondary-text-color: #000;
        --secondary-color: #784FF7;
        --tertiary-color: #000;
        --quaternary-color: #4F5DF7;
        --quinary-color: #AF4FF7;
        --senary-color: #2E3EFA;
        
        /* Cores de fundo */
        --bg-primary: #ffffff;
        --bg-secondary: #f5f5f5;
        --bg-accent: #4f5df78a;
        
        /* Cores de texto */
        --text-primary: #333333;
        --text-secondary: #666666;
        --text-light: #ffffff;
        
        /* Breakpoints */
        --mobile: 480px;
        --tablet: 768px;
        --desktop: 1024px;
        --large-desktop: 1200px;
        
        /* Spacing */
        --spacing-xs: 0.5rem;
        --spacing-sm: 1rem;
        --spacing-md: 1.5rem;
        --spacing-lg: 2rem;
        --spacing-xl: 3rem;
        
        /* Border radius */
        --radius-sm: 0.5rem;
        --radius-md: 1rem;
        --radius-lg: 1.5rem;
        --radius-circle: 50%;
        
        /* Shadows */
        --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
        --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
        --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
        
        /* Transitions */
        --transition-fast: 0.2s ease;
        --transition-normal: 0.3s ease;
        --transition-slow: 0.5s ease;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        scroll-behavior: smooth;
        
        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    body {
        font-family: 'Inter', 'Roboto', sans-serif;
        line-height: 1.6;
        color: var(--text-primary);
        background-color: var(--bg-primary);
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: var(--spacing-sm);
    }

    p {
        margin-bottom: var(--spacing-sm);
    }

    a {
        text-decoration: none;
        color: var(--main-color);
        transition: var(--transition-fast);
        
        &:hover {
            color: var(--secondary-color);
        }
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    /* Cor da barra de rolagem */
    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--senary-color);
        border-radius: 1rem;
    }

    ::-webkit-scrollbar-track {
        background: var(--quaternary-color);
    }
`;
