import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "styled-components"
import GlobalStyle, { darkTheme, lightTheme } from "../styles/GlobalsStyle"
import Header from "../Containers/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header>
        <button className="btn" onClick={toggleTheme}>
          <FontAwesomeIcon  icon={theme == "light" ? faMoon : faSun} />
        </button>
      </Header>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
