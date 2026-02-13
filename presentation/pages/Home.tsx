
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProductService } from '../../application/product.service';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = ProductService.getFeatured();

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#C8A96A" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.015 9.015 0 010 18z" />
        </svg>
      ),
      title: "MAESTRÍA ARTESANAL",
      desc: "Cada pieza es meticulosamente elaborada a mano por nuestros galardonados chefs pasteleros."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#C8A96A" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
      ),
      title: "CALIDAD PREMIUM",
      desc: "Solo los mejores ingredientes provenientes de todo el mundo."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#C8A96A" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      title: "DISEÑO ÚNICO",
      desc: "Estética contemporánea fusionada con técnicas tradicionales."
    }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#0D0D0D]"
    >
      {/* 1. Hero Section - Based on Image 1 */}
      <section className="relative min-h-screen flex items-center px-12 md:px-24">
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.05, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-[35vw] font-condensed leading-none text-[#F5E6D3] select-none tracking-tighter"
          >
            PASTELES
          </motion.h1>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="inline-block px-4 py-2 border border-[#C8A96A]/30 rounded-full mb-8">
               <span className="text-[#C8A96A] uppercase tracking-[0.4em] text-[10px] font-bold">Colección Premium</span>
            </div>
            <h2 className="text-8xl md:text-[10vw] font-condensed leading-[0.8] text-[#F5E6D3] mb-8 uppercase">
              CHOCOLATE<br/><span className="text-[#C8A96A]">ARTESANAL</span>
            </h2>
            <p className="max-w-md text-[#F5E6D3]/60 text-lg leading-relaxed mb-12 font-light">
              Experimenta la fusión perfecta de artesanía tradicional y elegancia contemporánea. Cada creación es una obra maestra de sabor y diseño.
            </p>
            <Link to="/productos">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#D4B87A' }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-[#C8A96A] text-[#0D0D0D] uppercase tracking-[0.2em] text-xs font-bold rounded-full shadow-2xl"
              >
                Explorar Colección
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-xl mx-auto rounded-3xl overflow-hidden bg-[#F2F2F2] group">
              <img 
                src="https://images.unsplash.com/photo-1514056052883-d017fddd0426?q=80&w=1000&auto=format&fit=crop" 
                alt="Product Featured" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Nuevo Badge */}
              <div className="absolute top-1/2 -right-12 -translate-y-1/2">
                <div className="w-24 h-24 rounded-full bg-[#4A2C2A]/80 flex items-center justify-center text-[#C8A96A] font-condensed text-sm tracking-widest rotate-12">
                   NUEVO
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
           <div className="w-6 h-10 border-2 border-[#C8A96A]/30 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 12, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full" 
              />
           </div>
        </div>
      </section>

      {/* 2 & 3. Obras Maestras Section - Based on Image 2 & 3 */}
      <section className="py-40 px-12 md:px-24 bg-[#0D0D0D] border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#C8A96A] uppercase tracking-[0.4em] text-xs mb-6 font-bold">Selección Destacada</h3>
              <h2 className="text-7xl md:text-[8vw] font-condensed text-[#F5E6D3] leading-[0.8] uppercase">
                NUESTRAS<br/><span className="text-[#C8A96A]">OBRAS MAESTRAS</span>
              </h2>
            </motion.div>
            <Link to="/productos">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 border border-[#C8A96A]/50 rounded-full text-[#C8A96A] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#C8A96A] hover:text-[#0D0D0D] transition-all"
              >
                Ver Todo
              </motion.button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[800px]">
            {/* The reference shows an asymmetric grid, large left, two stacked right */}
            <div className="md:col-span-1">
               <ProductCard product={featuredProducts[0]} index={0} />
            </div>
            <div className="flex flex-col gap-12">
               <ProductCard product={featuredProducts[1]} index={1} />
               <ProductCard product={featuredProducts[2]} index={2} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Arte de la Repostería - Based on Image 4 */}
      <section className="py-40 px-12 md:px-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-[12vw] font-condensed leading-[0.8] text-[#F5E6D3] uppercase select-none opacity-90">
                EL ARTE<br/>DE LA <span className="text-[#C8A96A]">REPOSERÍA</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md p-12 rounded-3xl border border-white/10"
              >
                <p className="text-[#F5E6D3]/70 leading-relaxed mb-8 font-light text-lg">
                  Creemos en traspasar límites mientras respetamos la tradición. Cada creación cuenta una historia de pasión, precisión y calidad inquebrantable.
                </p>
                <Link to="/nosotros">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-3 border border-[#C8A96A] rounded-full text-[#C8A96A] text-[10px] uppercase tracking-[0.3em] font-bold"
                  >
                    Nuestra Historia
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
            {features.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-12 bg-white/5 border border-white/10 rounded-3xl group hover:border-[#C8A96A]/30 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-[#C8A96A]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#C8A96A]/20 transition-all">
                  {item.icon}
                </div>
                <h4 className="text-xl font-condensed text-[#F5E6D3] mb-4 tracking-[0.1em]">{item.title}</h4>
                <p className="text-[#F5E6D3]/40 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Newsletter Section - Based on Image 5 */}
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
    </motion.main>
  );
};

export default Home;
