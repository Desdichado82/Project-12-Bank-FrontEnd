import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* Reset styles */
:root {
  --font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
  --font-color: #2c3e50;
  --accent-color: #00bc77;
  --background-dark: #12002b;
  --background-light: #fff;
}

html {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font-color);
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}



.bg-dark {
  background-color: #12002b;
}

`;

export default GlobalStyles;