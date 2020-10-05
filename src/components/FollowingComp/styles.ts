import styled from 'styled-components';

export const FollowingDiv = styled.div`
    background: var(--color-background-feed);
    
    margin-left: 40px;
    /* margin-top: 30px; */

    border-radius: 25px 0;

    width: 33.5rem;
    height: 24rem;

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

    .container-img-info {
      display: flex;
      align-items: center;
    }

    .profile {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-left: 29px;
      padding-top: 15px;
      padding-bottom: 15px;

      border-bottom: 1px solid #C4C4C4;
      width: 28rem;
    }

    .profile img {
    width: 6rem;
    border-radius: 50%;
  }

  .info {
    display: flex;
    flex-direction: column;

    padding: 0 30px 0 10px;
  }

  .info strong {
    font-size: 1.7rem;
    padding-bottom: 2px;
  }

  .info span {
    font-size: 1.4rem;
    color: var(--color-text-normal)
  }

  .profile-button {
    color: var(--color-button);
    font-size: 1.4rem;
    font-weight: bold;
    font-family: Montserrat;
    
    width: 7rem;
    height: 30px;

    border: 2px solid #FB4C64;
    border-radius: 25px;

    cursor: pointer;
    transition-duration: 0.5s;

    outline: none;
  }

  .profile-button:hover {
    background-color: rgba(251, 76, 100, 0.5);
  }

  @media (max-width: 880px){ 
    width: 25rem;
    height: 20rem;

    .header {
      width: 20rem;
    }

    .profile {
      width: 20rem;
    }

    .profile img {
      width: 5rem;
      padding-right: 5px;
    }

    .profile-button { 
      font-size: 1.2rem;
    }

    .info {
      padding-right: 5px;
    }

    .info strong {
      font-size: 1.3rem;
    }
    
    .info span {
      font-size: 1.2rem;
    }
  }

`