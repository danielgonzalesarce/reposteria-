
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      title: "PASIÓN",
      desc: "Cada creación nace del amor por la repostería artesanal."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.971 5.971 0 00-.941 3.197m0 0a5.971 5.971 0 00-.941 3.197m0 0L6 18.72a3.001 3.001 0 01-4.682-2.72 8.959 8.959 0 013.74-.477m.94 3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "COMUNIDAD",
      desc: "Celebramos momentos especiales junto a nuestros clientes."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
      ),
      title: "EXCELENCIA",
      desc: "Compromiso inquebrantable con la máxima calidad."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
      title: "INNOVACIÓN",
      desc: "Fusionamos tradición con técnicas contemporáneas."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#0D0D0D] min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-12 md:px-24 overflow-hidden">
        {/* Large Ghost Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-[35vw] font-condensed leading-none text-[#F5E6D3] select-none tracking-tighter"
          >
            HISTORIA
          </motion.h1>
        </div>

        <div className="container mx-auto relative z-10 pt-40">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C8A96A] uppercase tracking-[0.5em] text-[10px] font-bold mb-8"
          >
            DESDE 2015
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-8xl md:text-[10vw] font-condensed leading-[0.8] text-[#F5E6D3] uppercase mb-12"
          >
            NUESTRA<br/><span className="text-[#C8A96A]">HISTORIA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-[#F5E6D3]/70 text-xl md:text-2xl font-light leading-relaxed"
          >
            Un viaje apasionado que comenzó con un sueño: crear experiencias gastronómicas inolvidables a través de la repostería artesanal.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-12 md:px-24 bg-[#0D0D0D]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-sm"
          >
            <h3 className="text-5xl font-condensed text-[#C8A96A] mb-8 uppercase tracking-widest leading-none">EL COMIENZO</h3>
            <p className="text-[#F5E6D3]/70 leading-relaxed font-light text-lg">
              Todo comenzó en una pequeña cocina en 2015, donde nuestra fundadora, apasionada por la repostería francesa, decidió convertir su sueño en realidad. Inspirada por sus viajes por Europa y formación en prestigiosas escuelas de pastelería, creó Artisan Pastry con una visión clara: redefinir la experiencia de la repostería artesanal.
            </p>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-sm"
          >
            <h3 className="text-5xl font-condensed text-[#F5E6D3] mb-8 uppercase tracking-widest leading-none">NUESTRA <span className="text-[#C8A96A]">FILOSOFÍA</span></h3>
            <p className="text-[#F5E6D3]/70 leading-relaxed font-light text-lg mb-6">
              Creemos que cada postre debe contar una historia. No simplemente crear dulces, sino experiencias sensoriales que conectan emociones, celebren momentos y honren la tradición mientras abrazan la innovación.
            </p>
            <p className="text-[#F5E6D3]/70 leading-relaxed font-light text-lg">
              Cada ingrediente es cuidadosamente seleccionado, cada técnica es perfeccionada con dedicación, y cada creación es una expresión de nuestra pasión por la excelencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-12 md:px-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            className="p-12 border border-white/5 rounded-3xl bg-[#0F0F0F]"
          >
            <h4 className="text-[#C8A96A] font-condensed text-4xl mb-6 tracking-widest uppercase">MISIÓN</h4>
            <p className="text-[#F5E6D3]/60 leading-relaxed font-light text-lg">
              Crear experiencias gastronómicas excepcionales que transformen momentos ordinarios en recuerdos extraordinarios, utilizando ingredientes de la más alta calidad y técnicas artesanales perfeccionadas con pasión y dedicación.
            </p>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-12 border border-white/5 rounded-3xl bg-[#0F0F0F]"
          >
            <h4 className="text-[#C8A96A] font-condensed text-4xl mb-6 tracking-widest uppercase">VISIÓN</h4>
            <p className="text-[#F5E6D3]/60 leading-relaxed font-light text-lg">
              Ser reconocidos como referentes de la repostería artesanal contemporánea, donde tradición e innovación se fusionan para crear obras maestras que inspiran y eliminen a generaciones presentes y futuras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-32 px-12 md:px-24 text-center">
        <div className="container mx-auto">
          <h2 className="text-6xl md:text-8xl font-condensed text-[#F5E6D3] mb-24 uppercase tracking-tighter">
            NUESTROS <span className="text-[#C8A96A]">VALORES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-[#C8A96A]/30 transition-all group"
              >
                <div className="w-16 h-16 bg-[#C8A96A]/10 text-[#C8A96A] rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-[#C8A96A] group-hover:text-[#0D0D0D] transition-all">
                  {val.icon}
                </div>
                <h5 className="text-[#F5E6D3] font-condensed text-2xl mb-4 tracking-widest uppercase">{val.title}</h5>
                <p className="text-[#F5E6D3]/40 text-sm leading-relaxed font-light">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 px-12 md:px-24 text-center border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-7xl md:text-8xl font-condensed text-[#F5E6D3] mb-8 uppercase leading-[0.8]">
            FORMA PARTE DE<br/><span className="text-[#C8A96A]">NUESTRA HISTORIA</span>
          </h2>
          <p className="text-[#F5E6D3]/60 text-lg md:text-xl mb-16 leading-relaxed font-light">
            Cada cliente, cada celebración, cada sonrisa es parte de nuestro viaje. Te invitamos a descubrir nuestras creaciones y hacer de tus momentos especiales algo verdaderamente inolvidable.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/productos">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="w-full md:w-auto px-12 py-6 bg-[#C8A96A] text-[#0D0D0D] uppercase tracking-[0.3em] font-bold rounded-full text-xs shadow-xl"
              >
                VER COLECCIÓN
              </motion.button>
            </Link>
            <Link to="/contacto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="w-full md:w-auto px-12 py-6 border border-[#C8A96A] text-[#C8A96A] uppercase tracking-[0.3em] font-bold rounded-full text-xs"
              >
                CONTÁCTANOS
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Consistent with Home */}
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

export default AboutPage;
