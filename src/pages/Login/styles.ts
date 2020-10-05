import styled from 'styled-components';

export const LoginDiv = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 50px;
    background: var(--color-background-login);

    width: 42rem; 
    height: 33rem;

    box-shadow: 7px 7px 4px rgba(0,0,0, 0.25);
    
    border-radius: 0 20px 0 20px;
  }

  img {
    width: 10rem;

    padding-top: 30px;
    margin-bottom: 20px;
  }

  h1 {
    font-weight: 400;
  }

  span {
    background: -webkit-linear-gradient( 180deg, #5b5bff, #FB4C64);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .inputs {
    /* padding-top: 50px; */
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    /* padding-bottom: 30px; */
  }

  p {
    color: red;
    font-weight: 600;
    font-size: 1.5rem;

    padding-bottom: 30px;
    padding-top: 30px;

  }

  .password-register-text {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 20px;

    font-size: 1.2rem;
    font-weight: 600;
  }

  .password-register-text > span {
    margin-top: 5px;
  }

  .password-register-text span:first-child {
    margin-top: 0;
  }

  @media (min-width: 700px) {
    
  }

`