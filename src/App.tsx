import { BrowserRouter as Router } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import RoutesConfig from './routes/routes';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'} app`}>
      <Router>
        <RoutesConfig />
      </Router>
    </div>
  );
}

export default App;
