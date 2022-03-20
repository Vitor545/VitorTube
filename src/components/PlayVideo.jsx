import React from 'react';
import Video from '../video/video.mp4'
import Nav from './Nav.jsx';
import VideoP from './Video';
import Thumb1 from '../img/thumbnail1.png';

export default function PlayVideo() {
  return (
    <React.Fragment>
    <Nav />
    <div className="container play-container">
      <div className="row">
        <div className="play-video">
          <video controls autoplay>
            <source src={Video} type="video/mp4"/>
          </video>
        </div>
        <div className="right-sidebar">
          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP />    
          </div>

        </div>
      </div>
    </div>
    </React.Fragment>
  );
}