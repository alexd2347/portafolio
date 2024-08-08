import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../ThemeProvider';
import './Header.css';


const Header = () => {
    const { darkMode, toggleTheme } = useTheme();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const handleDownload = () => {
        //evitar que se abra la página de descarga

        // Generar la URL del archivo
        const fileUrl = process.env.PUBLIC_URL + '/Resume Alejandro Carranza.pdf';
        // Abrir la URL en una nueva ventana para descargar el archivo
        window.open(fileUrl);
    };

    return (
        <header className={`header ${darkMode ? 'dark-theme' : 'light-theme'}`}>
            <Link to="/bienvenido">
                <div className='header-btn' onClick={scrollToTop}>
                    Inicio
                </div>
            </Link>
            <Link to="/experiencia">
                <div className='header-btn' onClick={scrollToTop}>
                    Experiencia
                </div>
            </Link>
            <Link to="/acerca-de-mi">
                <div className='header-btn' onClick={scrollToTop}>
                    Acerca de mí
                </div>
            </Link>
            {/** 
            <Link to="/mas">
                <div className='header-btn' onClick={scrollToTop}>
                    Más
                </div>
            </Link>
            */}
            <Link>
                <div className="header-btn" onClick={toggleTheme}>
                    {darkMode ? 'Light' : 'Dark'}
                </div>
            </Link>
            <div className="header-btn-cv" onClick={handleDownload}>CV</div>
        </header>
    );
};

export default Header;
