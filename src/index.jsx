import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './provider/ThemeProvider';
import { CitiesPoolProvider } from './provider/CitiesPoolProvider';
import { ActiveCityProvider } from './provider/ActiveCityProvider';
import './styles/variables.css';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <ThemeProvider>
      <ActiveCityProvider>
        <CitiesPoolProvider>
          <App />
        </CitiesPoolProvider>
      </ActiveCityProvider>
    </ThemeProvider>
  </React.StrictMode>
);

