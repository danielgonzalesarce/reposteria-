
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D0D] pt-32 pb-12 px-12 md:px-24 border-t border-white/5 relative overflow-hidden">
      {/* Massive Ghost Text Background */}
      <div className="absolute bottom-[-5%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
        <h2 className="text-[25vw] font-condensed leading-none whitespace-nowrap select-none tracking-tighter uppercase">
          MAISON D'OR
        </h2>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-10">
              <h2 className="text-4xl font-condensed text-[#F5E6D3] tracking-widest flex items-baseline uppercase">
                MAISON <span className="text-[#C8A96A] ml-2">D'OR</span>
              </h2>
              <p className="text-[#C8A96A] text-[10px] tracking-[0.5em] uppercase font-bold mt-2">
                Haute Pâtisserie
              </p>
            </Link>
            <p className="text-[#F5E6D3]/50 text-sm leading-relaxed max-w-xs mb-10 font-light">
              Elevando la repostería artesanal a una forma de arte cinematográfico. Cada creación es una pieza de colección diseñada para los paladares más exigentes.
            </p>
            <div className="flex gap-6">
              {[
                { icon: 'fab fa-instagram', label: 'Instagram' },
                { icon: 'fab fa-facebook-f', label: 'Facebook' },
                { icon: 'fab fa-twitter', label: 'Twitter' }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -5, color: '#C8A96A' }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#F5E6D3]/40 transition-all hover:border-[#C8A96A]/30"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links Sections */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#C8A96A] mb-12 font-bold opacity-80">TIENDA</h4>
            <ul className="flex flex-col gap-6">
              <li><Link to="/productos" className="text-[11px] uppercase tracking-[0.2em] text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors font-medium">Colección</Link></li>
              <li><Link to="/nuevos-ingresos" className="text-[11px] uppercase tracking-[0.2em] text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors font-medium">Nuevos</Link></li>
              <li><Link to="/mas-vendidos" className="text-[11px] uppercase tracking-[0.2em] text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors font-medium">Favoritos</Link></li>
              <li><Link to="/juegos-regalo" className="text-[11px] uppercase tracking-[0.2em] text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors font-medium">Regalos</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#C8A96A] mb-12 font-bold opacity-80">MAISON</h4>
            <ul className="flex flex-col gap-6">
              <li><Link to="/nosotros" className="text-[11px] uppercase tracking-[0.2em] text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors font-medium">Historia</Link></li>
              <li><Link to="/artesania" className="text-[11px] uppercase tracking-[0.2em] text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors font-medium">Artesanía</Link></li>
              <li><Link to="/sostenibilidad" className="text-[11px] uppercase tracking-[0.2em] text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors font-medium">Ética</Link></li>
              <li><Link to="/trabaja-con-nosotros" className="text-[11px] uppercase tracking-[0.2em] text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors font-medium">Carreras</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#C8A96A] mb-12 font-bold opacity-80">CONTACTO</h4>
            <div className="space-y-8">
              <div>
                <p className="text-[#F5E6D3]/40 text-[10px] uppercase tracking-widest mb-2">Visítanos</p>
                <p className="text-[#F5E6D3]/80 text-sm font-light">Av. Aurelio Miró Quesada 123<br/>San Isidro, Lima - Perú</p>
              </div>
              <div>
                <p className="text-[#F5E6D3]/40 text-[10px] uppercase tracking-widest mb-2">Atención</p>
                <p className="text-[#F5E6D3]/80 text-sm font-light">Lun - Sáb: 09:00 - 20:00<br/>Dom: 10:00 - 18:00</p>
              </div>
              <div>
                <p className="text-[#F5E6D3]/40 text-[10px] uppercase tracking-widest mb-2">Consultas</p>
                <p className="text-[#C8A96A] text-sm font-medium tracking-wider">hola@maisondor.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#F5E6D3]/30">© 2026 Maison d'Or. Todos los derechos reservados.</p>
            <Link to="/faq" className="text-[9px] uppercase tracking-[0.3em] text-[#F5E6D3]/30 hover:text-[#C8A96A] transition-colors">FAQ</Link>
            <Link to="/envios" className="text-[9px] uppercase tracking-[0.3em] text-[#F5E6D3]/30 hover:text-[#C8A96A] transition-colors">Envíos</Link>
            <Link to="/devoluciones" className="text-[9px] uppercase tracking-[0.3em] text-[#F5E6D3]/30 hover:text-[#C8A96A] transition-colors">Privacidad</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#F5E6D3]/40">Estado de la Cocina: <span className="text-emerald-500">Activa</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
