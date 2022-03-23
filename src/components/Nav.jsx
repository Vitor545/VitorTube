import React, { useContext } from 'react';
import { TubeContexts } from '../contexts/TubeContexts';
import Menu from '../img/menu.png';
import Logo from '../img/logo.svg';
import Upload from '../img/upload.png';
import More from '../img/more.png';
import Notifications from '../img/notification.png';
import Vitor from '../img/Vitor.png';
import Search from '../img/search.png';
import Mic from '../img/voice-search.png';

export default function Nav() {
  const { state, setStateGlobal, small } = useContext(TubeContexts);
  const onClickMenu = () => {
    setStateGlobal({ ...state, small: !small });
  }
  return(
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src={Menu} alt="menu" className='menu-icon' onClick={onClickMenu}/>
        <img href="" src={Logo} alt="logo" className="logo"/>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Pesquisar"/>
          <img src={Search} alt="search" className="sizenav-icon"/>
        </div>
        <img src={Mic} alt="mic" className="sizenav-icon"/>
      </div>
      <div className="nav-right flex-div">
        <img src={Upload} alt="upload"/>
        <img src={More} alt="more"/>
        <img src={Notifications} alt="notifications"/>
        <img src={Vitor} alt="Jack" className="user-icon"/>
      </div>
    </nav>
  );
} 