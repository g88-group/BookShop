import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "styled-components"
import GlobalStyle, { darkTheme, lightTheme } from "../styles/GlobalsStyle"
import Header from "../Containers/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { Provider } from "react-redux";
import store from "../redux/store";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return <Provider store={store}>
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header toggle={toggleTheme} theme={theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
}

export default MyApp
