
import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppService } from '../../infrastructure/whatsapp.service';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: "DIRECCIÓN",
      lines: ["Av. Principal 123", "San Isidro, Lima", "Perú"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "HORARIO",
      lines: ["Lun - Vie: 9:00 AM - 8:00 PM", "Sábados: 10:00 AM - 6:00 PM", "Domingos: Cerrado"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      title: "TELÉFONO",
      lines: ["+51 936 068 781", "WhatsApp disponible"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      title: "CORREO ELECTRÓNICO",
      lines: ["hola@artisanpastry.com", "pedidos@artisanpastry.com"]
    }
  ];

  const handleWhatsApp = () => {
    WhatsAppService.redirectToWhatsApp("Consulta General");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#0D0D0D] min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center px-12 md:px-24 overflow-hidden">
        {/* Large Ghost Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-[35vw] font-condensed leading-none text-[#F5E6D3] select-none tracking-tighter"
          >
            CONTACTO
          </motion.h1>
        </div>

        <div className="container mx-auto text-center relative z-10 pt-40">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C8A96A] uppercase tracking-[0.5em] text-[10px] font-bold mb-4"
          >
            ESTAMOS AQUÍ
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-8xl md:text-[10vw] font-condensed leading-[0.8] text-[#F5E6D3] uppercase"
          >
            HABLEMOS<br/><span className="text-[#C8A96A]">CONTIGO</span>
          </motion.h2>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 px-12 md:px-24">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white/5 border border-white/5 rounded-3xl text-center group hover:border-[#C8A96A]/20 transition-all"
            >
              <div className="w-14 h-14 bg-[#C8A96A]/10 text-[#C8A96A] rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-[#C8A96A] group-hover:text-[#0D0D0D] transition-all">
                {info.icon}
              </div>
              <h4 className="text-[#F5E6D3] font-condensed text-xl mb-6 tracking-widest uppercase">{info.title}</h4>
              {info.lines.map((line, i) => (
                <p key={i} className="text-[#F5E6D3]/50 text-sm font-light mb-1 leading-relaxed">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form and Sidebar Section */}
      <section className="py-20 px-12 md:px-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white/5 border border-white/5 p-12 rounded-3xl"
          >
            <h3 className="text-4xl font-condensed text-[#F5E6D3] mb-2 uppercase tracking-wider leading-none">
              ENVÍANOS UN <span className="text-[#C8A96A]">MENSAJE</span>
            </h3>
            <p className="text-[#F5E6D3]/50 text-sm font-light uppercase tracking-widest mb-12">Estamos aquí para ayudarte</p>
            
            <form className="grid grid-cols-1 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[#C8A96A] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">NOMBRE *</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="w-full bg-[#121212] border border-white/10 rounded-full px-8 py-4 text-[#F5E6D3] focus:outline-none focus:border-[#C8A96A]/50 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-[#C8A96A] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">CORREO ELECTRÓNICO *</label>
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="w-full bg-[#121212] border border-white/10 rounded-full px-8 py-4 text-[#F5E6D3] focus:outline-none focus:border-[#C8A96A]/50 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-[#C8A96A] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">ASUNTO *</label>
                <input 
                  type="text" 
                  placeholder="¿En qué podemos ayudarte?" 
                  className="w-full bg-[#121212] border border-white/10 rounded-full px-8 py-4 text-[#F5E6D3] focus:outline-none focus:border-[#C8A96A]/50 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-[#C8A96A] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">MENSAJE *</label>
                <textarea 
                  rows={5}
                  placeholder="Tu mensaje..." 
                  className="w-full bg-[#121212] border border-white/10 rounded-3xl px-8 py-6 text-[#F5E6D3] focus:outline-none focus:border-[#C8A96A]/50 transition-all text-sm resize-none"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#C8A96A] text-[#0D0D0D] uppercase tracking-[0.3em] font-bold rounded-full text-xs shadow-xl mt-4"
              >
                ENVIAR MENSAJE
              </motion.button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Social Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/5 p-12 rounded-3xl"
            >
              <h4 className="text-xl font-condensed text-[#F5E6D3] mb-8 uppercase tracking-widest">SÍGUENOS EN <span className="text-[#C8A96A]">REDES</span></h4>
              <div className="flex flex-col gap-6">
                <a href="#" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#F5E6D3]/40 group-hover:bg-[#C8A96A] group-hover:text-[#0D0D0D] transition-all">
                    <i className="fab fa-instagram text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#C8A96A]">INSTAGRAM</p>
                    <p className="text-sm text-[#F5E6D3]/60">@artisanpastry</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#F5E6D3]/40 group-hover:bg-[#C8A96A] group-hover:text-[#0D0D0D] transition-all">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#C8A96A]">FACEBOOK</p>
                    <p className="text-sm text-[#F5E6D3]/60">Pastelería Artesanal del Perú</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#F5E6D3]/40 group-hover:bg-[#C8A96A] group-hover:text-[#0D0D0D] transition-all">
                    <i className="fab fa-twitter text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#C8A96A]">GORJEO</p>
                    <p className="text-sm text-[#F5E6D3]/60">@artisanpastry</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/5 p-12 rounded-3xl"
            >
              <h4 className="text-xl font-condensed text-[#C8A96A] mb-4 uppercase tracking-widest">WHATSAPP</h4>
              <p className="text-[#F5E6D3]/60 text-sm font-light leading-relaxed mb-8">¿Necesitas respuesta inmediata? Escríbenos por WhatsApp</p>
              <motion.button 
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-[#C8A96A] text-[#0D0D0D] uppercase tracking-[0.2em] font-bold rounded-full text-[10px] flex items-center justify-center gap-3 shadow-xl"
              >
                ABRIR WHATSAPP
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.237-.038.37.281.133.32.455 1.112.494 1.192.039.08.065.173.013.277s-.078.12-.156.211c-.078.091-.163.204-.233.275-.07.071-.144.149-.061.292.083.143.369.608.791.984.545.485 1.004.636 1.148.708.145.072.23.06.315-.041.085-.101.366-.426.463-.571.097-.145.194-.121.327-.072s.845.398.99.47c.145.072.241.108.277.171.036.063.036.365-.108.77z"/>
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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

export default ContactPage;
