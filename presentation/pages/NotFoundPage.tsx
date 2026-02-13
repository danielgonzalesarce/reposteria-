
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-[#0D0D0D] px-8"
    >
      <div className="text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-9xl font-condensed text-[#C8A96A] mb-4"
        >
          404
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[#F5E6D3] text-2xl font-light uppercase tracking-[0.3em] mb-12"
        >
          PÁGINA NO ENCONTRADA
        </motion.p>
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.3 }}
        >
          <Link to="/">
            <button className="px-12 py-4 border border-[#C8A96A] text-[#C8A96A] uppercase tracking-widest text-sm hover:bg-[#C8A96A] hover:text-[#0D0D0D] transition-all duration-300 rounded-full">
              Volver al inicio
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
