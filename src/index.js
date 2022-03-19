import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './contexts/TubeContexts';
import './css/style.css';

ReactDOM.render(
  <Provider>
     <App />
  </Provider>,
  document.getElementById('root')
);
