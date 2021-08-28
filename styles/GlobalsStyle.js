import { createGlobalStyle } from "styled-components";
const Poppins = "'Poppins', sans - serif";
const Roboto = "'Roboto', sans - serif";

export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
    titleColor: "blue"
}

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
    titleColor: "red"
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&display=swap');
body , h1, h2 , h3, h4, h5, h6, p, a  {
    margin: 0;
    padding: 0;
    font-family: ${Roboto};
    background-color: ${({ theme }) => theme.body};
}
*{
    box-sizing: border-box;
    transition: .3s;
}
ul, li {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
a , a:hover {
    color: black;
    text-decoration: none;
}
`;
export default GlobalStyle;
