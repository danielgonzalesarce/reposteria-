
import React from 'react';
import InfoPageLayout from '../components/InfoPageLayout';
import { ProductService } from '../../application/product.service';
import ProductCard from '../components/ProductCard';

const BestSellersPage: React.FC = () => {
  const products = ProductService.getAll().slice(0, 2); // Simulating best sellers

  return (
    <InfoPageLayout 
      title="MÁS VENDIDOS" 
      subtitle="FAVORITOS DE LA MAISON" 
      ghostText="TOP"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product, idx) => (
          <ProductCard key={product.id} product={product} index={idx} />
        ))}
      </div>
    </InfoPageLayout>
  );
};

export default BestSellersPage;
