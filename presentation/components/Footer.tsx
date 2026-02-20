
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D0D] pt-24 pb-12 px-12 md:px-24 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-condensed text-[#F5E6D3] mb-4 tracking-widest flex items-baseline uppercase">
              PASTELERÍA <span className="text-[#C8A96A] ml-1">ARTESANAL</span>
            </h2>
            <p className="text-[#F5E6D3]/40 text-xs tracking-widest uppercase mb-8">
              Creando excelencia desde 2015
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-[#C8A96A] mb-10 font-bold">TIENDA</h4>
            <ul className="flex flex-col gap-6">
              <li><Link to="/productos" className="text-[12px] uppercase tracking-widest text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors">Colección</Link></li>
              <li><Link to="/nuevos-ingresos" className="text-[12px] uppercase tracking-widest text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors">Nuevos Ingresos</Link></li>
              <li><Link to="/mas-vendidos" className="text-[12px] uppercase tracking-widest text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors">Más vendidos</Link></li>
              <li><Link to="/juegos-regalo" className="text-[12px] uppercase tracking-widest text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors">Juegos de regalo</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-[#C8A96A] mb-10 font-bold">ACERCA DE</h4>
            <ul className="flex flex-col gap-6">
              <li><Link to="/nosotros" className="text-[12px] uppercase tracking-widest text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors">Nuestra Historia</Link></li>
              <li><Link to="/artesania" className="text-[12px] uppercase tracking-widest text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors">Artesanía</Link></li>
              <li><Link to="/sostenibilidad" className="text-[12px] uppercase tracking-widest text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors">Sostenibilidad</Link></li>
              <li><Link to="/trabaja-con-nosotros" className="text-[12px] uppercase tracking-widest text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors">Trabaja con Nosotros</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-[#C8A96A] mb-10 font-bold">SOPORTE</h4>
            <ul className="flex flex-col gap-6">
              <li><Link to="/contacto" className="text-[12px] uppercase tracking-widest text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors">Contacto</Link></li>
              <li><Link to="/envios" className="text-[12px] uppercase tracking-widest text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors">Envíos</Link></li>
              <li><Link to="/devoluciones" className="text-[12px] uppercase tracking-widest text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors">Devoluciones</Link></li>
              <li><Link to="/faq" className="text-[12px] uppercase tracking-widest text-[#F5E6D3]/60 hover:text-[#C8A96A] transition-colors">Preguntas frecuentes</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#F5E6D3]/30">© 2026 Pastelería Artesana. Todos los derechos reservados.</p>
          <div className="flex gap-10">
             <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-[#C8A96A] hover:text-[#0D0D0D] transition-all text-[#F5E6D3]/40 hover:border-transparent">
               <i className="fab fa-instagram text-lg"></i>
             </span>
             <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-[#C8A96A] hover:text-[#0D0D0D] transition-all text-[#F5E6D3]/40 hover:border-transparent">
               <i className="fab fa-facebook-f text-lg"></i>
             </span>
             <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-[#C8A96A] hover:text-[#0D0D0D] transition-all text-[#F5E6D3]/40 hover:border-transparent">
               <i className="fab fa-twitter text-lg"></i>
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
