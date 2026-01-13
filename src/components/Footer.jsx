import React from "react";
import { useTranslation } from "react-i18next";
import { FaReact } from "react-icons/fa";
import { FooterContainer, ReactBadge } from "../styles/FooterStyle";

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <ReactBadge>
                <FaReact size={20} />
                {t('built_with')}
            </ReactBadge>
            <p>{t('footer_text')}</p>
            <p>&copy; {currentYear} - {t('hero_title')}</p>
        </FooterContainer>
    );
};

export default Footer;
