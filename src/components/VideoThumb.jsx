import React from 'react';
import Thumb1 from '../img/thumbnail1.png';
import Video from './Video';
import Jack from '../img/Jack.png';

export default function PaginaPrincipal() {
  return(
          <div className="vid-list">
            <img src={Thumb1} alt="thumb" className="thumbnail" />
            <div className="flex-div">
              <img src={Jack} alt="Jack" />
              <Video />
            </div>
          </div>
  );
} 