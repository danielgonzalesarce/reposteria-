
import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppService } from '../../infrastructure/whatsapp.service';

interface WhatsAppButtonProps {
  productName: string;
  variant?: 'floating' | 'full';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ productName, variant = 'full' }) => {
  const handleOrder = () => {
    if (variant === 'floating') {
      window.open(WhatsAppService.createGeneralInquiryLink(), '_blank');
    } else {
      WhatsAppService.redirectToWhatsApp(productName);
    }
  };

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-[#C8A96A] text-[#0D0D0D] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 shadow-xl hidden md:block"
        >
          ¿Necesitas información?
        </motion.div>

        <div className="relative">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-[#C8A96A] rounded-full blur-xl"
          />
          
          <motion.button
            onClick={handleOrder}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-10 bg-[#C8A96A] text-[#0D0D0D] w-16 h-16 rounded-full shadow-[0_15px_35px_rgba(200,169,106,0.5)] flex items-center justify-center group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.237-.038.37.281.133.32.455 1.112.494 1.192.039.08.065.173.013.277s-.078.12-.156.211c-.078.091-.163.204-.233.275-.07.071-.144.149-.061.292.083.143.369.608.791.984.545.485 1.004.636 1.148.708.145.072.23.06.315-.041.085-.101.366-.426.463-.571.097-.145.194-.121.327-.072s.845.398.99.47c.145.072.241.108.277.171.036.063.036.365-.108.77z"/>
            </svg>
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <motion.button
      onClick={handleOrder}
      whileHover={{ scale: 1.02, backgroundColor: '#D4B87A' }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-[#C8A96A] text-[#0D0D0D] py-6 rounded-full font-bold uppercase tracking-[0.3em] shadow-[0_15px_45px_rgba(200,169,106,0.2)] flex items-center justify-center gap-4 text-xs md:text-sm"
    >
      <span>Hacer pedido por WhatsApp</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.237-.038.37.281.133.32.455 1.112.494 1.192.039.08.065.173.013.277s-.078.12-.156.211c-.078.091-.163.204-.233.275-.07.071-.144.149-.061.292.083.143.369.608.791.984.545.485 1.004.636 1.148.708.145.072.23.06.315-.041.085-.101.366-.426.463-.571.097-.145.194-.121.327-.072s.845.398.99.47c.145.072.241.108.277.171.036.063.036.365-.108.77z"/>
      </svg>
    </motion.button>
  );
};

export default WhatsAppButton;
