import { createGlobalStyle } from "styled-components";
const Poppins = "'Poppins', sans - serif";
const Roboto = "'Roboto', sans - serif";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&display=swap');
body , h1, h2 , h3, h4, h5, h6, p, a  {
    margin: 0;
    padding: 0;
    font-family: ${Roboto};
}
`;
export default GlobalStyle;