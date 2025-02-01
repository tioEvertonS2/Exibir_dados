import React, { useState, useEffect, useRef } from 'react';
import './BarraSuperior.css';
import { CiUser } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

const BarraSuperior = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const dropdownRef = useRef(null);
  const profileIconRef = useRef(null);

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !profileIconRef.current.contains(event.target)) {
      setShowUserInfo(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

 
/*const handleLogout = () => {
    console.log("Usuário deslogado");
    // Lógica para encerrar a sessão
  };
*/
 
  return (
    <div className="BarraSuperior">
      <div className="BarraSuperior-left">
          <img src="/logo-super.png" 
          alt="Foto de Perfil" 
          className="logo-super"/>
        </div>
      <div className="BarraSuperior-right">
        <img 
          src="/perfil.webp" 
          alt="Foto de Perfil" 
          className="foto-perfil" 
          onClick={toggleUserInfo}
          ref={profileIconRef}
        />
        {showUserInfo && (
          <div className="user-info-dropdown" ref={dropdownRef}>
          <img 
            src="/perfil.webp" 
            alt="Foto de Perfil" 
            className="foto-perfil"
          />
          <h3>Nome do Usuário</h3>
          <p>usuario@email.com</p>

          <hr className="divider" />
          <ul>
            <li><CiUser /> Editar Perfil</li>
            <li><IoLogOutOutline />Sair</li>
          </ul>
        </div>
  
)}
      </div>
    </div>
  );
};

export default BarraSuperior;
