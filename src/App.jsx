import React from 'react';
import './App.css';

import Clock from './components/Clock';

const App = () => {
  return (
    <>
    <Clock />
    <button>Comprar</button>
    <br>
    
    <button id="2">Inicializar compra 2</button>
    </>
  );
};

export default App;
