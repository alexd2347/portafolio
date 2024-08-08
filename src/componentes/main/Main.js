import React from 'react';
import './Main.css';
import ImgYo from '../assets/yo.jpg';


import Linked from '../../componentes/assets/linkedin.png';
import Git from '../../componentes/assets/github.png';


import Proyectos from '../proyectos/Proyectos';
import Contacto from '../contacto/Contacto';
const Main = () => {


    return (
        <main className="main">
            <div className='main-me-container'>
                <div className='main-img-container'>
                    <img src={ImgYo} alt="yo" className="main-img" />
                </div>
                <div className="main-text-container">
                    <h1 className="main-name">Alejandro Ramón Carranza Ruiz<span>&lt;/&gt;</span></h1>
                    <div className="main-text">
                        Hola, soy <span>Ingeniero en Sistemas Computacionales y Seguridad Informática</span>, apasionado por la <span>programación</span> y el <span>desarrollo de software</span>.
                    </div>
                    <div className="main-btn-container">
                        <a
                            href="https://www.linkedin.com/in/alejandro-carranza-ruiz-046a3b230/"
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
                </div>
            </div>
            <Proyectos />
            <Contacto />

        </main>
    );
};

export default Main;