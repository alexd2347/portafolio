import React from "react";
import "./Experiencia.css";

import Contacto from "../contacto/Contacto";

import PoliciaLogo from "../assets/policia-logo.jpg";
import medioambienteLogo from "../assets/medioambiente.png";
import UVAQLogo from "../assets/uvaq-logo.jpg";

const Experiencia = () => {
    return (
        <div className="experiencia">
            Experiencia Laboral
            <div className="experiencia-container">
                <div className="experiencia-card-container">
                    <strong className="experiencia-card-title"><span>Jefe de Proyectos</span> - Secretaría de Medio Ambiente del Estado de Michoacán</strong>
                    <div className="experiencia-line"/>
                    <p className="experiencia-fecha">Enero - Diciembre de 2023</p>
                    <ul className="experiencia-card-desc">
                        <li className="experiencia-dato">Desarrollé un <span className="resaltar">sistema de información</span> utilizando <span className="resaltar">React</span>, donde fui responsable del <span className="resaltar">diseño, implementación y mantenimiento</span> de la plataforma.</li>
                        <li className="experiencia-dato">Colaboré en un proyecto con el <span className="resaltar">Instituto Nacional de Estadística y Geografía (INEGI)</span> para crear un mapa digital interactivo que muestra capas relevantes de información.</li>
                        <li className="experiencia-dato">Utilicé servicios de <span className="resaltar">AWS</span> para la gestión de servidores y bases de datos como <span className="resaltar">PostgreSQL</span> y <span className="resaltar">MySQL</span>.</li>
                    </ul>
                    <img className="experiencia-img" src={medioambienteLogo} alt="Secretaria de Medio Ambiente logo" />
                </div>
                <div className="experiencia-card-container">
                    <strong className="experiencia-card-title"><span>Jefe de Departamento</span> - Policía Municipal de Morelia, Michoacán</strong>
                    <div className="experiencia-line"/>
                    <p className="experiencia-fecha">Agosto de 2023 - Presente</p>
                    <p className="experiencia-dato">Como Jefe de Departamento, lideré el desarrollo de dos proyectos clave:</p>
                    <ul className="experiencia-card-desc">
                        <li className="experiencia-dato"><span className="resaltar">Sistema administrativo "SYSPOL"</span>: más de 20 módulos para RRHH, creación de horarios, visualizar asistencias, búsqueda y registro de: elementos, inventarios, incidencias, etc.</li>
                        <li className="experiencia-dato"><span className="resaltar">Sistema administrativo "Casa Policía"</span>: Registró de documentos, entradas, salidas de familiares y policias, asi como estadisticas generadas por los registros.</li>
                    </ul>
                    <img className="experiencia-img" src={PoliciaLogo} alt="Policía Municipal de Morelia logo" />
                </div>
            </div>
            Educación
            <div className="experiencia-card-container">
                <strong className="experiencia-card-title"><span>Ingeniería en Sistemas y Seguridad informática</span> - Universidad Vasco de Quiroga</strong>
                    <div className="experiencia-line"/>
                <p className="experiencia-fecha">Agosto 2019 -  Diciembre 2023</p>
                <p className="experiencia-dato">Algunas de las asignaturas clave que cursé incluyeron:</p>
                <ul className="experiencia-card-desc">
                    <li className="experiencia-dato">Programación en varios lenguajes, como <span className="resaltar">Java, Python, y JavaScript</span>.</li>
                    <li className="experiencia-dato">Diseño y administración de <span className="resaltar">redes</span>, incluyendo configuración de <span className="resaltar">routers y switches</span>.</li>
                    <li className="experiencia-dato"><span className="resaltar">Criptografía y seguridad informática</span>, explorando algoritmos de cifrado y métodos de protección de datos.</li>
                    <li className="experiencia-dato">Desarrollo de software seguro, con un enfoque en <span className="resaltar">buenas prácticas</span> de codificación y <span className="resaltar">mitigación de vulnerabilidades</span>.</li>
                </ul>
                <img className="experiencia-img" src={UVAQLogo} alt="Logo de la Universidad Vasco de Quiroga" />
            </div>
            <Contacto />
        </div>
    );
};

export default Experiencia;
