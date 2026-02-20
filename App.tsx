
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

// New Pages
import NewArrivalsPage from './presentation/pages/NewArrivalsPage';
import BestSellersPage from './presentation/pages/BestSellersPage';
import GiftSetsPage from './presentation/pages/GiftSetsPage';
import CraftsmanshipPage from './presentation/pages/CraftsmanshipPage';
import SustainabilityPage from './presentation/pages/SustainabilityPage';
import CareersPage from './presentation/pages/CareersPage';
import ShippingPage from './presentation/pages/ShippingPage';
import ReturnsPage from './presentation/pages/ReturnsPage';
import FAQPage from './presentation/pages/FAQPage';

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen selection:bg-[#C8A96A] selection:text-[#0D0D0D] flex flex-col bg-[#0D0D0D]">
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
            
            {/* New Routes */}
            <Route path="/nuevos-ingresos" element={<NewArrivalsPage />} />
            <Route path="/mas-vendidos" element={<BestSellersPage />} />
            <Route path="/juegos-regalo" element={<GiftSetsPage />} />
            <Route path="/artesania" element={<CraftsmanshipPage />} />
            <Route path="/sostenibilidad" element={<SustainabilityPage />} />
            <Route path="/trabaja-con-nosotros" element={<CareersPage />} />
            <Route path="/envios" element={<ShippingPage />} />
            <Route path="/devoluciones" element={<ReturnsPage />} />
            <Route path="/faq" element={<FAQPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      <WhatsAppButton productName="Información General" variant="floating" />
    </div>
  );
};

const App: React.FC = () => {
  // HashRouter es la forma más robusta de manejar rutas en GitHub Pages.
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
