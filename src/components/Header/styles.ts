import styled from 'styled-components';

export const HeaderComp = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem 2rem 2rem;

  img {
    width: 3rem;
  }

  .logo-img {
    width: 4.5rem;
  }

  button { 
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }


  @media(min-width: 700px) {
    width: 92vw;
    img {
      width: 4rem;
    }

    .logo-img {
      width: 6rem;
    }
  }
`;