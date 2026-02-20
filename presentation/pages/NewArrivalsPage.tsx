
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';
import { ProductService } from '../../application/product.service';
import ProductCard from '../components/ProductCard';

const NewArrivalsPage: React.FC = () => {
  const products = ProductService.getAll().slice(0, 3); // Simulating new arrivals

  return (
    <InfoPageLayout 
      title="NUEVOS INGRESOS" 
      subtitle="TEMPORADA 2026" 
      ghostText="NUEVO"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product, idx) => (
          <ProductCard key={product.id} product={product} index={idx} />
        ))}
      </div>
      <div className="mt-24 text-center">
        <p className="text-[#F5E6D3]/50 font-light italic">Próximamente más creaciones exclusivas...</p>
      </div>
    </InfoPageLayout>
  );
};

export default NewArrivalsPage;
