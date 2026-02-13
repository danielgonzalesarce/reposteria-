
import React from 'react';
import { motion } from 'framer-motion';
import { ProductService } from '../../application/product.service';
import ProductCard from '../components/ProductCard';

const ProductsPage: React.FC = () => {
  const products = ProductService.getAll();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-8 bg-[#0D0D0D]"
    >
      <div className="container mx-auto">
        <header className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C8A96A] uppercase tracking-[0.4em] text-xs mb-4"
          >
            Nuestra Selección
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-8xl font-condensed text-[#F5E6D3]"
          >
            LA COLECCIÓN
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsPage;
