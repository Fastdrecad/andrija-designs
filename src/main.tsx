import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

import './styles/style.scss';
import { DarkModeContextProvider } from './context/darkModeContext.tsx';
import { MenuContextProvider } from './context/navContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <MenuContextProvider>
          <App />
        </MenuContextProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
