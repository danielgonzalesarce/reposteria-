
import React from 'react';
import { motion } from 'framer-motion';

interface InfoPageProps {
  title: string;
  subtitle: string;
  ghostText: string;
  children: React.ReactNode;
}

const InfoPage: React.FC<InfoPageProps> = ({ title, subtitle, ghostText, children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#0D0D0D] min-h-screen pt-32 pb-24"
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center px-12 md:px-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-[30vw] font-condensed leading-none text-[#F5E6D3] select-none tracking-tighter uppercase"
          >
            {ghostText}
          </motion.h1>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C8A96A] uppercase tracking-[0.5em] text-[10px] font-bold mb-8"
          >
            {subtitle}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[8vw] font-condensed leading-[0.8] text-[#F5E6D3] uppercase mb-12"
          >
            {title.split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {i === 1 ? <span className="text-[#C8A96A]">{word}</span> : word}
                {i < title.split(' ').length - 1 && <br/>}
              </React.Fragment>
            ))}
          </motion.h2>
        </div>
      </section>

      <section className="px-12 md:px-24">
        <div className="container mx-auto">
          {children}
        </div>
      </section>
    </motion.div>
  );
};

export default InfoPage;
