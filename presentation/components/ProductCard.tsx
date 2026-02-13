
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../../domain/product.model';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const isLarge = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className={`group relative overflow-hidden bg-[#0D0D0D] border border-white/5 ${
        isLarge ? 'md:col-span-1 md:row-span-2' : ''
      }`}
    >
      <Link to={`/productos/${product.id}`} className="block h-full relative">
        <div className="relative h-full overflow-hidden">
          <motion.img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-[1.5s] ease-out scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90" />
        </div>

        {/* Circular Price Badge */}
        <div className="absolute top-8 right-8 z-20">
          <div className="w-16 h-16 rounded-full bg-[#C8A96A]/80 backdrop-blur-sm flex items-center justify-center text-[#0D0D0D] text-[12px] font-bold">
            S/ {product.price.toFixed(0)}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-10 z-10">
          <h3 className="text-4xl font-condensed text-[#F5E6D3] mb-2 uppercase tracking-wider leading-none">
            {product.name}
          </h3>
          <p className="text-[12px] text-[#F5E6D3]/60 uppercase tracking-[0.2em] font-light">
            {product.shortDescription}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
