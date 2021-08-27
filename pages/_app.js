import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/GlobalsStyle";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
