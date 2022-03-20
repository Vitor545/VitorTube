import React, {useContext} from 'react';
import { TubeContexts } from './contexts/TubeContexts';
import Nav from './components/Nav.jsx';
import BarraLateral from './components/BarraLateral.jsx';
import PaginaPrincipal from './components/PaginaPrincipal.jsx';
import PlayVideo from './components/PlayVideo.jsx';

export default function App() {
  const { video } = useContext(TubeContexts);
  const isVideo = () => <PlayVideo />
  const pagInicio = () => (
    <React.Fragment> 
        <Nav />
        <BarraLateral />
        <PaginaPrincipal />
    </React.Fragment>
  )
    return (
      video ? isVideo() : pagInicio()
    );
}
