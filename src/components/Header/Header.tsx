import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "1vh 1vw",
        height: "5vh",
        backgroundColor: "#164194",
      }}
    >
      <a href="https://www.proiot.com.br/" target="_blank" rel="noreferrer">
        <img
          src={Logo}
          alt="Logo"
          style={{
            height: "4vh",
          }}
        />
      </a>
    </header>
  );
};

export default Header;
