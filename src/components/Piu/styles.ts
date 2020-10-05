import styled from 'styled-components';

export const PiuDiv = styled.div`

  word-wrap: break-word;

  .piu{
    background: var(--color-background);
    margin: 10px;
    border-radius: 25px 0;

    padding: 1rem 1rem 0 1rem;

    display: flex;

  }
 
  .avatar {
    margin-top: 9px;

    width: 5rem;
    max-height: 5rem;
    border-radius: 50%;
    
  }

  .piu-content {
    width: 95%;
    max-width: 700px;
    padding-left: 15px;
    
  }

  .info-user strong {
    font-size: 1.4rem;
  }

  .piu-text {
    padding-top: 10px;
    padding-bottom: 10px;

    font-size: 1.3rem;
  }

  .info-user span {
    font-size: 1.3rem;
    color: var(--color-text-normal);
    padding-left: 8px;
  }
  


  .piu-icons {
    display: flex;
    justify-content: space-between;

    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 5px;
  }

  .piu-icons button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .piu-icons img {
    width: 2rem;
  }

  .likeBtn {
    display: flex;
    align-items: center;
  }
  .likeBtn span {
    font-family: Montserrat;
    padding-left: 4px;
  }

`;