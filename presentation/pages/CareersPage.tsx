
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';

const CareersPage: React.FC = () => {
  return (
    <InfoPageLayout 
      title="TRABAJA CON NOSOTROS" 
      subtitle="ÚNETE AL EQUIPO" 
      ghostText="TALENTO"
    >
      <div className="max-w-3xl">
        <p className="text-[#F5E6D3]/70 text-xl font-light leading-relaxed mb-16">
          ¿Te apasiona la excelencia y el arte de la pastelería? En Maison d'Or siempre estamos buscando talentos que deseen elevar sus habilidades y formar parte de una cultura de innovación y respeto por la tradición.
        </p>
        
        <div className="space-y-8">
          <h3 className="text-2xl font-condensed text-[#F5E6D3] uppercase tracking-widest">POSICIONES ABIERTAS</h3>
          <div className="group bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#C8A96A]/50 transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-[#C8A96A] font-condensed text-xl uppercase">Maestro Pastelero</h4>
                <p className="text-[#F5E6D3]/40 text-xs uppercase tracking-widest mt-1">Tiempo Completo | San Isidro</p>
              </div>
              <span className="text-[#C8A96A] group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>
          <div className="group bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-[#C8A96A]/50 transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-[#C8A96A] font-condensed text-xl uppercase">Especialista en Chocolatería</h4>
                <p className="text-[#F5E6D3]/40 text-xs uppercase tracking-widest mt-1">Tiempo Completo | San Isidro</p>
              </div>
              <span className="text-[#C8A96A] group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>
        </div>

        <div className="mt-20 p-12 bg-[#C8A96A]/10 rounded-[40px] border border-[#C8A96A]/20 text-center">
          <p className="text-[#F5E6D3] mb-6">¿No encuentras una posición para ti? Envíanos tu portafolio.</p>
          <a href="mailto:talento@maisondor.com" className="text-[#C8A96A] font-bold uppercase tracking-[0.3em] text-xs hover:underline">talento@maisondor.com</a>
        </div>
      </div>
    </InfoPageLayout>
  );
};

export default CareersPage;
