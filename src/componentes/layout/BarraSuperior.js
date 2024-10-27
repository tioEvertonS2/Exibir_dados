import React, { useState } from 'react';
import './BarraSuperior.css';

const BarraSuperior = () => {
  // Estado para controlar a visibilidade da janelinha
  const [showUserInfo, setShowUserInfo] = useState(false);

  // Função para alternar a exibição da janelinha
  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  return (
    <div className="BarraSuperior">
      <div className="BarraSuperior-left">
        <div className="Nomedoprojeto">
          <p>Projeto Super</p>
        </div>
      </div>
      <div className="BarraSuperior-right">
        <img 
          src="/perfil.webp" 
          alt="Foto de Perfil" 
          className="foto-perfil" 
          onClick={toggleUserInfo}
        />
        {showUserInfo && (
          <div className="user-info-dropdown">
          <img 
          src="/perfil.webp" 
          alt="Foto de Perfil" 
          className="foto-perfil"/>
          <p>Olá, Usuário!</p>
          <div>
          <ul>
            <li>Sair</li>
            </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BarraSuperior;
