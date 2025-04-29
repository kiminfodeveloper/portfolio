import { useState } from "react";
import logo from "../assets/logo.png";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { LogoImage, NavbarContainer, StyledLink, NavLinks, MenuButton } from "../styles/NavbarStyle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContainer>
            <LogoImage src={logo} alt="logo" />
            <MenuButton onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </MenuButton>
            <NavLinks $isOpen={isOpen}>
                <StyledLink to="/" onClick={() => setIsOpen(false)}>
                    Home <FaHome />
                </StyledLink>
            </NavLinks>
        </NavbarContainer>
    );
};

export default Navbar;
