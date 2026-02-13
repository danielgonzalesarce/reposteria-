
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './presentation/pages/Home';
import ProductsPage from './presentation/pages/ProductsPage';
import ProductDetailPage from './presentation/pages/ProductDetailPage';
import AboutPage from './presentation/pages/AboutPage';
import ContactPage from './presentation/pages/ContactPage';
import CustomOrderPage from './presentation/pages/CustomOrderPage';
import NotFoundPage from './presentation/pages/NotFoundPage';
import Navbar from './presentation/components/Navbar';
import Footer from './presentation/components/Footer';
import WhatsAppButton from './presentation/components/WhatsAppButton';

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen selection:bg-[#C8A96A] selection:text-[#0D0D0D] flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/productos/:id" element={<ProductDetailPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/pedido-personalizado" element={<CustomOrderPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      {/* Botón flotante global para información */}
      <WhatsAppButton productName="Información General" variant="floating" />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
