import styled from 'styled-components';

export const InputAreaDiv = styled.div`

  position: relative;
  padding-top: 20px;

  &:focus-within::after {
    width: calc(100% - 1.6rem);
    height: 2px;
    content: '';
    background: -webkit-linear-gradient( 180deg, #5b5bff, #FB4C64);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  label {
    position: absolute;
    margin-left: 15px;
    margin-top: 4px;

    background: -webkit-linear-gradient( 180deg, #5b5bff, #FB4C64);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: 1.2rem;
    font-weight: 600;
  }

  input {
    width: 35rem;
    height: 5rem;
    background: var(--color-background-input);
    border: none;
    border-radius: 0 20px 0 20px;
    outline: none;
    padding: 15px 7px 0 15px;

    font-family: Montserrat;
  }
`