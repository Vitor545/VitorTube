import React from 'react';
import Thumb1 from '../img/thumbnail1.png';
import Jack from '../img/Jack.png';

export default function PaginaPrincipal() {
  return(
          <div className="vid-list">
            <img src={Thumb1} alt="thumb" className="thumbnail" />
            <div className="flex-div">
              <img src={Jack} alt="Jack" />
              <div className="vid-info">
                <a href="">Melhor canal para aprender codificação</a>
                <p>Easy Tutorials</p>
                <p>15 mil visualizações &bull; 2 dias</p>
              </div>
            </div>
          </div>
  );
} 