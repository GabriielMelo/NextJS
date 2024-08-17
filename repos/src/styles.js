import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
html,border-style,#root{
    min-height: 100vh;
}

body{
    background-color: #0D2636;
    font-size: 14px;
    -webkit-font-smoothing: antialised !important;
}

body,input,button {
    color: #222;
    font-size:14px;
    font-family: Arial, Helvetica, sans-serif;
}
button{
    cursor:pointer;
}

`;
