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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
body , h1, h2 , h3, h4, h5, h6, p, a  {
    font-family: 'Montserrat', sans-serif;
}
body {
  margin: 0;
    padding: 0;
    background-color: #FEF7FF;
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

#nprogress{
  height: 100vh !important;
  .spinner{
    top:0;
    right: 0;
    width: 100% !important;
    height: 100vh !important;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #33333333;
    .spinner-icon{
      width: 60px !important;
      height: 60px !important;
    }
  }
}
`;
export default GlobalStyle;