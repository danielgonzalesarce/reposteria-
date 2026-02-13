
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Colección', path: '/productos' },
    { name: 'Pedidos', path: '/pedido-personalizado' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-12 py-8 bg-gradient-to-b from-[#0D0D0D] to-transparent">
      <Link to="/" className="text-xl font-condensed text-[#F5E6D3] tracking-widest hover:text-[#C8A96A] transition-colors flex items-baseline">
        PASTELERÍA <span className="text-[#C8A96A] ml-1">ARTESANAL</span>
      </Link>
      
      <div className="flex gap-12 items-center">
        {navLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path} 
            className={`text-[12px] uppercase tracking-[0.2em] transition-all font-bold ${
              location.pathname === link.path 
                ? 'text-[#C8A96A]' 
                : 'text-[#F5E6D3]/80 hover:text-[#C8A96A]'
            }`}
          >
            {link.name}
          </Link>
        ))}
        {/* Botón de Bolsa de Compras con funcionalidad de navegación */}
        <button 
          onClick={() => navigate('/productos')}
          className="w-10 h-10 border border-[#C8A96A]/30 rounded-full flex items-center justify-center text-[#F5E6D3] hover:bg-[#C8A96A] hover:text-[#0D0D0D] transition-all ml-4 group relative"
          title="Ver Colección"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
