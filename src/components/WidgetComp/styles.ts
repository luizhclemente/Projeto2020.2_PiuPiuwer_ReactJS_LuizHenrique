import styled from 'styled-components';

export const WidgetDiv = styled.div`
    background: var(--color-background-feed);
    
    margin-left: 40px;
    /* margin-top: 30px; */

    border-radius: 25px 0;

    width: 33.5rem;
    height: 26rem;

    .header {
      width: 28rem;

      padding: 10px 5px 10px 0;
      margin-left: 29px;
      border-bottom: 1px solid #C4C4C4;

    };

    h1 {
      background: -webkit-linear-gradient( 180deg, #5b5bff, #FB4C64);
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    ul {
      list-style: none;
    }

    .profile {
    display: flex;
    align-items: center;

    margin-left: 29px;
    padding-top: 10px;
    padding-bottom: 10px;

    border-bottom: 1px solid #C4C4C4;
    width: 28rem;
  }
  
  .last {
    border-bottom: none;
  }

  .profile .assunto {
    display: flex;
    flex-direction: column;
  }

  .assunto span {
    font-size: 13px;
    color: var(--color-text-normal);
  }

  .assunto strong {
    font-size: 15px;
  }

`