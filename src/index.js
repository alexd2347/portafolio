import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ThemeProvider>
        <HashRouter>
          <App />
        </HashRouter>
  </ThemeProvider>
);

reportWebVitals();
