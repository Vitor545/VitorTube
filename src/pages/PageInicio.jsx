import React from 'react';
import Nav from '../components/Nav.jsx';
import BarraLateral from '../components/BarraLateral.jsx';
import PaginaPrincipal from '../components/PaginaPrincipal.jsx';

export default function PageInicio() {
  return(
    <React.Fragment>
      <Nav />
      <BarraLateral />
      <PaginaPrincipal />
    </React.Fragment>
  );
}