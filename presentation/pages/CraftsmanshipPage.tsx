
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';

const CraftsmanshipPage: React.FC = () => {
  return (
    <InfoPageLayout 
      title="NUESTRA ARTESANÍA" 
      subtitle="TÉCNICA Y PASIÓN" 
      ghostText="ARTE"
    >
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-condensed text-[#F5E6D3] mb-6 uppercase">EL TOQUE HUMANO</h3>
            <p className="text-[#F5E6D3]/70 font-light leading-relaxed mb-6">
              En Maison d'Or, no creemos en la producción en masa. Cada pastel, cada bombón y cada tarta es elaborada a mano por maestros pasteleros que han dedicado décadas a perfeccionar su oficio.
            </p>
            <p className="text-[#F5E6D3]/70 font-light leading-relaxed">
              Desde el templado del chocolate hasta el delicado montaje de las capas, cada paso es un testimonio de nuestra dedicación a la excelencia artesanal.
            </p>
          </div>
          <div className="aspect-[4/5] bg-white/5 rounded-[40px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" 
              alt="Artesanía" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default CraftsmanshipPage;
