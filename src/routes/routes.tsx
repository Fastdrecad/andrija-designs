import { Route, Routes } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import PortfolioPage from '@pages/PortfolioPage';
import AboutPage from '@pages/AboutPage';
import ContactPage from '@pages/ContactPage';
import NotFoundPage from '@pages/NotFoundPage';
import DesignProcessPage from '@pages/DesignProcessPage';

const RoutesConfig: React.FC = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/portfolio' element={<PortfolioPage />} />
    <Route path='/design-process' element={<DesignProcessPage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
);

export default RoutesConfig;
