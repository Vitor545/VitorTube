import React, {useContext} from 'react';
import { TubeContexts } from '../contexts/TubeContexts';
import Banner from '../img/banner.png';
import VideoThumb from './VideoThumb.jsx';

export default function PaginaPrincipal() {
  const { small } = useContext(TubeContexts);
  return(
      <div className={`container ${small ? 'large-container' : ''}`}>
        <div className="banner">
          <img src={Banner} alt="banner" />
        </div>
        <div className="list-container">
          <VideoThumb />
          <VideoThumb />
          <VideoThumb />
          <VideoThumb />
          <VideoThumb />
          <VideoThumb />
          <VideoThumb />
          <VideoThumb />
        </div>
      </div>
  );
} 