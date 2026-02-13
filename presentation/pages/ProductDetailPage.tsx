
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
      <div className="container mx-auto px-12 md:px-24 pt-40 pb-20">
        {/* Enlace de volver */}
        <Link to="/productos" className="inline-flex items-center gap-2 text-[#C8A96A] text-[10px] uppercase tracking-[0.3em] font-bold mb-16 hover:gap-4 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
          Volver a la colección
        </Link>

        {/* Hero Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative rounded-[40px] overflow-hidden aspect-square lg:aspect-[4/5]"
          >
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col h-full justify-center"
          >
            <p className="text-[#C8A96A] text-xs uppercase tracking-[0.5em] font-bold mb-6">{product.category}</p>
            <h1 className="text-7xl md:text-8xl font-condensed leading-[0.9] mb-8 uppercase">{product.name}</h1>
            <p className="text-3xl font-light text-[#C8A96A] mb-10 tracking-wider">S/ {product.price}</p>
            
            <p className="text-[#F5E6D3]/70 text-lg leading-relaxed font-light mb-12 max-w-xl">
              {product.fullDescription}
            </p>

            <div className="max-w-md">
              <WhatsAppButton productName={product.name} />
            </div>
          </motion.div>
        </div>

        {/* Detail Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
          {/* Ingredientes */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/5 rounded-[40px] p-12"
          >
            <h3 className="text-4xl font-condensed text-[#F5E6D3] mb-12 uppercase tracking-widest">Ingredientes</h3>
            <ul className="space-y-6">
              {product.ingredients?.map((ing, idx) => (
                <li key={idx} className="flex items-center gap-6">
                  <div className="text-[#C8A96A]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg font-light text-[#F5E6D3]/80">{ing}</span>
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
            className="bg-white/5 border border-white/5 rounded-[40px] p-12"
          >
            <h3 className="text-4xl font-condensed text-[#F5E6D3] mb-12 uppercase tracking-widest">Cómo lo preparamos</h3>
            <div className="space-y-10">
              {product.preparationSteps?.map((step, idx) => (
                <div key={idx} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C8A96A] text-[#0D0D0D] rounded-full flex items-center justify-center font-condensed text-xl">
                    {idx + 1}
                  </div>
                  <p className="text-lg font-light text-[#F5E6D3]/80 pt-2">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <section className="pt-20">
          <h2 className="text-5xl md:text-6xl font-condensed text-[#F5E6D3] mb-16 uppercase tracking-tighter">
            TAMBIÉN TE <span className="text-[#C8A96A]">PUEDE GUSTAR</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/productos/${p.id}`} className="group block">
                <div className="relative aspect-square rounded-[30px] overflow-hidden mb-6">
                  <img 
                    src={p.imageUrl} 
                    alt={p.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-condensed text-[#F5E6D3] mb-2 uppercase tracking-widest group-hover:text-[#C8A96A] transition-colors">
                  {p.name}
                </h4>
                <p className="text-sm font-light text-[#C8A96A] uppercase tracking-widest">S/ {p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Reutilizar sección Newsletter */}
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

export default ProductDetailPage;
