import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    :root {
        --bg-dark: #333A58;
        --bg-dark-light: #50556E;
        --bg-red: #FF3764;
        --bg-light: #fff;
    }
`;
export const theme = {
  colors: {
    main: "#15141A",
    main_dark_background: "#2A3050",
    dark_light_background: "#3B3F5D",
    dark_light_hover_background: "#484c63",
    dark_lighter_background: "#4F5770",
    red_background: "#FF3764",
    light_background: "#fff",
  },
  fontSizes: {
    small: "1em",
    medium: "1.5em",
    large: "3em",
    x_large: "5rem",
  },
};
