import React from 'react';

import { HeaderComp } from './styles'

import HomeImg from '../../assets/images/home.svg'
import Bell from '../../assets/images/bell.svg'
import Logo from '../../assets/images/parrot-logo.svg'
import User from '../../assets/images/user.svg'
import LogOutIcon from '../../assets/images/log-out.svg'
import { Link } from 'react-router-dom';

import Button from '../Button';
import { useAuth } from '../../hooks/useAuth';



const Header: React.FC = () => {

  const { LogOut, user } = useAuth();

  function handleLogOut() {
    LogOut()
  }

  return (
    <HeaderComp>
      <Link to="/feed">
        <img src={HomeImg} alt="Home" />
      </Link>
      <Link to="/notifications">
        <img src={Bell} alt="Bell" />
      </Link>
      <img className="logo-img" src={Logo} alt="Piupiuwer Logo" />
      <Link to="/profile">
        <img src={User} alt="Profile" />
      </Link>
      <button onClick={handleLogOut}>
        <img src={LogOutIcon} alt="Log Out" />
      </button>

    </HeaderComp>
  );
}

export default Header