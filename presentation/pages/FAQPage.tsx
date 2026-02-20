
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      q: "¿Cómo debo conservar mis pasteles?",
      a: "Recomendamos mantener nuestras tartas y pasteles refrigerados entre 4°C y 6°C. Para una mejor experiencia de sabor, retírelos del refrigerador 15-20 minutos antes de consumir."
    },
    {
      q: "¿Tienen opciones sin gluten o veganas?",
      a: "Sí, contamos con una selección limitada de productos diseñados para necesidades dietéticas especiales. Por favor, consulte nuestra sección de 'Colección' o contáctenos para pedidos personalizados."
    },
    {
      q: "¿Realizan pedidos para eventos corporativos?",
      a: "Absolutamente. Contamos con un servicio especializado para eventos y regalos corporativos que incluye personalización de empaques y logística dedicada."
    },
    {
      q: "¿Con cuánta anticipación debo hacer mi pedido?",
      a: "Para pedidos estándar, 24-48 horas es suficiente. Para creaciones personalizadas o eventos grandes, recomendamos al menos una semana de anticipación."
    }
  ];

  return (
    <InfoPageLayout 
      title="PREGUNTAS FRECUENTES" 
      subtitle="CENTRO DE AYUDA" 
      ghostText="FAQ"
    >
      <div className="max-w-3xl space-y-12">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-white/10 pb-12">
            <h3 className="text-[#C8A96A] font-condensed text-2xl mb-6 uppercase tracking-widest leading-none">{faq.q}</h3>
            <p className="text-[#F5E6D3]/60 font-light leading-relaxed text-lg">{faq.a}</p>
          </div>
        ))}
      </div>
    </InfoPageLayout>
  );
};

export default FAQPage;
