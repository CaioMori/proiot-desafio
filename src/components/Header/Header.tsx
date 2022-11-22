import Logo from "../../assets/images/logo.svg";
import HeaderContainer, { ImageBase } from "./HeaderBase";

const Header = () => {
  return (
    <header style={HeaderContainer}>
      <a href="https://www.proiot.com.br/" target="_blank" rel="noreferrer">
        <img src={Logo} alt="Logo" style={ImageBase} />
      </a>
    </header>
  );
};

export default Header;
