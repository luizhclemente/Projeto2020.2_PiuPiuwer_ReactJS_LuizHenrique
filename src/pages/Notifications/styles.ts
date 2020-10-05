import styled from 'styled-components';

export const NotificationDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--color-background-login);

  h1 {
    background: -webkit-linear-gradient( 180deg, #5b5bff, #FB4C64);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`