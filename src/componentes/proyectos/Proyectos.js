import React from 'react';

import './Proyectos.css';
import ReactImg from '../assets/react.png';
import JsImg from '../assets/js.png';
import CssImg from '../assets/css.png';
import DockerIMG from '../assets/docker.png';
import AwsIMG from '../assets/AWS.png';
import NodeImg from '../assets/node.png';
import PostgreImg from '../assets/postgres.png';


import SIIAM from '../../componentes/assets/siiam.png';
import Mapa from '../../componentes/assets/mapa.png';
import SyspolIMG from '../../componentes/assets/Syspol.png';
import CasaPolicia from '../../componentes/assets/casa-policia.jpg';
import Reportes from '../../componentes/assets/reportes.png';
import Ventas from '../../componentes/assets/ventas.png';

const Proyectos = () => {

    return (
        <div className="proyectos">
            Proyectos
            <article className="card">
                <div className='card-text-container'>
                    <h2 className="card-title">Web de Venta de Ropa</h2>
                    <div className="experiencia-line" />
                    <div className="card-desc">
                        Creado para un socio que buscaba vender ropa en línea, este sistema permite gestionar inventarios y procesar pedidos con facilidad. Incluye filtros de productos, carrito de compras y una interfaz amigable. <span>Proyecto desarrollado completamente por mí.</span>
                    </div>


                    <div className="card-pill-container">
                        <div className='card-pill'>
                            <img
                                src={AwsIMG}
                                alt="AWS"
                                className="card-pill-img"
                            />
                            AWS
                        </div>
                        <div className='card-pill'>
                            <img
                                src={ReactImg}
                                alt="React"
                                className="card-pill-img"
                            />
                            React
                        </div>
                        <div className='card-pill'>
                            <img
                                src={NodeImg}
                                alt="Node js"
                                className="card-pill-img"
                            />
                            Node js
                        </div>
                    </div>
                </div>
                <a
                    href="https://importacionesjjstore.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="card-img-container"
                >
                    <img className="card-img" src={Ventas} alt="web ventas de ropa" />
                    <div className="overlay">
                        <span>Visitar web</span>
                    </div>
                </a>
            </article >
            <article className="card">
                <div className='card-text-container'>
                    <h2 className="card-title">Sistema de Reporte Ciudadano</h2>
                    <div className="experiencia-line" />
                    <div className="card-desc">
                        Diseñado para la <span>Policía Municipal de Morelia, Michoacán</span>, este sistema permite a los ciudadanos reportar incidencias de forma rápida y eficiente. También facilita la comunicación entre los ciudadanos y las autoridades para una atención más oportuna. <span>Proyecto desarrollado completamente por mí.</span>
                    </div>
                    <div className="card-pill-container">
                        <div className='card-pill'>
                            <img
                                src={AwsIMG}
                                alt="AWS"
                                className="card-pill-img"
                            />
                            AWS
                        </div>
                        <div className='card-pill'>
                            <img
                                src={ReactImg}
                                alt="React"
                                className="card-pill-img"
                            />
                            React
                        </div>
                        <div className='card-pill'>
                            <img
                                src={NodeImg}
                                alt="Node js"
                                className="card-pill-img"
                            />
                            Node js
                        </div>
                    </div>
                </div>
                <div className="card-img-container">
                    <img className="card-img" src={Reportes} alt="reportes img" />
                </div>
            </article >

            <article className="card">
                <div className='card-text-container'>
                    <h2 className="card-title">Sistema Integral de Información Ambiental de Michoacán</h2>
                    <div className="experiencia-line" />
                    <div className="card-desc">
                        Impulsado por la <span>Secretaría del Medio Ambiente (SECMA)</span>, constituye un mecanismo de difusión de la información ambiental que recopila el estado. <span>Proyecto desarrollado completamente por mí.</span>
                    </div>
                    <div className="card-pill-container">
                        <div className='card-pill'>
                            <img
                                src={AwsIMG}
                                alt="AWS"
                                className="card-pill-img"
                            />
                            AWS
                        </div>
                        <div className='card-pill'>
                            <img
                                src={ReactImg}
                                alt="React"
                                className="card-pill-img"
                            />
                            React
                        </div>
                        <div className='card-pill'>
                            <img
                                src={JsImg}
                                alt="JavaScript"
                                className="card-pill-img"
                            />
                            JavaScript
                        </div>
                        <div className='card-pill'>
                            <img
                                src={CssImg}
                                alt="CSS"
                                className="card-pill-img"
                            />
                            CSS
                        </div>
                    </div>
                </div>
                <a
                    href="http://mapadigital.secma.michoacan.gob.mx/#/principal"
                    target="_blank"
                    rel="noreferrer"
                    className="card-img-container"
                >
                    <img className="card-img" src={SIIAM} alt="SIIAM" />
                    <div className="overlay">
                        <span>Visitar web</span>
                    </div>
                </a>
            </article >
            <article className="card">
                <div className='card-text-container'>
                    <h2 className="card-title">Atlas Digital de Información Ambiental</h2>
                    <div className="experiencia-line" />
                    <div className="card-desc">
                        Impulsado por la <span>Secretaría del Medio Ambiente (SECMA)</span>, proyecto desarrollado para mostrar las diferentes capas existentes de información ambiental del estado de Michoacán. <span>Proyecto desarrollado en colaboración con el INEGI.</span>
                    </div>
                    <div className="card-pill-container">
                        <div className='card-pill'>
                            <img
                                src={AwsIMG}
                                alt="AWS"
                                className="card-pill-img"
                            />
                            AWS
                        </div>
                        <div className='card-pill'>
                            <img
                                src={DockerIMG}
                                alt="Docker"
                                className="card-pill-img"
                            />
                            Docker
                        </div>

                        <div className='card-pill'>
                            <img
                                src={PostgreImg}
                                alt="PostgreSQL"
                                className="card-pill-img"
                            />
                            PostgreSQL
                        </div>
                    </div>
                </div>
                <a
                    href="http://mapadigital.secma.michoacan.gob.mx/atlas/"
                    target="_blank"
                    rel="noreferrer"
                    className="card-img-container"
                >
                    <img className="card-img" src={Mapa} alt="Mapa" />
                    <div className="overlay">
                        <span>Visitar web</span>
                    </div>
                </a>
            </article >



            <article className="card">
                <div className='card-text-container'>
                    <h2 className="card-title">Sistema administrativo de la policía "SYSPOL"</h2>
                    <div className="experiencia-line" />
                    <div className="card-desc">
                        Creado para la <span>Policía Municipal del Morelia Michoacán</span>, sistema desarrollado para la facilitación de diferentes tareas, teniendo módulos de RRHH, creación de horarios, visualizar asistencias, búsqueda de: elementos, inventarios, incidencias, etc.  <span>Proyecto desarrollado completamente por mí.</span>
                    </div>
                    <div className="card-pill-container">
                        <div className='card-pill'>
                            <img
                                src={ReactImg}
                                alt="React"
                                className="card-pill-img"
                            />
                            React
                        </div>
                        <div className='card-pill'>
                            <img
                                src={NodeImg}
                                alt="Node js"
                                className="card-pill-img"
                            />
                            Node js
                        </div>

                        <div className='card-pill'>
                            <img
                                src={PostgreImg}
                                alt="PostgreSQL"
                                className="card-pill-img"
                            />
                            PostgreSQL
                        </div>
                    </div>
                </div>
                <div className="card-img-container">
                    <img className="card-img" src={SyspolIMG} alt="Mapa" />
                </div>
            </article >
            <article className="card">
                <div className='card-text-container'>
                    <h2 className="card-title">Sistema administrativo de casa policía</h2>
                    <div className="experiencia-line" />
                    <div className="card-desc">
                        Este proyecto fue desarrollado para la <span>Policía Municipal de Morelia, Michoacán</span>. Permite registrar y administrar familiares, policias, horas de entrada y salida, documentos, etc. Se utiliza en casa policía (club deportivo y recreativo). <span>El proyecto fue desarrollado completamente por mí.</span>
                    </div>
                    <div className="card-pill-container">
                        <div className='card-pill'>
                            <img
                                src={ReactImg}
                                alt="React"
                                className="card-pill-img"
                            />
                            React
                        </div>
                        <div className='card-pill'>
                            <img
                                src={NodeImg}
                                alt="Node js"
                                className="card-pill-img"
                            />
                            Node js
                        </div>

                        <div className='card-pill'>
                            <img
                                src={PostgreImg}
                                alt="PostgreSQL"
                                className="card-pill-img"
                            />
                            PostgreSQL
                        </div>
                    </div>
                </div>
                <div className="card-img-container">
                    <img className="card-img" src={CasaPolicia} alt="Mapa" />
                </div>
            </article >
        </div>
    );
};

export default Proyectos;