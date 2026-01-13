import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 2rem;
    background: var(--bg-secondary);
    border-top: 1px solid var(--main-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    margin-top: auto;
    
    box-shadow: 0 -5px 20px rgba(0, 255, 255, 0.05);

    p {
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin: 0;
    }

    strong {
        color: var(--main-color);
    }
`;

export const ReactBadge = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(0, 255, 255, 0.1);
    border: 1px solid var(--main-color);
    border-radius: 2rem;
    color: var(--main-color);
    font-weight: bold;
    font-size: 0.8rem;
    
    svg {
        animation: spin 10s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
