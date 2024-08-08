import React, { useState } from "react";
import "./Contacto.css";

import Linked from '../../componentes/assets/linkedin.png';
import Git from '../../componentes/assets/github.png';

const Contacto = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch((error) => {
                console.error('Error al copiar el texto: ', error);
            });
    };

    return (
        <div className="contacto">
            <h1 className="contacto-title">Contacto</h1>
            <div className="experiencia-line" />
            <p><span className="item">¡Estoy emocionado de conectar contigo!</span> Si tienes alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en ponerte en contacto conmigo a través de cualquiera de los siguientes medios:</p>
            <div className="contacto-container">
                <div className="contacto-item">Email: <span className="item" onClick={() => handleCopy('acarranza015@uvaq.edu.mx')}>acarranza015@uvaq.edu.mx</span></div>
                <div className="contacto-item">Teléfono: <span className="item" onClick={() => handleCopy('+524433425480')}>+52 (443) 342-5480</span></div>
            </div>
            <div className="contacto-btn-container">
                <a
                    href="https://www.linkedin.com/in/alejandro-carranza-ruiz-046a3b230/" S
                    target="_blank"
                    rel="noreferrer"
                    className="main-btn"
                >
                    <img src={Linked} alt="SIIAM" />
                    LinkedIn
                </a>
                <a
                    href="https://github.com/alexd2347"
                    target="_blank"
                    rel="noreferrer"
                    className="main-btn"
                >
                    <img src={Git} alt="GitHub" />
                    GitHub
                </a>
            </div>
            {copied && <div className="popup">¡Texto copiado!</div>} {/* Mostrar el popup si el texto se ha copiado */}
        </div>
    );
};

export default Contacto;
