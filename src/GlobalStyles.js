import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
*, *:before, *:after {
    box-sizing: inherit;
}

ul,li, h1, h2, h3, h4, h5, h6, p, button {
    margin: 0;
    padding: 0;
}
ul { 
    list-style: none; 
}
button { 
    background: transparent; 
    border: 0; 
    outline: 0; 
}
body {
    background: rgb(104,69,149);
    background: linear-gradient(0deg, rgba(104,69,149,1) 0%, rgba(255,255,255,1) 60%); 
    overscroll-behavior: none;
    width: 100%;
    background: cover;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
}
#app {
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 1rem;

`