import React, { useContext } from 'react';
import { TubeContexts } from '../contexts/TubeContexts';

export default function Video() {
  const { state, setStateGlobal } = useContext(TubeContexts);
  const onClickVideo = () => {
    setStateGlobal({ ...state, video: true });
  }
  return(
    <React.Fragment>
      <div className="vid-info">
        <a onClick={onClickVideo}>Melhor canal para aprender codificação</a>
        <p>Easy Tutorials</p>
        <p>15 mil visualizações &bull; 2 dias</p>
      </div>
    </React.Fragment>
  ); 
}