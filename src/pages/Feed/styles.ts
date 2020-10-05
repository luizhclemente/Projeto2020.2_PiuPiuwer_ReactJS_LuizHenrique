import styled, { css } from 'styled-components';

export const FeedDiv = styled.div`

  margin-top: 0px;

  width: 90vw;
  max-width: 890px;
  height: 100%;

  background: var(--color-background-feed);
  border-radius: 25px 0;

  padding-top: 1px;


  @media (min-width: 890px) {

    max-width: 800px;
    margin-top: -70px;
  }
`;

export const OrganizeFeedPage = styled.div`
  display: flex;

  width: 90vw;

  .moments {
    margin-bottom: 30px;
  }

  @media(max-width: 890px){
    .widgets {
      display: none;
    }
  }

`