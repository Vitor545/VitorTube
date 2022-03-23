import React from 'react';
import Thumb1 from '../img/thumbnail1.png';
import Video from './Video';
import Jack from '../img/Jack.png';

export default function VideoThumb() {
  const criarVideo = (thumb, img, titulo, canal) => {
    return(
      <div className="vid-list">
          <img src={thumb} alt="thumb" className="thumbnail" />
          <div className="flex-div">
            <img src={img} alt="Jack" />
            <Video titulo={titulo} canal={canal} />
          </div>
      </div>
    );
  }
  return(
    criarVideo(Thumb1, Jack, "Melhor canal para aprender codificação", "Easy Tutorials")
  );
} 