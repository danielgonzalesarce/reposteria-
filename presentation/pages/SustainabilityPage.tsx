
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';

const SustainabilityPage: React.FC = () => {
  return (
    <InfoPageLayout 
      title="SOSTENIBILIDAD" 
      subtitle="COMPROMISO ÉTICO" 
      ghostText="ECO"
    >
      <div className="max-w-3xl">
        <h3 className="text-4xl font-condensed text-[#F5E6D3] mb-8 uppercase">RESPONSABILIDAD CON EL ORIGEN</h3>
        <p className="text-[#F5E6D3]/70 text-xl font-light leading-relaxed mb-12">
          Creemos que el lujo debe ser responsable. Por eso, trabajamos directamente con agricultores locales y proveedores que comparten nuestros valores de respeto por la tierra y el trabajo justo.
        </p>
        <div className="space-y-12">
          <div className="border-l-2 border-[#C8A96A] pl-8">
            <h4 className="text-[#C8A96A] font-condensed text-2xl mb-2 uppercase">Ingredientes de Proximidad</h4>
            <p className="text-[#F5E6D3]/50 text-sm">Reducimos nuestra huella de carbono priorizando productos de la región.</p>
          </div>
          <div className="border-l-2 border-[#C8A96A] pl-8">
            <h4 className="text-[#C8A96A] font-condensed text-2xl mb-2 uppercase">Packaging Biodegradable</h4>
            <p className="text-[#F5E6D3]/50 text-sm">Nuestras cajas y envoltorios son 100% reciclables o compostables.</p>
          </div>
          <div className="border-l-2 border-[#C8A96A] pl-8">
            <h4 className="text-[#C8A96A] font-condensed text-2xl mb-2 uppercase">Zero Waste</h4>
            <p className="text-[#F5E6D3]/50 text-sm">Implementamos procesos de producción optimizados para minimizar el desperdicio alimentario.</p>
          </div>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default SustainabilityPage;
