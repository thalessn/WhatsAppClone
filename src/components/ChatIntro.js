import React from 'react';
import './ChatIntro.css';
import logoIntro from '../assets/intro.jpg';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="chatIntro">
            <img src={logoIntro} alt="" />
            <h1>Mantenha o seu celular<br/>conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.<br/>Para reduzir o usos de dados, conecte seu telefone a uma rede Wi-Fi.</h2>
        </div>
    );
}