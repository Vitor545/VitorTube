import React, {useContext} from 'react';
import { TubeContexts } from '../contexts/TubeContexts';
import Home from '../img/home.png';
import Explorar from '../img/explore.png';
import Inscricoes from '../img/subscriprion.png';
import Biblioteca from '../img/library.png';
import Historico from '../img/history.png';
import Playlist from '../img/playlist.png';
import Mensagens from '../img/messages.png';
import Mostrar_Mais from '../img/show-more.png';
import Jack from '../img/Jack.png';
import Simon from '../img/simon.png';
import Tom from '../img/tom.png';
import Megan from '../img/megan.png';
import Cameron from '../img/cameron.png';

export default function BarraLateral() {
  const { small } = useContext(TubeContexts);
  return(
    <div className={`sidebar ${small ? 'small-sidebar' : ''}`}>
      <div className="shortcut-links">
        <a href=""><img src={Home} alt="home"/><p>Home</p></a>
        <a href=""><img src={Explorar} alt="explorar"/><p>Explorar</p></a>
        <a href=""><img src={Inscricoes} alt="inscricoes"/><p>Inscrições</p></a>
        <a href=""><img src={Biblioteca} alt="biblioteca"/><p>Biblioteca</p></a>
        <a href=""><img src={Historico} alt="historico"/><p>Histórico</p></a>
        <a href=""><img src={Playlist} alt="playlist"/><p>Playlist</p></a>
        <a href=""><img src={Mensagens} alt="mensagens"/><p>Mensagens</p></a>
        <a href=""><img src={Mostrar_Mais} alt="mostrar mais"/><p>Mostrar Mais</p></a>
        <hr/>
      </div>
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <a href=""><img src={Jack} alt="foto-inscrição"/><p>Jack Nicholson</p></a>
        <a href=""><img src={Simon} alt="foto-inscrição"/><p>Simon Baker</p></a>
        <a href=""><img src={Tom} alt="foto-inscrição"/><p>Tom Hardy</p></a>
        <a href=""><img src={Megan} alt="foto-inscrição"/><p>Megan Ryan</p></a>
        <a href=""><img src={Cameron} alt="foto-inscrição"/><p>Cameron Diaz</p></a>
      </div>
    </div>
  );
}