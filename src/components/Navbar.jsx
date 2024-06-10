import logo from "../assets/logo.png";
import { FaHome } from "react-icons/fa";
import { LogoImage, NavbarContainer, StyledLink } from "../styles/NavbarStyle";

const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoImage src={logo} alt="logo" />
            <StyledLink to="/">
                Home <FaHome />
            </StyledLink>
        </NavbarContainer>
    );
};

export default Navbar;
