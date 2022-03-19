import React from 'react';
import Menu from '../img/menu.png';
import Logo from '../img/logo.svg';
import Upload from '../img/upload.png';
import More from '../img/more.png';
import Notifications from '../img/notification.png';
import Vitor from '../img/Vitor.png';

export default function Nav() {
  return(
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src={Menu} alt="menu" className="menu-icon"/>
        <img src={Logo} alt="logo" className="logo"/>
      </div>
      <div className="nav-middle"></div>
      <div className="nav-right flex-div">
        <img src={Upload} alt="upload"/>
        <img src={More} alt="more"/>
        <img src={Notifications} alt="notifications"/>
        <img src={Vitor} alt="Jack" className="user-icon"/>
      </div>
    </nav>
  );
} 