import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './styles/style.scss';
import { DarkModeContextProvider } from './context/darkModeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
