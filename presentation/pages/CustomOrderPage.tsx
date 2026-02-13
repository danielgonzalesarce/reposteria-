
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WhatsAppService } from '../../infrastructure/whatsapp.service';
import { ProductService } from '../../application/product.service';

const CustomOrderPage: React.FC = () => {
  const products = ProductService.getAll();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    WhatsAppService.redirectToCustomOrder(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#0D0D0D] min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center px-12 md:px-24 overflow-hidden">
        {/* Large Ghost Text "ORDEN" */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-[35vw] font-condensed leading-none text-[#F5E6D3] select-none tracking-tighter"
          >
            ORDEN
          </motion.h1>
        </div>

        <div className="container mx-auto text-center relative z-10 pt-40">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C8A96A] uppercase tracking-[0.5em] text-[10px] font-bold mb-4"
          >
            HAZ TU PEDIDO
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-8xl md:text-[10vw] font-condensed leading-[0.8] text-[#F5E6D3] uppercase"
          >
            PEDIDOS<br/><span className="text-[#C8A96A]">PERSONALIZADOS</span>
          </motion.h2>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-12 md:px-24">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/5 p-12 md:p-20 rounded-[40px] shadow-2xl"
          >
            <h3 className="text-4xl font-condensed text-[#F5E6D3] mb-2 uppercase tracking-wider leading-none">
              INFORMACIÓN DE <span className="text-[#C8A96A]">CONTACTO</span>
            </h3>
            <p className="text-[#F5E6D3]/50 text-sm font-light mb-12">Completa los siguientes datos para procesar tu pedido.</p>
            
            <form className="grid grid-cols-1 gap-10" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[#C8A96A] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">NOMBRE COMPLETO *</label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  placeholder="Tu nombre" 
                  className="w-full bg-[#121212] border border-white/10 rounded-full px-8 py-5 text-[#F5E6D3] focus:outline-none focus:border-[#C8A96A]/50 transition-all text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[#C8A96A] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">TELÉFONO *</label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    placeholder="999 999 999" 
                    className="w-full bg-[#121212] border border-white/10 rounded-full px-8 py-5 text-[#F5E6D3] focus:outline-none focus:border-[#C8A96A]/50 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[#C8A96A] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">CORREO ELECTRÓNICO *</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="tu@email.com" 
                    className="w-full bg-[#121212] border border-white/10 rounded-full px-8 py-5 text-[#F5E6D3] focus:outline-none focus:border-[#C8A96A]/50 transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#C8A96A] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">PRODUCTO *</label>
                <select 
                  required
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full bg-[#121212] border border-white/10 rounded-full px-8 py-5 text-[#F5E6D3] focus:outline-none focus:border-[#C8A96A]/50 transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled>Selecciona un producto</option>
                  {products.map(p => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                  <option value="Diseño especial">Diseño especial / Otros</option>
                </select>
              </div>

              <div>
                <label className="block text-[#C8A96A] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">MENSAJE ADICIONAL</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="¿Alguna especificación especial para tu pedido?" 
                  className="w-full bg-[#121212] border border-white/10 rounded-[30px] px-8 py-6 text-[#F5E6D3] focus:outline-none focus:border-[#C8A96A]/50 transition-all text-sm resize-none"
                />
              </div>

              <div className="text-center">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-6 bg-[#C8A96A] text-[#0D0D0D] uppercase tracking-[0.3em] font-bold rounded-full text-xs shadow-xl mb-4"
                >
                  ENVIAR PEDIDO
                </motion.button>
                <p className="text-[10px] text-[#F5E6D3]/30 uppercase tracking-widest font-bold">* Campos obligatorios</p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section - consistent */}
      <section className="py-40 px-12 md:px-24 bg-[#0D0D0D] text-center border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-9xl font-condensed text-[#F5E6D3] mb-8 tracking-tighter uppercase">
              MANTENTE <span className="text-[#C8A96A]">CONECTADO</span>
            </h2>
            <p className="text-[#F5E6D3]/60 text-lg mb-12 uppercase tracking-[0.3em] font-light">
              Suscríbete para recibir ofertas exclusivas y novedades de nuevas colecciones.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-grow bg-[#151515] border border-white/10 rounded-full px-10 py-6 text-[#F5E6D3] focus:outline-none focus:border-[#C8A96A]/50 transition-all text-sm uppercase tracking-widest"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-[#C8A96A] text-[#0D0D0D] uppercase tracking-[0.3em] font-bold rounded-full text-xs shadow-xl"
              >
                UNIRSE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CustomOrderPage;
