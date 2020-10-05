import React, { useState, useEffect, useCallback } from 'react';

import Header from '../../components/Header';
import Piu, { UserProps } from '../../components/Piu';
import WritePiu from '../../components/WritePiu';

import { FeedDiv, OrganizeFeedPage } from './styles'
import WidgetComp from '../../components/WidgetComp';
import FollowingComp from '../../components/FollowingComp';
import SearchBar from '../../components/SearchBar';
import api from '../../services/api';

export default function Feed() {

  const [pius, setPius] = useState([]);


  const delay = useCallback(
    (delay: number) => new Promise(res => setTimeout(res, delay)
    ), []);


  useEffect(() => {
    async function loadPius() {
      while (true) {
        const response = await api.get('/pius/')
        setPius(response.data);
        await delay(3000);
      }
    }
    loadPius();
  }, [])

  return (
    <div>
      <Header />
      <SearchBar />
      <OrganizeFeedPage >
        <FeedDiv>
          <div className="write-posted-pius">
            <WritePiu />
            {pius.map((piar: UserProps) => {
              return <Piu key={piar.id} piar={piar} />
            })}
          </div>
        </FeedDiv>
        <div className="widgets">
          <WidgetComp
            className="moments"
            title="fique por dentro">
          </WidgetComp>

          <FollowingComp
            title="já os conhece ?">
          </FollowingComp>
        </div>
      </OrganizeFeedPage>
    </div>

  )
}