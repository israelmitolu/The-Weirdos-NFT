import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, ::before, ::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Rubik, sans-serif;
        overflow-x: hidden ;
    }
    
    h1,h2,h3,h4{
        margin: 0;
        padding: 0;
    }
    a{
        color: inherit;
        text-decoration: none;
    }

    ul{
        list-style: none;
    }


`;

export default GlobalStyles;
