import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }
    body {
      margin: 0;
    }
    main {
      background-image: url(/pattern.png);
      padding-top: 240px;
      background-repeat: no-repeat;
    }
    fieldset {
      border: none;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
`