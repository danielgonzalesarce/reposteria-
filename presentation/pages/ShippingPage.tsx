
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';

const ShippingPage: React.FC = () => {
  return (
    <InfoPageLayout 
      title="ENVÍOS" 
      subtitle="LOGÍSTICA DE LUJO" 
      ghostText="ENVÍO"
    >
      <div className="max-w-3xl">
        <div className="space-y-16">
          <section>
            <h3 className="text-3xl font-condensed text-[#F5E6D3] mb-6 uppercase">COBERTURA</h3>
            <p className="text-[#F5E6D3]/70 font-light leading-relaxed">
              Actualmente realizamos entregas en toda el área metropolitana de Lima, con especial atención en San Isidro, Miraflores, Barranco y La Molina. Nuestras unidades están climatizadas para garantizar que cada creación llegue en perfectas condiciones.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-condensed text-[#F5E6D3] mb-6 uppercase">TIEMPOS DE ENTREGA</h3>
            <ul className="space-y-4 text-[#F5E6D3]/70 font-light">
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Pedidos Estándar</span>
                <span className="text-[#C8A96A]">24 - 48 Horas</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Pedidos Personalizados</span>
                <span className="text-[#C8A96A]">3 - 5 Días Hábiles</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-4">
                <span>Entregas Programadas</span>
                <span className="text-[#C8A96A]">Fecha a elección</span>
              </li>
            </ul>
          </section>

          <section className="bg-white/5 p-10 rounded-3xl border border-white/10">
            <h4 className="text-[#C8A96A] font-condensed text-xl mb-4 uppercase">CUIDADO ESPECIAL</h4>
            <p className="text-[#F5E6D3]/50 text-sm leading-relaxed">
              Debido a la naturaleza delicada de nuestros productos, no realizamos envíos por servicios de mensajería externos. Todo el transporte es gestionado por nuestro propio equipo de logística.
            </p>
          </section>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default ShippingPage;
