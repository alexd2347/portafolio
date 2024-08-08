import React from 'react';
import './InteresesPersonales.css';

const InteresesPersonales = () => {
  return (
    <div className="intereses-container">
      <div className="intereses-card">
        Intereses
        <div className="experiencia-line" />
        <ul className="intereses-list">
          <li>Diseño web</li>
          <li>Investigación en machine learning</li>
          <li>Desarrollo videojuegos</li>
        </ul>
      </div>
      <div className="intereses-card">
        Hobbies
        <div className="experiencia-line" />
        <ul className="hobbies-list">
          <li>Ver videos sobre tecnología</li>
          <li>Ver series, peliculas y anime</li>
          <li>Jugar videojuegos</li>
        </ul>
      </div>
    </div>
  );
}

export default InteresesPersonales;
