import React, { InputHTMLAttributes } from 'react';
import { FollowingDiv } from './styles';

import Apple from '../../assets/images/apple.jpg'
import PJImg from '../../assets/images/pj.png'

interface DivProps extends InputHTMLAttributes<HTMLDialogElement> {
  title: string;
  className?: string;
}


const FollowingComp: React.FC<DivProps> = ({ title, className, ...rest }) => {
  return (
    <FollowingDiv>
      <div className="header">
        <h1>{title}</h1>
      </div>
      <ul>
        <li>
          <div className="profile">
            <div className="container-img-info">
              <img src={Apple} alt="Avatar" />
              <div className="info">
                <strong>Apple</strong>
                <span>@Apple</span>
              </div>
            </div>
            <button className="profile-button">seguir</button>
          </div>
        </li>
        <li>
          <div className="profile">
            <div className="container-img-info">
              <img src={PJImg} alt="Avatar" />
              <div className="info">
                <strong>Poli Júnior</strong>
                <span>@Polijunior</span>
              </div>
            </div>
            <button className="profile-button">seguir</button>
          </div>
        </li>
      </ul>
    </FollowingDiv>
  );
};

export default FollowingComp