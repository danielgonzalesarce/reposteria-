
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';

const ReturnsPage: React.FC = () => {
  return (
    <InfoPageLayout 
      title="DEVOLUCIONES" 
      subtitle="POLÍTICA DE SATISFACCIÓN" 
      ghostText="VOLVER"
    >
      <div className="max-w-3xl">
        <h3 className="text-4xl font-condensed text-[#F5E6D3] mb-8 uppercase">NUESTRO COMPROMISO</h3>
        <p className="text-[#F5E6D3]/70 text-xl font-light leading-relaxed mb-12">
          En Maison d'Or, su satisfacción es nuestra prioridad absoluta. Dada la naturaleza perecedera de nuestros productos artesanales, hemos diseñado una política que protege la calidad y la seguridad de nuestros clientes.
        </p>
        
        <div className="space-y-12">
          <div>
            <h4 className="text-[#C8A96A] font-condensed text-2xl mb-4 uppercase">RECLAMACIONES POR CALIDAD</h4>
            <p className="text-[#F5E6D3]/60 font-light leading-relaxed">
              Si al recibir su pedido nota alguna irregularidad en la presentación o calidad, por favor notifíquelo de inmediato a nuestro repartidor o contáctenos dentro de las primeras 2 horas tras la entrega.
            </p>
          </div>
          <div>
            <h4 className="text-[#C8A96A] font-condensed text-2xl mb-4 uppercase">CANCELACIONES</h4>
            <p className="text-[#F5E6D3]/60 font-light leading-relaxed">
              Las cancelaciones de pedidos estándar se aceptan con un mínimo de 24 horas de antelación. Para pedidos personalizados, se requiere un aviso de al menos 72 horas.
            </p>
          </div>
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 italic text-[#F5E6D3]/40 text-sm">
            * No se aceptan devoluciones de productos una vez que han sido aceptados y firmados en la entrega, a menos que exista un defecto de fabricación no visible inicialmente.
          </div>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default ReturnsPage;
