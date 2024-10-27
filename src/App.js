import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraSuperior from './componentes/layout/BarraSuperior';
import BarraLateral from './componentes/layout/BarraLateral';
import Exibir from './componentes/pages/Exibir';
import Adicionar from './componentes/pages/Adicionar';
import Home from './componentes/pages/Home';
import './App.css';

function App() {
  const [isSidebarOpen] = useState(false);


  return (
    <Router>
      <div className="page-background">
        <BarraSuperior/>
        <BarraLateral isOpen={isSidebarOpen} />
        <div className="pages planodefundo">
          <Routes style={{ position: 'relative', zIndex: 1 }}>
            <Route exact path='/' element={<Home />} />
            <Route path='/Exibir' element={<Exibir />} />
            <Route path='/Adicionar' element={<Adicionar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
