import styled from "styled-components";

const ContainerWrapper = styled.div`
width: 100%;
.containers{
    padding: 0;
}
.home_container {
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    background-image: url("https://images.unsplash.com/photo-1480561807109-e2aa33f23be8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80");
    background-size: cover;
    background-attachment: fixed;
    h2{
    position: relative;
    font-size: 8vw;
    color: #252839;
    -webkit-text-stroke: 0.1vw crimson;
    text-transform: uppercase;
}
h2::before{
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: crimson;
    -webkit-text-stroke: 0vw crimson;
    border-right: 2px solid crimson;
    overflow: hidden;
    animation: animate 6s linear infinite;
}
 @keyframes animate {
     0%,10%,100% {
         width: 0;
     }
     70%,90%{
         width: 100%;
     }
 }
}
.container_content {
    padding: 15px;
}
.down {
    left: 50%;
    animation: animatedown 2s linear infinite;
}

@keyframes animatedown {
     0%  {
         bottom: 100px;
     }
      100%  {
         bottom: 60px;
     }
     
 }
`;
export default ContainerWrapper;
