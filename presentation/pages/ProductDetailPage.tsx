
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductService } from '../../application/product.service';
import { Product } from '../../domain/product.model';
import WhatsAppButton from '../components/WhatsAppButton';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const p = ProductService.getById(id);
      if (p) {
        setProduct(p);
        setRelatedProducts(ProductService.getRelated(id));
      } else {
        navigate('/productos');
      }
    }
  }, [id, navigate]);

  if (!product) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0D0D0D] text-[#F5E6D3]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-32 md:pt-40 pb-20">
        {/* Enlace de volver */}
        <Link to="/productos" className="inline-flex items-center gap-3 text-[#C8A96A] text-[9px] uppercase tracking-[0.4em] font-bold mb-10 md:mb-16 hover:gap-5 transition-all group">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
          <span className="opacity-80 group-hover:opacity-100">Regresar</span>
        </Link>

        {/* Hero Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative rounded-[40px] overflow-hidden aspect-square shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          >
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col"
          >
            <p className="text-[#C8A96A] text-[10px] uppercase tracking-[0.6em] font-bold mb-6">{product.category}</p>
            <h1 className="text-6xl md:text-8xl font-condensed leading-[0.9] mb-8 uppercase tracking-tighter">{product.name}</h1>
            <p className="text-2xl md:text-3xl font-light text-[#C8A96A] mb-10 tracking-widest">S/ {product.price}</p>
            
            <p className="text-[#F5E6D3]/70 text-base md:text-lg leading-relaxed font-light mb-12 max-w-xl">
              {product.fullDescription}
            </p>

            <div className="max-w-md w-full">
              <WhatsAppButton productName={product.name} />
            </div>
          </motion.div>
        </div>

        {/* Detail Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-32 md:mb-40">
          {/* Ingredientes */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/5 rounded-[40px] p-8 md:p-12"
          >
            <h3 className="text-3xl md:text-4xl font-condensed text-[#F5E6D3] mb-10 uppercase tracking-widest">Ingredientes</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {product.ingredients?.map((ing, idx) => (
                <li key={idx} className="flex items-start gap-5">
                  <div className="text-[#C8A96A] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg font-light text-[#F5E6D3]/70 leading-tight">{ing}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cómo lo preparamos */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/5 rounded-[40px] p-8 md:p-12"
          >
            <h3 className="text-3xl md:text-4xl font-condensed text-[#F5E6D3] mb-10 uppercase tracking-widest">Artesanía</h3>
            <div className="space-y-8 md:space-y-10">
              {product.preparationSteps?.map((step, idx) => (
                <div key={idx} className="flex gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#C8A96A] text-[#0D0D0D] rounded-full flex items-center justify-center font-condensed text-lg md:text-xl">
                    {idx + 1}
                  </div>
                  <p className="text-base md:text-lg font-light text-[#F5E6D3]/70 pt-1.5 leading-snug">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <section className="pt-20 border-t border-white/5">
          <h2 className="text-4xl md:text-6xl font-condensed text-[#F5E6D3] mb-12 md:mb-16 uppercase tracking-tighter">
            COLECCIONES <span className="text-[#C8A96A]">SUGERIDAS</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/productos/${p.id}`} className="group block">
                <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden mb-6 shadow-xl">
                  <img 
                    src={p.imageUrl} 
                    alt={p.name} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                     <p className="text-[#C8A96A] text-[9px] uppercase tracking-[0.4em] font-bold mb-2">Ver Detalle</p>
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-condensed text-[#F5E6D3] mb-2 uppercase tracking-widest group-hover:text-[#C8A96A] transition-colors">
                  {p.name}
                </h4>
                <p className="text-xs font-light text-[#C8A96A] uppercase tracking-[0.3em]">S/ {p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Newsletter Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0D0D0D] text-center border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-9xl font-condensed text-[#F5E6D3] mb-6 md:mb-8 tracking-tighter uppercase leading-none">
              MANTENTE <span className="text-[#C8A96A]">CERCA</span>
            </h2>
            <p className="text-[#F5E6D3]/60 text-sm md:text-lg mb-10 md:mb-12 uppercase tracking-[0.2em] font-light">
              Únete a nuestra lista de cortesía para eventos privados.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu email" 
                className="flex-grow bg-[#151515] border border-white/10 rounded-full px-8 py-5 text-[#F5E6D3] focus:outline-none focus:border-[#C8A96A]/50 transition-all text-xs uppercase tracking-widest"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-[#C8A96A] text-[#0D0D0D] uppercase tracking-[0.2em] font-bold rounded-full text-xs shadow-xl"
              >
                Ingresar
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetailPage;
