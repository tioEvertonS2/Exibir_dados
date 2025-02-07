import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraSuperior from './componentes/layout/BarraSuperior';
import BarraLateral from './componentes/layout/BarraLateral';
import Exibir from './componentes/pages/Exibir';
import Adicionar from './componentes/pages/Adicionar';
import Home from './componentes/pages/Home';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    const [pacientes, setPacientes] = useState([]);

    const handleAddPaciente = (novoPaciente) => {
        setPacientes((prevPacientes) => [...prevPacientes, novoPaciente]);
    };

    const handleDeletePaciente = (cpf) => {
        setPacientes((prevPacientes) => prevPacientes.filter(paciente => paciente.cpf !== cpf));
    };

    const handleEditPaciente = (cpf, dadosAtualizados) => {
        setPacientes((prevPacientes) => 
            prevPacientes.map(paciente => 
                paciente.cpf === cpf ? { ...paciente, ...dadosAtualizados } : paciente
            )
        );
    };

    return (
        <Router>
            <div className="page-background">
                <BarraSuperior />
                <div className="content-container">
                    <BarraLateral />
                    <div className="pages planodefundo">
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                            <Route 
                                path='/Exibir' 
                                element={<Exibir pacientes={pacientes} onDelete={handleDeletePaciente} onEdit={handleEditPaciente} />} 
                            />
                            <Route 
                                path='/Adicionar' 
                                element={<Adicionar onAddPaciente={handleAddPaciente} />} 
                            />
                        </Routes>
                    </div>
                </div>
            </div>
            
            <ToastContainer
               position="top-right" // Posição das notificações
               autoClose={3000} // Tempo em milissegundos para fechar automaticamente
               hideProgressBar={false} // Mostrar barra de progresso
               newestOnTop={false} // Novas notificações aparecem em cima ou embaixo
               closeOnClick // Fechar ao clicar na notificação
               rtl={false} // Direção do texto (esquerda para direita ou direita para esquerda)
               pauseOnFocusLoss // Pausar notificações quando a janela perde o foco
               draggable // Permitir arrastar as notificações
               pauseOnHover // Pausar notificações ao passar o mouse 
            />

        </Router>
    );
}

export default App;