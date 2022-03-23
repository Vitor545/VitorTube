import React from 'react';
import Jack from '../img/Jack.png';
import Like from '../img/like.png';
import Deslike from '../img/dislike.png';

export default function Comentarios() {
  return(
    <React.Fragment>
            <div className="old-comment">
              <img src={Jack} alt="jack" />
              <div>
                <h3>Jack Nicholson <span>2 dias atrás</span></h3>
                <p>
                  lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor 
                  lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                  lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                </p>
                <div className="acomment-action">
                  <img src={Like} alt="like" />
                  <span>244</span>
                  <img src={Deslike} alt="deslike" />
                  <span>2</span>
                  <span>RESPONDER</span>
                  <a href=''>Todas as respostas</a>
                </div>
              </div>
            </div>
    </React.Fragment>
  );
}