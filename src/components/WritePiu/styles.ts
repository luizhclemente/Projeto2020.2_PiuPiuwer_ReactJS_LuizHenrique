import styled, { css } from 'styled-components';

interface counterCharact {
  color?: string,
}

export const WritePiuDiv = styled.div`
  background: var(--color-background);
  margin: 10px;
  border-radius: 25px 0;

  padding: 1rem;

  display: flex; 

  .photo-user {
    width: 10rem;
    max-height: 10rem;
    border-radius: 50%;
  }


  .write-piu-and-icons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    margin-left: 10px;
  }

  textarea {
    width: 100%;
    height: 100%;

    margin: 10px 0 10px 0;
    resize: none;

    font-family: Montserrat;
    font-size: 18px;

    border: none;
    outline: none;
    /* padding-left: 2.4rem; */
  }

  .icons-write-piu {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  button {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }

  .icons-write-piu img {
    width: 2.5rem;
  }

  .piu-button {
    color: #FFF;
    /* background: var(--color-button); */
    background: -webkit-linear-gradient( 180deg, #5b5bff, #FB4C64);
    font-size: 1.4rem;
    font-weight: bold;
    font-family: Montserrat;
    
    width: 5rem;
    height: 3rem;

    /* border: 2px solid #FB4C64; */
    border-radius: 25px;

    cursor: pointer;

  }

  .piu-button:hover {
    background:  -webkit-linear-gradient( 180deg, #FB4C64, #5b5bff);
  }

  p {
    font-size: 1.2rem;
    padding-bottom: 4px;
  }

`

export const ModalStyle = {

  content: {
    background: 'rgba(196,196,196,0.7)',
    boxShadow: '7px 7px 4px rgba(0,0,0, 0.25)',
    bottom: 'auto',
    margin: 'auto',
    height: '150px',
    width: '300px',
    borderRadius: '25px 0',
    color: '#FB4C64',
  }
}