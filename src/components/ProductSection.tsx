import ProductCard from './ProductCard';
import xboxImg from '@/assets/xbox.jpg';
import steamImg from '@/assets/steam.jpg';
import mobileImg from '@/assets/mobile-gaming.jpg';
import characterImg from '@/assets/game-character.jpg';
import playstationImg from '@/assets/playstation.jpg';
import { ChevronRight } from 'lucide-react';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Array<{
    id: number;
    image: string;
    title: string;
    platform: string;
    originalPrice: number;
    discountPrice: number;
    discount?: number;
  }>;
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

// Sample data for demo (prices in USD)
export const sampleProducts = {
  playstation: [
    { id: 1, image: playstationImg, title: 'PlayStation Plus Essential 1 Mes', platform: 'PlayStation', originalPrice: 10, discountPrice: 8.50, discount: 15 },
    { id: 2, image: characterImg, title: 'God of War Ragnarök Digital', platform: 'PlayStation', originalPrice: 69, discountPrice: 55, discount: 20 },
    { id: 3, image: playstationImg, title: 'PlayStation Plus Extra 3 Meses', platform: 'PlayStation', originalPrice: 25, discountPrice: 21 },
    { id: 4, image: characterImg, title: 'Spider-Man 2 Digital Deluxe', platform: 'PlayStation', originalPrice: 79, discountPrice: 69, discount: 12 },
    { id: 5, image: playstationImg, title: 'PlayStation Plus Premium Anual', platform: 'PlayStation', originalPrice: 159, discountPrice: 135, discount: 15 },
  ],
  xbox: [
    { id: 6, image: xboxImg, title: 'Xbox Game Pass Ultimate 1 Mes', platform: 'Xbox', originalPrice: 17, discountPrice: 14, discount: 15 },
    { id: 7, image: xboxImg, title: 'Xbox Live Gold 3 Meses', platform: 'Xbox', originalPrice: 25, discountPrice: 22, discount: 11 },
    { id: 8, image: characterImg, title: 'Forza Horizon 5 Premium', platform: 'Xbox', originalPrice: 99, discountPrice: 79, discount: 20 },
    { id: 9, image: xboxImg, title: 'Xbox Game Pass Core 12 Meses', platform: 'Xbox', originalPrice: 59, discountPrice: 50, discount: 15 },
    { id: 10, image: characterImg, title: 'Halo Infinite Campaign', platform: 'Xbox', originalPrice: 59, discountPrice: 47, discount: 20 },
  ],
  steam: [
    { id: 11, image: steamImg, title: 'Steam Wallet $25 USD', platform: 'Steam', originalPrice: 25, discountPrice: 22.50, discount: 10 },
    { id: 12, image: characterImg, title: 'Elden Ring', platform: 'Steam', originalPrice: 59, discountPrice: 41, discount: 30 },
    { id: 13, image: steamImg, title: 'Steam Wallet $50 USD', platform: 'Steam', originalPrice: 50, discountPrice: 45, discount: 10 },
    { id: 14, image: characterImg, title: 'Cyberpunk 2077 Ultimate', platform: 'Steam', originalPrice: 69, discountPrice: 48, discount: 30 },
    { id: 15, image: steamImg, title: 'Steam Wallet $10 USD', platform: 'Steam', originalPrice: 10, discountPrice: 9, discount: 10 },
  ],
  mobile: [
    { id: 16, image: mobileImg, title: 'Free Fire 520 Diamantes', platform: 'Mobile', originalPrice: 9, discountPrice: 7.65, discount: 15 },
    { id: 17, image: mobileImg, title: 'Free Fire 1060 Diamantes', platform: 'Mobile', originalPrice: 17, discountPrice: 14, discount: 15 },
    { id: 18, image: mobileImg, title: 'Free Fire 2180 Diamantes', platform: 'Mobile', originalPrice: 29, discountPrice: 24.65, discount: 15 },
    { id: 19, image: mobileImg, title: 'PUBG Mobile 660 UC', platform: 'Mobile', originalPrice: 12, discountPrice: 10, discount: 15 },
    { id: 20, image: mobileImg, title: 'Roblox 800 Robux', platform: 'Mobile', originalPrice: 14, discountPrice: 12.60, discount: 10 },
  ],
};

export default ProductSection;
