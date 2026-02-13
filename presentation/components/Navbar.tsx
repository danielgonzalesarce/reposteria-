
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { 
      name: 'Inicio', 
      path: '/', 
      img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop',
      desc: 'El origen de la excelencia'
    },
    { 
      name: 'Colección', 
      path: '/productos', 
      img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop',
      desc: 'Obras maestras de temporada'
    },
    { 
      name: 'Pedidos', 
      path: '/pedido-personalizado', 
      img: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop',
      desc: 'Creaciones a tu medida'
    },
    { 
      name: 'Nosotros', 
      path: '/nosotros', 
      img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
      desc: 'Nuestra herencia artesana'
    },
    { 
      name: 'Contacto', 
      path: '/contacto', 
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
      desc: 'Encuentra tu Maison'
    }
  ];

  const menuVariants: Variants = {
    closed: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    closed: { y: 100, opacity: 0, rotate: 5 },
    open: { y: 0, opacity: 1, rotate: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 md:py-8 transition-all duration-500 bg-gradient-to-b from-[#0D0D0D] to-transparent">
      <div className="container mx-auto flex justify-between items-center relative z-[110]">
        
        {/* LOGO IZQUIERDA */}
        <Link to="/" className="group flex flex-col items-start outline-none">
          <span className={`text-xl md:text-2xl font-condensed tracking-[0.2em] leading-none transition-colors ${isOpen ? 'text-[#F5E6D3]' : 'text-[#F5E6D3] group-hover:text-[#C8A96A]'}`}>
            MAISON <span className="text-[#C8A96A]">D'OR</span>
          </span>
          <span className="text-[8px] uppercase tracking-[0.5em] mt-1 font-bold opacity-40">Haute Pâtisserie</span>
        </Link>
        
        {/* NAVEGACIÓN DESKTOP (Minimalista - Como estaba antes) */}
        <div className="hidden lg:flex gap-12 items-center">
          {navLinks.filter(l => l.name !== 'Inicio').map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-[10px] uppercase tracking-[0.4em] transition-all font-bold relative group ${
                location.pathname === link.path ? 'text-[#C8A96A]' : 'text-[#F5E6D3]/60 hover:text-[#F5E6D3]'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#C8A96A] transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </div>

        {/* ICONOS Y TRIGGER HAMBURGUESA */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Bolsa Icono */}
          <button 
            onClick={() => navigate('/productos')}
            className="w-10 h-10 border border-[#C8A96A]/20 rounded-full flex items-center justify-center text-[#F5E6D3] hover:bg-[#C8A96A] hover:text-[#0D0D0D] transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </button>

          {/* Hamburguesa Trigger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center group outline-none"
          >
            <div className="relative w-10 h-10 flex flex-col items-center justify-center">
              <motion.div className={`absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ${isOpen ? 'bg-white/5' : 'bg-[#C8A96A]/10'}`} />
              <div className="relative w-6 h-3 flex flex-col justify-between items-end">
                <motion.span 
                  animate={isOpen ? { rotate: 45, y: 5.5, width: '100%', backgroundColor: '#F5E6D3' } : { rotate: 0, y: 0, width: '100%', backgroundColor: '#C8A96A' }}
                  className="h-[1px]"
                />
                <motion.span 
                  animate={isOpen ? { rotate: -45, y: -5.5, width: '100%', backgroundColor: '#F5E6D3' } : { rotate: 0, y: 0, width: '60%', backgroundColor: '#F5E6D3' }}
                  className="h-[1px]"
                />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* OVERLAY EDITORIAL (Se activa con el botón de hamburguesa) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0D0D0D] z-[105] flex overflow-hidden"
          >
            {/* Imagen de fondo dinámica en hover */}
            <div className="hidden lg:block absolute inset-0 z-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoveredLink !== null ? navLinks[hoveredLink].img : 'default'}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.15, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={hoveredLink !== null ? navLinks[hoveredLink].img : navLinks[1].img}
                  className="w-full h-full object-cover grayscale"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-end pb-12 lg:pb-24 relative z-10 w-full h-full">
              
              {/* Enlaces Principales con Animación de Máscara */}
              <motion.div 
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col gap-4 md:gap-8 items-center lg:items-start text-center lg:text-left mb-auto lg:mb-0 mt-32 lg:mt-0"
              >
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredLink(idx)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative"
                  >
                    <Link 
                      to={link.path}
                      className={`block text-5xl sm:text-7xl md:text-8xl lg:text-[7vw] font-condensed uppercase tracking-tighter leading-[0.9] transition-all duration-500 ${
                        hoveredLink !== null && hoveredLink !== idx ? 'opacity-20 blur-[2px]' : 'opacity-100'
                      } ${location.pathname === link.path ? 'text-[#C8A96A]' : 'text-[#F5E6D3]'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Información Lateral / Socials */}
              <div className="flex flex-col items-center lg:items-end gap-12 lg:gap-16 w-full lg:w-auto mt-12 lg:mt-0">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="hidden md:flex flex-col items-center lg:items-end text-center lg:text-right"
                >
                  <p className="text-[#C8A96A] text-[9px] uppercase tracking-[0.5em] font-bold mb-4">Maison D'Or</p>
                  <p className="text-[#F5E6D3]/40 text-xs uppercase tracking-widest leading-relaxed">
                    Lima, San Isidro<br/>
                    Av. Principal 123<br/>
                    +51 936 068 781
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-wrap justify-center gap-8 lg:gap-12"
                >
                  {['Instagram', 'Facebook', 'WhatsApp'].map((social) => (
                    <a key={social} href="#" className="text-[#F5E6D3]/40 text-[9px] uppercase tracking-[0.4em] font-bold hover:text-[#C8A96A] transition-colors">{social}</a>
                  ))}
                </motion.div>
              </div>
            </div>
            
            {/* Texto fantasma gigante de fondo */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
              <span className="text-[30vw] font-condensed leading-none tracking-tighter whitespace-nowrap block translate-y-1/4">
                PÂTISSERIE ARTISANALE
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
