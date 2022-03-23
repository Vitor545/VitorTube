import React from 'react';
import Video from '../video/video.mp4'
import Nav from '../components/Nav.jsx';
import VideoP from '../components/Video';
import Thumb1 from '../img/thumbnail1.png';
import Like from '../img/like.png';
import Deslike from '../img/dislike.png';
import Save from '../img/save.png';
import Share from '../img/share.png';
import Jack from '../img/Jack.png';
import Comentarios from '../components/Comentarios.jsx'

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
          <div className="tags">
            <a href="">#Coding</a>
            <a href="">#CSS</a>
            <a href="">#HTML</a>
            <a href="">#JavaScript</a>
          </div>
          <h3>Best Youtube Channal to Learn Web Development</h3>
          <div className="play-video-info">
            <p>1225 Visualizações &bull; 2 dias atrás</p>
            <div>
              <a href=""><img src={Like} alt="like" /></a>
              <a href=""><img src={Deslike} alt="like" /></a>
              <a href=""><img src={Share} alt="like" /></a>
              <a href=""><img src={Save} alt="like" /></a>
            </div>
          </div>
          <hr />
          <div className="plubliser">
            <img src={Jack} alt="jack" />
            <div>
              <p>Easy Tutorials</p>
              <span>500 mil inscritos</span>
            </div>
            <button type="button">Inscrever-se</button>
          </div>
          <div className="vid-description">
            <p>Channel that makes learning easy</p>
            <p>Subscribe Easy Tutorials to watch more tutorials on web development</p> 
            <hr />
            <h4>134 Comentários</h4>
            <div className="add-comment">
              <img src={Jack} alt="jack" />
              <input type="text" placeholder="Adicione um comentário" />
            </div>
            <Comentarios />
            <Comentarios />
            <Comentarios />
          </div>
        </div>
        <div className="right-sidebar">
          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
   
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
    
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
   
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
   
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
   
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
   
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
   
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
   
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
   
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
   
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
   
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
   
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
   
          </div>

          <div className="side-video-list">
            <a href="" className="small-thumbnail"><img src={Thumb1} alt="recomendation"/></a>
            <VideoP titulo={'Channel that makes learning easy'} canal={'Easy Tutorials'} />    
    
          </div>

        </div>
      </div>
    </div>
    </React.Fragment>
  );
}