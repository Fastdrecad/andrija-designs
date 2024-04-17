import { BrowserRouter as Router } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import RoutesConfig from './routes/routes';
import Header from '@components/Header';
import Footer from '@components/Footer';
import ScrollToTop from '@components/ScrollToTop';
import NavigateToTop from '@components/NavigateToTop';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'} app`}>
      <Router>
        <NavigateToTop />
        <Header />
        <RoutesConfig />
        <Footer />
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
