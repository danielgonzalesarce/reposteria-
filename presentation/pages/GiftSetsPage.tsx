
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';

const GiftSetsPage: React.FC = () => {
  return (
    <InfoPageLayout 
      title="JUEGOS REGALO" 
      subtitle="EL ARTE DE REGALAR" 
      ghostText="GIFT"
    >
      <div className="max-w-3xl">
        <p className="text-[#F5E6D3]/70 text-xl font-light leading-relaxed mb-12">
          Nuestros juegos de regalo están diseñados para impresionar. Cada caja es una curaduría de nuestras mejores piezas, presentadas en un empaque de lujo que refleja la calidad de su contenido.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-[#C8A96A] font-condensed text-2xl mb-4 uppercase">Cofre de Degustación</h3>
            <p className="text-[#F5E6D3]/50 text-sm">Una selección de 12 piezas miniatura de nuestra colección clásica.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-[#C8A96A] font-condensed text-2xl mb-4 uppercase">Colección Imperial</h3>
            <p className="text-[#F5E6D3]/50 text-sm">Nuestras 3 tartas insignia en formato petit-four con maridaje sugerido.</p>
          </div>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default GiftSetsPage;
