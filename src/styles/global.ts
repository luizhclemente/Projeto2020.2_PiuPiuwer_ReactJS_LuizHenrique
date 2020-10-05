import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
    --color-background-feed: rgba(196, 196, 196, 0.3);
    --color-background-input: #D6D6D6;
    --color-background-login: #E5E5E5;
    --color-button: #FB4C64;
    --color-login-button: #0000FF;
    --color-login-button-selected: #0000C7;
    --color-text-titles: linear-gradient(180deg, #8383FF 0%, #FFC2CB 100%);
    --color-text-normal: #9197A3;
    --color-search-bar: #C4C4C4;
    
    font-family: Montserrat;
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    /* faz com que a página ocupe sempre a altura total da tela */
    height: 100vh;
  }

  body {
    background: var(--color-background);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 700px) {
    :root {
      font-size: 65%
    }
  }
`;