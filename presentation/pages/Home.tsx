
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProductService } from '../../application/product.service';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = ProductService.getFeatured();

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#0D0D0D]"
    >
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-20">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.03, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-[40vw] md:text-[35vw] font-condensed leading-none text-[#F5E6D3] select-none tracking-tighter"
          >
            MAISON
          </motion.h1>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-2 border border-[#C8A96A]/30 rounded-full mb-6 md:mb-8">
               <span className="text-[#C8A96A] uppercase tracking-[0.4em] text-[9px] md:text-[10px] font-bold">Alta Repostería Artesanal</span>
            </div>
            <h2 className="text-6xl sm:text-7xl md:text-[10vw] font-condensed leading-[0.85] text-[#F5E6D3] mb-6 md:mb-8 uppercase">
              SABOR<br/><span className="text-[#C8A96A]">ETERNO</span>
            </h2>
            <p className="max-w-md mx-auto lg:mx-0 text-[#F5E6D3]/60 text-base md:text-lg leading-relaxed mb-10 md:mb-12 font-light">
              Donde la herencia francesa se encuentra con la pasión peruana para crear momentos de lujo absoluto.
            </p>
            <Link to="/productos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-5 bg-[#C8A96A] text-[#0D0D0D] uppercase tracking-[0.2em] text-xs font-bold rounded-full shadow-2xl"
              >
                Explorar Colección
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="relative order-1 lg:order-2 px-8 sm:px-20 lg:px-0"
          >
            <div className="relative aspect-square max-w-lg mx-auto rounded-[40px] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1514056052883-d017fddd0426?q=80&w=1000&auto=format&fit=crop" 
                alt="Product Featured" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-1/2 -right-6 md:-right-12 -translate-y-1/2">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#4A2C2A]/90 backdrop-blur-md flex items-center justify-center text-[#C8A96A] font-condensed text-xs md:text-sm tracking-widest rotate-12 shadow-xl border border-white/5">
                   NUEVO
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Obras Maestras Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0D0D0D] border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#C8A96A] uppercase tracking-[0.4em] text-[10px] mb-4 font-bold">Selección Gourmet</h3>
              <h2 className="text-6xl md:text-[8vw] font-condensed text-[#F5E6D3] leading-[0.8] uppercase">
                OBRAS<br/><span className="text-[#C8A96A]">MAESTRAS</span>
              </h2>
            </motion.div>
            <Link to="/productos" className="w-full md:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="w-full md:w-auto px-10 py-4 border border-[#C8A96A]/30 rounded-full text-[#C8A96A] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#C8A96A] hover:text-[#0D0D0D] transition-all"
              >
                Ver Todo
              </motion.button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 min-h-0">
            <div className="md:col-span-1 h-[400px] md:h-auto">
               <ProductCard product={featuredProducts[0]} index={0} />
            </div>
            <div className="flex flex-col gap-8 md:gap-12">
               <div className="h-[350px] md:h-1/2">
                 <ProductCard product={featuredProducts[1]} index={1} />
               </div>
               <div className="h-[350px] md:h-1/2">
                 <ProductCard product={featuredProducts[2]} index={2} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arte Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-[14vw] lg:text-[12vw] font-condensed leading-[0.85] text-[#F5E6D3] uppercase opacity-90 tracking-tighter">
                PURISMO<br/>& <span className="text-[#C8A96A]">PASIÓN</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white/10"
              >
                <p className="text-[#F5E6D3]/70 leading-relaxed mb-8 font-light text-base md:text-lg">
                  Elevamos lo cotidiano a la categoría de inolvidable. Nuestra técnica es ancestral, nuestro diseño es futurista.
                </p>
                <Link to="/nosotros">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="w-full sm:w-auto px-8 py-4 border border-[#C8A96A] rounded-full text-[#C8A96A] text-[9px] uppercase tracking-[0.3em] font-bold"
                  >
                    Nuestra Esencia
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0D0D0D] text-center border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-9xl font-condensed text-[#F5E6D3] mb-6 md:mb-8 tracking-tighter uppercase leading-none">
              ÚNETE A LA <span className="text-[#C8A96A]">MAISON</span>
            </h2>
            <p className="text-[#F5E6D3]/60 text-sm md:text-lg mb-10 md:mb-12 uppercase tracking-[0.2em] font-light">
              Recibe invitaciones exclusivas y novedades de temporada.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email corporativo" 
                className="flex-grow bg-[#151515] border border-white/10 rounded-full px-8 md:px-10 py-5 md:py-6 text-[#F5E6D3] focus:outline-none focus:border-[#C8A96A]/50 transition-all text-xs uppercase tracking-widest"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-[#C8A96A] text-[#0D0D0D] uppercase tracking-[0.2em] font-bold rounded-full text-xs shadow-xl"
              >
                Suscribir
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
