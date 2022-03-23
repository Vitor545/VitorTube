import React, {useContext} from 'react';
import { TubeContexts } from './contexts/TubeContexts';
import PlayVideo from './pages/PlayVideo.jsx';
import PageInicio from './pages/PageInicio.jsx';

export default function App() {
  const { video } = useContext(TubeContexts);
  const isVideo = () => <PlayVideo />
  const pagInicio = () => <PageInicio />
    return (
      video ? isVideo() : pagInicio()
    );
}
