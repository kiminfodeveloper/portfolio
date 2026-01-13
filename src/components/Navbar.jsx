import { useState } from "react";
import logo from "../assets/logo.png";
import { FaHome, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { LogoImage, NavbarContainer, StyledLink, NavLinks, MenuButton, LanguageButton } from "../styles/NavbarStyle";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'pt' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <NavbarContainer>
            <LogoImage src={logo} alt="logo" />
            <MenuButton onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </MenuButton>
            <NavLinks $isOpen={isOpen}>
                <StyledLink to="/" onClick={() => setIsOpen(false)}>
                    {t('home')} <FaHome />
                </StyledLink>
                <LanguageButton onClick={toggleLanguage}>
                    <FaGlobe /> {i18n.language === 'en' ? 'Português' : 'English'}
                </LanguageButton>
            </NavLinks>
        </NavbarContainer>
    );
};

export default Navbar;
