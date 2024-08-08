import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useTheme } from './ThemeProvider';

import Header from './componentes/header/Header';
import Main from './componentes/main/Main';
import AboutMe from './componentes/about-me/AboutMe';
import ComponenteMas from './componentes/componente-mas/ComponenteMas';
import Experiencia from './componentes/experiencia/Experiencia';

function App() {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();
  return (
    <div className={`App ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/bienvenido" />} />
        <Route path="*" element={<Navigate to="/bienvenido" />} />
        <Route path="/bienvenido" element={<Main />} />
        <Route path="/acerca-de-mi" element={<AboutMe />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/mas" element={<ComponenteMas />} />
      </Routes>
      <footer>
        <p>&copy; {currentYear} Todos los derechos reservados por mí ♥</p>
      </footer>
    </div>
  );
}

export default App;
