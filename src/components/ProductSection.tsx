import ProductCard from './ProductCard';
import { allProducts, Product } from '@/data/products';
import { ChevronRight } from 'lucide-react';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

const ProductSection = ({ title, subtitle, products }: ProductSectionProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title gradient-text">{title}</h2>
            {subtitle && (
              <p className="text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-secondary transition-colors">
            <span className="text-sm font-medium">Ver todo</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="md:hidden mt-6 text-center">
          <button className="text-primary hover:text-secondary transition-colors text-sm font-medium">
            Ver todos los productos →
          </button>
        </div>
      </div>
    </section>
  );
};

// Sample data grouped by platform
export const sampleProducts = {
  playstation: allProducts.filter(p => p.platform === 'PlayStation'),
  xbox: allProducts.filter(p => p.platform === 'Xbox'),
  steam: allProducts.filter(p => p.platform === 'Steam'),
  mobile: allProducts.filter(p => p.platform === 'Mobile'),
};

export default ProductSection;
